import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutMeComponent } from './About-child/about-me/about-me.component';
import { AboutCompanyComponent } from './About-child/about-company/about-company.component';
import { HomePageComponent } from './Home-Child/home-page/home-page.component';
import { HomeProfileComponent } from './Home-Child/home-profile/home-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    SignupComponent,
    NotFoundComponent,
    AboutMeComponent,
    AboutCompanyComponent,
    HomePageComponent,
    HomeProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
