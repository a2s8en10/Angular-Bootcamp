import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../servicse/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  private auth = inject(AuthService);

  onSubmit(): void {
   const isUser =  this.auth.login (this.email, this.password);
   if(isUser){
    this.errorMessage = " ";
    this.auth.navigateUrl("/dash");
   }
   else{
    this.errorMessage = "Invalid email or password. Please try again.";
   }
  }
}
