import { Routes } from '@angular/router';
// import { HomeComponent } from './Components/home/home.component';
// import { AboutComponent } from './Components/about/about.component';
// import { AdminComponent } from './Components/admin/admin.component';

export const routes: Routes = [
  // {
  //   path: '',
  //   component: HomeComponent,
  // },
  // {
  //   path: 'about/:id',
  //   component: AboutComponent,
  // },
  // {
  //   path: 'admin',
  //   component: AdminComponent,
  // },
  {
    // using the lazy loading
    path: '',
    loadComponent: () =>
      import('./Components/home/home.component').then(
        (h) => h.HomeComponent
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./Components/about/about.component').then(
        (h) => h.AboutComponent
      ),
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./Components/admin/admin.component').then(
        (ad) => ad.AdminComponent
      ),
  },
  {
    path: 'course',
    loadComponent: () =>
      import('./Components/course/course.component').then(
        (ad) => ad.CourseComponent
      ),
  },
];
