import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/services/curso.service';
import { AlumnoService } from 'src/app/services/alumno.service';
import { AsistenciaService } from 'src/app/services/asistencia.service';
import * as moment from 'moment';

@Component({
  selector: 'app-analitica',
  templateUrl: './analitica.component.html',
  styleUrls: ['./analitica.component.scss']
})
export class AnaliticaComponent implements OnInit {

  alumnos:any;
  cursos:any;
  asistencias:any;
  totales: any = [];

  constructor(private alumnoService: AlumnoService, private cursoService: CursoService, private asistenciaService: AsistenciaService) { }

  ngOnInit(): void {
    this.alumnoService.getAlumnos().then(alumnos => {
      this.alumnos = alumnos;
      this.cursoService.getCursos().then(cursos => {
        this.cursos = cursos;
        this.asistenciaService.getAsistencia().then(asistencias => {
          this.asistencias = asistencias;
          this.setAnalitica();
        })
      });
    });
  }

  setAnalitica(){
    var totales = [];
    this.cursos.forEach(curso => {
      let alumnos = this.alumnos.filter(al => al.idCurso == curso.curso);
      let asistencias = this.asistencias.filter(el => el.idCurso == curso.curso);
      let cantClases = 0;
      let pagos = 0;
      alumnos.forEach(alumno => {
        pagos += this.cuotaAlDia(alumno.fechaPago);
        let cant = asistencias.filter(asis => asis.numeroSocio == alumno.numeroSocio).length;
        if(cant > cantClases){
          cantClases = cant;
        }
      })
      let presentes = asistencias.filter(el => el.presente).length;
      let index = totales.findIndex(el => el.nivel.toLowerCase().trim() == curso.nivel.toLowerCase().trim());
      if(index == -1){
        totales.push({
          nivel: curso.nivel.toLowerCase(),
          cantCursos: 1,
          cantPresentes: presentes,
          cantClases: cantClases,
          cantAlumnos: alumnos.length,
          cantPagos: pagos
        })
      }else{
        totales[index].cantPresentes += presentes;
        totales[index].cantClases += cantClases;
        totales[index].cantAlumnos += alumnos.length;
        totales[index].cantCursos += 1;
        totales[index].cantPagos += pagos;
      }
    });
    this.totales = totales
  }

  cuotaAlDia(fecha): number{
    let mom = moment(fecha).add(1, 'month');
    let now = moment();
    return mom.isAfter(now)?1:0 ;
  }

}
