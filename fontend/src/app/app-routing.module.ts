import { NgModule, ViewRef } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';

import { AlumnoComponent } from './views/alumnos-route/alumno/alumno.component';
import { DatosAlumnoComponent } from './views/alumnos-route/datos-alumno/datos-alumno.component';

import { CursosComponent } from './views/cursos-route/cursos/cursos.component';
import { DatosPresenciaComponent } from './views/cursos-route/datos-presencia/datos-presencia.component';
import { DatosCursoComponent } from './views/cursos-route/datos-curso/datos-curso.component';
import { AnaliticaComponent } from './views/analitica/analitica.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'alumnos',
    component: AlumnoComponent
  },
  {
    path: 'alumnos/nuevo',
    component: DatosAlumnoComponent
  },
  {
    path: 'alumnos/modificar/:id',
    component: DatosAlumnoComponent
  },
  {
    path: 'cursos',
    component: CursosComponent
  },
  {
    path: 'cursos/nuevo',
    component: DatosCursoComponent
  },
  {
    path: 'cursos/modificar/:idCurso',
    component: DatosCursoComponent
  },
  {
    path: 'cursos/asistencia/:idCurso',
    component: DatosPresenciaComponent
  },
  {
    path: 'analitica',
    component: AnaliticaComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
