import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import {FormsModule} from '@angular/forms';
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';



@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    // MatSlideToggleModule,

  ],
  exports: [
    SignUpComponent,
    SignInComponent
  ]
})
export class UserAuthModule { }
