import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { AboutComponent } from './Component/about/about.component';

const routes: Routes = [
  //   { path: '', redirectTo: '/home', pathMatch: "full" },
  // { path: '', component: HomeComponent },
  // { path: 'about', component: AboutComponent },
  {
    path: 'home',
    loadChildren: () => import("./Component/home/home.module").then((hm) => hm.HomeModule)
  },
  {
    path: 'about',
    loadChildren: () => import("./Component/about/about.module").then((am) => am.AboutModule)
  },
  {
    path: 'admin',
    loadChildren: () => import("./Component/admin/admin.module").then((ad) => ad.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
