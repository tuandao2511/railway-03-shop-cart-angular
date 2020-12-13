import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { apiUrl } from 'src/environments/environment';
import { UserResponse } from '../model/UserResponse';
import { tap, catchError } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUserSubject: BehaviorSubject<UserResponse>

  constructor(private http: HttpClient, private cookieService: CookieService) {
    const currentUser = localStorage.getItem('currentUser'); 
    //co the bang null or co data
    this.currentUserSubject = new BehaviorSubject<UserResponse>(JSON.parse(currentUser));

  }

  register(user: User) : Observable<User>{
    const url = `${apiUrl}/register`;
    return this.http.post<User>(url, user).pipe();
  }

  login(model: any) : Observable<UserResponse>{
    const url = `${apiUrl}/login`;
    return this.http.post<UserResponse>(url, model).pipe(
      tap(user => {
        if(user!=null && user.token!=null) {
          this.cookieService.set('currentUser', JSON.stringify(user));
          if(model.remembered) {
            localStorage.setItem('currentUser', JSON.stringify(user));
          }
          this.currentUserSubject.next(user);
          console.log('user ' + user.name);
        }
      },
      catchError(err => {
        return of(null)
      }))
    )
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.cookieService.delete('currentUser');
    this.currentUserSubject.next(null);
  }

  getProfile(email: string) : Observable<User>{
    const url = `${apiUrl}/profile/${email}`;
    return this.http.get<User>(url);
  }

  editProfile(user: User) : Observable<User>{
    const url = `${apiUrl}/profile`;
    return this.http.put<User>(url, user); 
  }
}
