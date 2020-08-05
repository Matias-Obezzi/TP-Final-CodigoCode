import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';

import { HomeComponent } from './views/home/home.component';

import { AlumnoComponent } from './views/alumnos-route/alumno/alumno.component';
import { DatosAlumnoComponent } from './views/alumnos-route/datos-alumno/datos-alumno.component';

import { CursosComponent } from './views/cursos-route/cursos/cursos.component';
import { DatosPresenciaComponent } from './views/cursos-route/datos-presencia/datos-presencia.component';
import { DatosCursoComponent } from './views/cursos-route/datos-curso/datos-curso.component';
import { AnaliticaComponent } from './views/analitica/analitica.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    AlumnoComponent,
    DatosAlumnoComponent,
    CursosComponent,
    DatosPresenciaComponent,
    DatosCursoComponent,
    AnaliticaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
