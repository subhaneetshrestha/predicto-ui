import type { Routes } from '@angular/router';

import { ROOT_PATHS } from '@core/constants/paths.constants';

export const PRIVATE_ROUTES: Routes = [
  {
    path: ROOT_PATHS.root,
    loadChildren: async () =>
      import('@features/home/home.routes').then((route) => route.HOME_ROUTES),
  },
  {
    path: ROOT_PATHS.events,
    loadChildren: async () =>
      import('@features/events/events.routes').then((route) => route.EVENT_ROUTES),
  },
];
