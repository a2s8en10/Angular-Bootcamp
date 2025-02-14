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
  ngOnInit(): void{
    this.seller.reloadSeller();
  }

  private seller = inject(SellerService);
  // constructor(private seller: SellerService) { }
  showLogin=false;

  signUp(data: SignUp): void{
    this.seller.userSignUp(data)   // api call
  }
  openLogin(){
    this.showLogin = true;
  }
  openSignUp(){
    this.showLogin = false;
  }
  Login(data: SignUp): void{
    console.warn(data);
    // this.seller.userSignUp(data) // api call
  }

}
