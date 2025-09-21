import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../../servicse/auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);

  if (auth.isAuthenticated()) {
    return true;
  } else {
    auth.navigateUrl('/login');
    return false;
  }
};

export const authLogin: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);

  if (auth.isAuthenticated()) {
    auth.navigateUrl('/dash');
    return false;
  } else {
    return true;
  }
};
