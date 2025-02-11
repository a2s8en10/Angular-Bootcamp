import { Routes } from '@angular/router';

export const routes: Routes = [
  // {
  //   path: "header",
  //   loadComponent: () => import("./header/header.component").then((h) => h.HeaderComponent)
  // }
  {
    path: "",
    loadComponent: () => import("./Component/home/home.component").then((h) => h.HomeComponent)
  },
  {
    path: "seller",
    loadComponent: () => import("./Component/seller-auth/seller-auth.component").then((s) => s.SellerAuthComponent)
  },
  {
    path: "login",
    loadComponent: () => import("./Component/login/login.component").then((l) => l.LoginComponent)
  },
];
