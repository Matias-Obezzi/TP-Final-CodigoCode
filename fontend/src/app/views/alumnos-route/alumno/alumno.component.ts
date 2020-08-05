import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../../services/alumno.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss']
})
export class AlumnoComponent implements OnInit {

  alumnos: any ;
  alumnosFiltrados: any = [];

  constructor(private alumnoService : AlumnoService) { }

  ngOnInit(): void {
    this.alumnoService.getAlumnos().then(data =>{
      this.alumnos = data;
      this.alumnosFiltrados = data;
    });
  }

  filter(event: any){
    var text = event.target.value;
    if(text.length==0){
      this.alumnosFiltrados = this.alumnos;
    }else{
      var onlyNumbers = /^\d+$/.test(text);
      var onlyLetters = /^[a-zA-Z]+$/.test(text);
      if(onlyLetters){
        this.alumnosFiltrados = this.alumnos.filter(elem => {
          return (elem.nombre).toLowerCase().indexOf(text)!=-1 || (elem.apellido).toLowerCase().indexOf(text)!=-1;
        });
      }else if(onlyNumbers){
        this.alumnosFiltrados = this.alumnos.filter(elem => {
          return elem.dni.toString().indexOf(text)!=-1 || elem.numeroSocio.toString().indexOf(text)!=-1 || elem.curso.toString().indexOf(text)!=-1;
        });
      }else{
        console.error("error");
      }
    }
  }

  delete(alumno:any){
    if(confirm(`Esta seguro de que desea eliminar a \n${alumno.nombre} ${alumno.apellido}?`)){
      this.alumnoService.deleteAlumno(alumno.numeroSocio).then(data => {
        console.log(data);
      })
      let index = this.alumnos.findIndex((elem, index) => {
        if(elem.dni == alumno.dni){
          return index;
        }
      })
      this.alumnos.splice(index, 1);  
    }
  }
}
