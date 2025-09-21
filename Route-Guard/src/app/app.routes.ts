import { Routes } from '@angular/router';
import { authGuard, authLogin } from './guards/auth/auth.guard';
import { roleGuard } from './guards/role/role.guard';
import { unsavedChangesGuard } from './guards/unsaved-changes/unsaved-changes.guard';
import { adminsOnlyGuard } from './guards/admins-only/admins-only.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    canActivate: [authLogin],
    loadComponent: () =>
      import('./pages/login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: 'dash',
    canActivate: [authGuard],
    canActivateChild: [roleGuard],
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
    children: [
      // { path: '', redirectTo: '/dash/reports', pathMatch: 'full' },
      {
        path: 'reports',
        data: { role: 'manager' },
        loadComponent: () =>
          import('./pages/dashboard/report/report.component').then(
            (c) => c.ReportComponent
          ),
      },
      {
        path: 'projects',
        data: { role: 'manager' },

        children: [
          {
            path: '',
            loadComponent: () =>
              import('./pages/dashboard/project/project.component').then(
                (c) => c.ProjectComponent
              ),
          },
          {
            path: ':id/edit',
            canDeactivate: [unsavedChangesGuard],
            loadComponent: () =>
              import(
                './pages/dashboard/project/edit-project/edit-project.component'
              ).then((c) => c.EditProjectComponent),
          },
        ],
      },
    ],
  },
  {
    path: 'setting',
    canMatch: [adminsOnlyGuard],
    loadComponent: () =>
      import('./pages/settings/settings.component').then(
        (c) => c.SettingsComponent
      ),
  },

  // default route
  {
    path: '**',
    redirectTo: '/login',
  },
];
