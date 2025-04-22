import type { Routes } from '@angular/router';

import { AUTHENTICATION_PATHS } from '@core/constants/paths.constants';

export const PUBLIC_ROUTES: Routes = [
  {
    path: AUTHENTICATION_PATHS.login,
    loadComponent: async () =>
      import('@features/authentication/pages/log-in/log-in.component').then(
        (component) => component.LogInComponent,
      ),
  },
  {
    path: AUTHENTICATION_PATHS.register,
    loadComponent: async () =>
      import('@features/authentication/pages/register/register.component').then(
        (component) => component.RegisterComponent,
      ),
  },
];