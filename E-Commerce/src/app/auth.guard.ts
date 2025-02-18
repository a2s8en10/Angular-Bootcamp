import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { SellerService } from './services/seller.service';

export const authGuard: CanActivateFn = (route, state) => {
  const sellerService = inject(SellerService);  // working this line like a constructor

  if (localStorage.getItem('seller')) {
    return true;
  }

  return sellerService.isSellerloggedIn; // this line return the true
}
