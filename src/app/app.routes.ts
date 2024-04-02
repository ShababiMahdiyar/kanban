import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: 'kanban',
    loadChildren: () =>
      import('./features/kanban/kanban.module').then((m) => m.KanbanModule),
  },
  { path: '', redirectTo: 'kanban', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
