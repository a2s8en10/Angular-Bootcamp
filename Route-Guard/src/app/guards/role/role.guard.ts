import { CanActivateChildFn } from '@angular/router';
import { AuthService } from '../../servicse/auth/auth.service';
import { inject } from '@angular/core';

export const roleGuard: CanActivateChildFn = (childRoute, state) => {
  const auth = inject(AuthService);

  const requiredRol = childRoute.data['role'];

  if (auth.hasRole(requiredRol)) {
    return true;
  } else {
    auth.navigateUrl('/dash');
    return false;
  }
};
