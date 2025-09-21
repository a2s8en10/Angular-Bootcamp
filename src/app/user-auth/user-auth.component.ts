import { Component } from '@angular/core';
import { Login, Signup } from '../data-type';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css'],
})
export class UserAuthComponent {
  show = false;
  authError: string="";

  constructor(private user: UserService) {}

  ngOnInit() {
    this.user.userAuthRefresh();
  }

  // form
  showSignUp() {
    this.show = false;
  }
  // form
  showLogin() {
    this.show = true;
  }

  // Api
  signUp(data: Signup) {
    console.log(data);
    this.user.userSignUp(data);
  }

  // Api
  Login(data: Login) {
    console.log(data);
    this.user.userLogin(data);
    this.user.invalidUserAuth.subscribe((result)=>{
      console.log(result);
      if(result){
        this.authError="Please Enter The Correct Details"
      }
    })
  }
}
