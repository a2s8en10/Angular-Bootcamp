import { CanDeactivateFn } from '@angular/router';
import { Observable } from 'rxjs';

export interface canComponentDeactivate {
  canDeactivate: () => boolean | Observable<boolean>;
}

export const unsavedChangesGuard: CanDeactivateFn<canComponentDeactivate> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  console.log('Deactivate');
  return component.canDeactivate ? component.canDeactivate() : true;
};
