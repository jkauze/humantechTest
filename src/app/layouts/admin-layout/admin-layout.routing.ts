import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { PeliculaComponent } from '../../pelicula/pelicula.component'
import { TurnosComponent } from '../../turnos/turnos.component';
import { AdministradoresComponent } from '../../administradores/administradores.component';



export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent },
    { path: 'user',           component: UserComponent },
    { path: 'pelicula',       component: PeliculaComponent },
    { path: 'turnos',       component: TurnosComponent },
    { path: 'administradores',       component: AdministradoresComponent },

];
