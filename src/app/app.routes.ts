import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { TechnicienDashboardComponent } from './pages/technicien/technicien-dashboard/technicien-dashboard.component';
import { MainContentComponent } from './shared/components/main-content/main-content.component';
import { ListUsersComponent } from './pages/admin/users/list-users/list-users.component';
import { CreateUserComponent } from './pages/admin/users/create-user/create-user.component';
import { ListPannesComponent } from './pages/admin/pannes/list-pannes/list-pannes.component';
import { CreatePanneComponent } from './pages/admin/pannes/create-panne/create-panne.component';
import { EditPanneComponent } from './pages/admin/pannes/edit-panne/edit-panne.component';

export const routes: Routes = [

    { path: 'login', component: LoginComponent, pathMatch: 'full' },
    { path: 'admin/admin-dashboard', component: AdminDashboardComponent, children : [
        { path: '', component: MainContentComponent },
        { path: 'users', component: ListUsersComponent },
        { path: 'users/create', component: CreateUserComponent },
        { path: 'pannes', component: ListPannesComponent },
        { path: 'pannes/create', component: CreatePanneComponent },
        { path: 'pannes/edit/:idPanne', component: EditPanneComponent },

    ] },
     { path: 'technicien/technicien-dashboard', component: TechnicienDashboardComponent },
     { path: '', redirectTo: '/login', pathMatch: 'full' },
];
