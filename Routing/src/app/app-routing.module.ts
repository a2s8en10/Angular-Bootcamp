import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutCompanyComponent } from './About-child/about-company/about-company.component';
import { AboutMeComponent } from './About-child/about-me/about-me.component';
import { HomePageComponent } from './Home-Child/home-page/home-page.component';
import { HomeProfileComponent } from './Home-Child/home-profile/home-profile.component';



const routes: Routes = [
 {
  path : 'Home',
  component: HomeComponent,
  children: [
    {path:'page' , component: HomePageComponent},
    {path:'profile', component: HomeProfileComponent}
  ]
 },
 {
   path : 'About/:id',
   component: AboutComponent,
   children:[
    {
      path : 'company', component: AboutCompanyComponent
    },
    {
      path : 'me', component : AboutMeComponent
    }

  ]

 },
 {
  path : 'Login',
  component: LoginComponent
 },
 {
  path : 'Signup',
  component: SignupComponent
 },
 {
  path: "**",
  component:NotFoundComponent
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
