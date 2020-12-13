import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {
    username: '',
    password: '',
    remembered: false
  }

  isInvalid : boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  subject : Subject<number> = new Subject();
  behaviorSubject : BehaviorSubject<number> = new BehaviorSubject<number>(1);
  onSubmit() {
    this.userService.login(this.model).subscribe( user => {
        if(user!=null) {
            this.router.navigateByUrl('/');
        } else {
          this.isInvalid = true;
        }
    })
  }

  fillLoginFields(u, p) {
    this.model.username = u;
    this.model.password = p;
    this.onSubmit();
  }
}
