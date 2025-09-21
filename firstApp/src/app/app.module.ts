import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { CounterComponent } from './counter/counter.component';
import { LoopComponent } from './loop/loop.component';
import { ForLoopComponent } from './for-loop/for-loop.component';
import { HeaderComponent } from './header/header.component';
import { CounteComponent } from './counte/counte.component';

// import { SignInComponent } from './user-auth/sign-in/sign-in.component';
// import { SignUpComponent } from './user-auth/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CounterComponent,
    LoopComponent,
    ForLoopComponent,
    HeaderComponent,
    CounteComponent,

    // UserAuthModule,
    // SignInComponent,
    // SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
