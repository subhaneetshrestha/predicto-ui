import type { Routes } from '@angular/router';

import { ROOT_PATHS } from '@core/constants/paths.constants';

export const PRIVATE_ROUTES: Routes = [
  {
    path: ROOT_PATHS.listings,
    loadChildren: async () =>
      import('@features/listings/listings.routes').then((route) => route.LISTING_ROUTES),
  },
];
