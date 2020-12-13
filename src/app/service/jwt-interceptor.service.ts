import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor{

  constructor(private userService: UserService) { 

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('JwtInterceptorService');
    
    const currenUser = this.userService.currentUserSubject.value;
    if(currenUser!=null && currenUser.token!=null) {
      req = req.clone({
        setHeaders: {
          Authorization: `${currenUser.type} ${currenUser.token}`,
          'Content-Type':'application/json'
        }
      });
    }
    return next.handle(req);
  }
}
