import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { TechnicienDashboardComponent } from './pages/technicien/technicien-dashboard/technicien-dashboard.component';

export const routes: Routes = [

    { path: 'login', component: LoginComponent, pathMatch: 'full' },
    { path: 'admin/admin-dashboard', component: AdminDashboardComponent },
     { path: 'technicien/technicien-dashboard', component: TechnicienDashboardComponent },
     { path: '', redirectTo: '/login', pathMatch: 'full' },
];
