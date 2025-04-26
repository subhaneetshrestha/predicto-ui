import type { Routes } from '@angular/router';

import { ROOT_PATHS } from '@core/constants/paths.constants';

export const routes: Routes = [
  {
    path: ROOT_PATHS.root,
    loadComponent: async () =>
      import('@layouts/private/private.component').then((component) => component.PrivateComponent),
    loadChildren: async () =>
      import('@layouts/private/private.routes').then((route) => route.PRIVATE_ROUTES),
  },
  // {
  //   path: ROOT_PATHS.root,
  //   loadChildren: async () =>
  //     import('@layouts/public/public.routes').then((route) => route.PUBLIC_ROUTES),
  // },
  // {
  //   path: ROOT_PATHS.error404,
  //   loadComponent: async () =>
  //     import('@features/common/pages/not-found/not-found.component').then(
  //       (component) => component.NotFoundComponent,
  //     ),
  // },
  {
    path: '**',
    redirectTo: ROOT_PATHS.error404,
  },
];
