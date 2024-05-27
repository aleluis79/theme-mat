import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'botones', pathMatch: 'full' },
  { path: 'botones', loadComponent: () => import('./botones/botones.component') },
  { path: 'paneles', loadComponent: () => import('./expansion-panel/expansion-panel.component') },
  { path: '**', redirectTo: '' }
];
