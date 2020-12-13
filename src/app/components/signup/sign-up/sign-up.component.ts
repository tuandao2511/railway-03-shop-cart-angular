import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user : User = new User();
  //khac biet interpolation vs property binding
  constructor(private userService: UserService) { 

  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.register(this.user).subscribe(
      user => {
        
      }
    )
  }
}
