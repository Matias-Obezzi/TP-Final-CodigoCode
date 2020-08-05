import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsistenciaService } from '../../../services/asistencia.service';
import { AlumnoService } from '../../../services/alumno.service';
import { CursoService } from '../../../services/curso.service';
import * as moment from 'moment';

@Component({
  selector: 'app-datos-presencia',
  templateUrl: './datos-presencia.component.html',
  styleUrls: ['./datos-presencia.component.scss']
})
export class DatosPresenciaComponent implements OnInit {

  alumnos: any;
  asistencia: any;
  curso: any;
  idCurso: any;
  error: any = false;
  message: any;

  constructor(private route: ActivatedRoute, private router:Router, private asistenciaService: AsistenciaService, private alumnoService: AlumnoService, private cursoService: CursoService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.idCurso = +params['idCurso'];
      if(!this.idCurso){
        this.router.navigate(['cursos']);
      }
    })
    this.asistenciaService.getAsistenciaByCurso(this.idCurso).then(data => {
      // console.log("curso: ", data)
      this.asistencia = data;
      this.alumnoService.getAlumnosByIdCurso(this.idCurso).then(data => {
        // console.log("alumnos: ", data)
        this.alumnos = data;
        this.cursoService.getCursoById(this.idCurso).then(data =>{
          this.curso = data.data;
        });
      })
    })
  }

  getClasesAlumno(numeroSocio:any){
    return this.asistencia.filter(el => {
      return el.numeroSocio == numeroSocio;
    })
  }

  getNumeroClases(){
    let max = 0;
    this.alumnos.forEach(alumno => {
      let temp = this.asistencia.filter(el => {
        return el.numeroSocio == alumno.numeroSocio;
      }).length;
      if(temp > max){
        max = temp;
      }
    });
    return max;
  }

  generarArray(tam:any){
    return Array(tam);
  }

  addColumn(){
    if(confirm("Esta seguro de que desea añadir una nueva columna de asistencia y así crear una nueva clase?")){
      let nroClase = this.getNumeroClases() + 1 ;
      console.log(this.asistencia)
      this.alumnos.forEach(alumno => {
        while(this.getClasesAlumno(alumno.numeroSocio).length < nroClase - 1){
          let nroClaseTemp = this.getClasesAlumno(alumno.numeroSocio).length.toString();
          this.asistencia.push({
            cursoClaseAlumno: `${this.idCurso}-${nroClaseTemp}-${alumno.numeroSocio}`,
            clase: nroClaseTemp,
            idCurso: this.idCurso,
            numeroSocio: alumno.numeroSocio,
            presente: false,
          })
        }
        this.asistencia.push({
          cursoClaseAlumno: `${this.idCurso}-${nroClase}-${alumno.numeroSocio}`,
          clase: nroClase.toString(),
          idCurso: this.idCurso,
          numeroSocio: alumno.numeroSocio,
          presente: false,
        })
      });
    }
  }

  getPorcentajeAsistencia(id:any){
    let per = this.asistencia
      .filter(el => el.numeroSocio == id && el.idCurso == this.idCurso)
      .filter(el => el.presente)
      .length / this.getNumeroClases() * 100;
    return per.toPrecision(2);
  }

  changeState(clase:any, alumno: any){
    let alDia = this.cuotaAlDia(alumno.fechaPago);
    if(!clase.presente){
      if(alDia || (!alDia && confirm("El alumno no posee la cuota al día, esta seguro de que desea darle el presente?"))){
        clase.presente = true;
      }
    }else{
      clase.presente = false;
    }
  }

  cuotaAlDia(fecha){
    let mom = moment(fecha).add(1, 'month');
    let now = moment();
    return mom.isAfter(now) ;
  }

  submit(){
    if(confirm("Esta seguro de que desea guardar los datos cargados?")){
      this.asistenciaService.setAsistenciaCurso(this.asistencia).then(data => {
        this.error = data.error;
        this.message = data.message;
      })
    }
  }

}
