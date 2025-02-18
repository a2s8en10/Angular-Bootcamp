import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SellerService } from '../../services/seller.service';
import { SignUp } from '../../data-type';

@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent {

  // ngOnInit(): void{      changes
  //   this.seller.reloadSeller(); changes
  // } changes


  // private seller = inject(SellerService); changes
  constructor(private seller: SellerService) {
    this.seller.reloadSeller(); // changes
  }
  showLogin=false;
  authError : string = "";

  signUp(data: SignUp): void{
    console.warn(data); // changes
    this.seller.userSignUp(data);  // api call
  }
  openLogin(){
    this.showLogin = true;
  }
  openSignUp(){
    this.showLogin = false;
  }
  Login(data: SignUp): void{
    this.authError="";
    // console.warn(data);
    this.seller.userLogin(data) // api call
    this.seller.isLoginError.subscribe((isError) => {
      if(isError){
        this.authError = "Email or password incorrect !!"
      }
    })
  }

}
