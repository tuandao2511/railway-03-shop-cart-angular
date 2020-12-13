import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { UserResponse } from 'src/app/model/UserResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  user = new User();
  currentUser : UserResponse;

  ngOnInit(): void {
    this.currentUser = this.userService.currentUserSubject.value;
    this.userService.getProfile(this.currentUser.account).subscribe(
      u => {
        this.user = u;
        this.user.password = '';
      },
      e => {
        console.log('error get profile');
      }
    )
  }

  onSubmit() {
    this.userService.editProfile(this.user).subscribe(u => {
      this.router.navigateByUrl('/')
    })
  }
}
