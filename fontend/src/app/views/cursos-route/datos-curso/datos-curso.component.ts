import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-datos-curso',
  templateUrl: './datos-curso.component.html',
  styleUrls: ['./datos-curso.component.scss']
})
export class DatosCursoComponent implements OnInit {
  
  formCurso: FormGroup;
  datosCurso: any;
  modify: boolean = false;
  message: string = '';
  error: boolean = false;

  constructor(private route: ActivatedRoute, private cursoService: CursoService) { }

  ngOnInit(): void {
    var id = null;
    this.route.params.subscribe(params => {
      id = +params['idCurso'];
    });

    this.setCurso();
    
    if(id){
      this.modify = true;
      this.cursoService.getCursoById(id).then(data => {
        this.datosCurso = data.data;
        console.log(this.datosCurso)
        this.setCurso();
      });
    }
  }

  setCurso(){
    this.formCurso = new FormGroup({
      curso: new FormControl(this.datosCurso?this.datosCurso.curso:null, [
      ]),
      nivel: new FormControl(this.datosCurso?this.datosCurso.nivel:'', [
        Validators.required
      ]),
      categoria: new FormControl(this.datosCurso?this.datosCurso.categoria:'', [
        Validators.required
      ]),
      edades: new FormControl(this.datosCurso?this.datosCurso.edades:'', [
        Validators.required
      ]),
      dias: new FormControl(this.datosCurso?this.datosCurso.dias:'', [
        Validators.required
      ]),
      valor: new FormControl(this.datosCurso?this.datosCurso.valor:'', [
        Validators.required
      ]),
    })
  }

  // filtrarCategorias(event: any){
  //   this.formCurso.setValue({
  //     nivel: this.formCurso.value.nivel,
  //     categoria: '',
  //     edades: this.formCurso.value.edades,
  //     dias: this.formCurso.value.dias,
  //     valor: this.formCurso.value.valor,
  //   })
  //   var nivel;
  //   for(var i = 0; i<this.niveles.length; i++){
  //     if(this.niveles[i].nivel == event.target.value){
  //       nivel = this.niveles[i];
  //     }
  //   }
  //   this.categoriasFiltradas = nivel.categorias;
  // }

  submit(){
    if(this.modify){
      this.cursoService.modifyCurso(this.formCurso.value).then(data => {
        console.log(data);
        if(data){
          this.error = data.error;
          this.message = data.message;
        }else{
          this.message = '';
          this.error = true;
        }
      })
    }else{
      this.cursoService.addCurso(this.formCurso.value).then(data => {
        console.log(data);
        if(data){
          this.error = data.error;
          this.message = data.message;
        }else{
          this.message = '';
          this.error = true;
        }
      })
    }
  }

}
