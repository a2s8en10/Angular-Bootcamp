import { Routes } from '@angular/router';
// import { HomeComponent } from './Component/home/home.component';
// import { AboutComponent } from './Component/about/about.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: "full" },
  // { path: 'home', component: HomeComponent },
  // { path: 'about/:id', component: AboutComponent },

  // lazy loading
  {
    path: "home",
    loadComponent: () => import("./Component/home/home.component").then((h) => h.HomeComponent)
  },
  {
    path: "about",
    loadComponent: () => import("./Component/about/about.component").then((a) => a.AboutComponent)
  },
  {
    path: "admin",
    loadComponent: () => import("./Component/admin/admin.component").then((ad) => ad.AdminComponent)
  },
  {
    path: "courses",
    loadComponent: () => import("./Component/course/course.component").then((cs) => cs.CourseComponent)
  },


];
