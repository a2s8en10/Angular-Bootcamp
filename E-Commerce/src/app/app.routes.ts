import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';

export const routes: Routes = [
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
  {
    path: "seller-home",
    loadComponent: () => import("./Component/seller-home/seller-home.component").then((l) => l.SellerHomeComponent),
    canActivate: [authGuard]
  },
];
