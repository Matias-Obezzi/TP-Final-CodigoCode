import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../../services/curso.service'
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos: any = [];
  cursosFiltrados: any = [];

  constructor(private cursoService: CursoService, private alumnoService: AlumnoService) { }

  ngOnInit(): void {
    this.cursoService.getCursos().then(data => {
      this.cursos = data;
      this.cursosFiltrados = data;
      this.alumnoService.getAlumnos().then(data => this.setAlumnos(data));
    })
  }

  filter(event: any){
    var text = event.target.value.toLowerCase().trim();
    if(text.length==0){
      this.cursosFiltrados = this.cursos;
    }else{
      var onlyNumbers = /^\d+$/.test(text);
      var onlyLetters = /^[a-zA-Z ]+$/.test(text);
      this.cursosFiltrados = this.cursos.filter(elem => {
        if(onlyNumbers){
          return elem.curso.toString().indexOf(text)!=-1 ||
            elem.edades.toString().trim().toLowerCase().indexOf(text) != -1 ||
            elem.edades.toString().trim().toLowerCase().indexOf("cualquiera")!=-1 ||
              (elem.edades.toString().trim().toLowerCase().indexOf("adelante")!=-1 &&
              parseInt(elem.edades.toString().trim().toLowerCase().split(" ")[0]) <= parseInt(text));
        }else if(onlyLetters){
          return elem.categoria.toLowerCase().indexOf(text)!=-1 ||
            elem.nivel.toLowerCase().indexOf(text)!=-1 ||
            elem.dias.toLowerCase().indexOf(text)!=-1
        }
      });
    }
  }

  setAlumnos(alumnos: any){
    this.cursos.forEach(curso => {
      curso.cantAlumnos = alumnos.filter(el => el.idCurso == curso.curso).length;
    });
  }

  delete(curso: any){
    if(confirm(`Esta seguro de que desea eliminar el curso ${curso.curso}?`)){
      this.cursoService.deleteCurso(curso.curso).then(data => {
        if(data && data.error){
          console.error(data.message);
        }else if(!data){
          console.error("Ocurrio un error");
        }else{
          console.log(data.message);
        }
      })
      let index = this.cursos.findIndex((elem, index) => {
        if(elem.curso ==curso.curso){
          return index;
        }
      })
      this.cursos.splice(index, 1); 
    }
  }
}
