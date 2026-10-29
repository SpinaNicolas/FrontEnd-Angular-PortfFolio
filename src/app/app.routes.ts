import { Routes } from '@angular/router';
import path from 'path';
import { ProyectosList } from './pages/proyectos-list/proyectos-list';
import { SolicitudesList } from './pages/solicitudes-list/solicitudes-list';
import { Form } from './pages/form/form';
import { ProyectoDetails } from './pages/proyecto-details/proyecto-details';
import { SolicitudesDetails } from './pages/solicitudes-details/solicitudes-details';
import { Home } from './pages/home/home';
import { form } from '@angular/forms/signals';
import { homedir } from 'os';

export const routes: Routes = [

    {path:'',component:Home},
    {path:'proyectos',component: ProyectosList},
    {path:'solicitudes',component:SolicitudesList},
    {path:'solicitud/nueva',component:Form},
    {path:'proyectos/:id',component:ProyectoDetails},
    {path:'solicitudes/:id',component:SolicitudesDetails},
    {path:'solicitudes/:id/editar',component:Form},
    {
  path: 'prueba',
  component: Form
}
     
];
