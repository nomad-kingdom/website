import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: 'Nomad Kingdom - Breaking Systems to Build Stronger Ones',
        loadComponent: () => import('./pages/home/home.page').then(page => page.HomePage)
    }
];
