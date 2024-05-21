import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';

export const routes: Routes =
[
    {
        path: '',
        title: '[Project] Doggy Gallery',
        component: HomeComponent
    },
    {
        path: '**',
        redirectTo: '/'
    },
];
