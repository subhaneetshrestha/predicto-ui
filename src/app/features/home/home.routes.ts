import type { Routes } from '@angular/router';

import { EVENT_PATHS, HOME_PATHS } from '@core/constants/paths.constants';

export const HOME_ROUTES: Routes = [
  {
    path: HOME_PATHS.home,
    loadComponent: async () =>
      import('@features/home/pages/base/base.component').then(
        (component) => component.BaseComponent,
      ),
  },
  {
    path: EVENT_PATHS.eventDetail,
    loadComponent: async () =>
      import('@features/events/pages/events/events.component').then(
        (component) => component.EventsComponent,
      ),
  },
];
