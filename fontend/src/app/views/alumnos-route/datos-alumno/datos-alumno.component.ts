import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlumnoService } from 'src/app/services/alumno.service';
import { CursoService } from 'src/app/services/curso.service';
import { AsistenciaService } from 'src/app/services/asistencia.service';
import * as moment from 'moment';

@Component({
  selector: 'app-datos-alumno',
  templateUrl: './datos-alumno.component.html',
  styleUrls: ['./datos-alumno.component.scss']
})
export class DatosAlumnoComponent implements OnInit {

  formAlumno: FormGroup;
  formTutor: FormGroup;
  menorEdad: boolean = true;
  edadAlumno: number;
  datosAlumno: any = null;
  cursos: any = null;
  certificado: any = null;
  modify: boolean = false;
  pagado: boolean = false;
  error: boolean = false;
  message: string = '';
  
  constructor(private route: ActivatedRoute, private alumnoService : AlumnoService, private cursoService : CursoService, private asistenciaService : AsistenciaService) { }

  ngOnInit(): void {
    var id = null;
    this.route.params.subscribe(params => {
      id = +params['id'];
    });

    this.setAlumno();
    this.cursoService.getCursos().then(data=>{
      this.cursos = data;
    })
    
    if(id){
      this.modify = true;
      this.alumnoService.getAlumnoById(id).then(data => {
        this.datosAlumno = data.data;
      }).then(()=>{
        this.setAlumno();
      });
    }
  }

  setAlumno(){
    this.menorEdad = this.datosAlumno?
      this.getEdad(this.datosAlumno.fechaNacimiento)<18 :
      false;
    let time = new Date(0);
    this.formAlumno = new FormGroup({
      nombre: new FormControl(this.datosAlumno?this.datosAlumno.nombre:'' , [
        Validators.required
      ]),
      apellido: new FormControl(this.datosAlumno?this.datosAlumno.apellido:'' , [
        Validators.required
      ]),
      dni: new FormControl(this.datosAlumno?this.datosAlumno.dni:0, [
        Validators.minLength(8),
        Validators.required
      ]),
      fechaNacimiento: new FormControl((new Date(this.datosAlumno?this.datosAlumno.fechaNacimiento:null)).toISOString().substring(0,10), [
        Validators.required
      ]),
      email: new FormControl(this.datosAlumno?this.datosAlumno.email:'' , [
        Validators.email,
        Validators.required
      ]),
      obraSocial: new FormControl(this.datosAlumno?this.datosAlumno.obraSocial:'' , [
        Validators.required
      ]),
      certificadoName: new FormControl(this.datosAlumno?this.datosAlumno.certificadoName:'', [
        Validators.required
      ]),
      certificadoData: new FormControl(this.datosAlumno?this.datosAlumno.certificadoData:'', [
        Validators.required
      ]),
      idCurso: new FormControl(this.datosAlumno?this.datosAlumno.idCurso:null, [
        Validators.required
      ]),
      fechaPago: new FormControl(
        this.datosAlumno?
          this.datosAlumno.fechaPago:
          time.getFullYear() + '-' + time.getMonth() + '-' + time.getDate()
        , []),
      numeroSocio: new FormControl(this.datosAlumno?this.datosAlumno.numeroSocio:null, [])
    });

    this.formTutor = new FormGroup({
      nombreTutor: new FormControl(this.datosAlumno?this.datosAlumno.nombreTutor:'' , [
        Validators.required
      ]),
      apellidoTutor: new FormControl(this.datosAlumno?this.datosAlumno.apellidoTutor:'' , [
        Validators.required
      ]),
      dniTutor: new FormControl(this.datosAlumno?this.datosAlumno.dniTutor:0, [
        Validators.minLength(8),
        Validators.required
      ]),
      emailTutor: new FormControl(this.datosAlumno?this.datosAlumno.emailTutor:'' , [
        Validators.email,
        Validators.required
      ]),
      telefonoTutor: new FormControl(this.datosAlumno?this.datosAlumno.telefonoTutor:'', [
        Validators.required
      ])
    });
    this.mesPagado();
  }

  edad(event: any){
    this.edadAlumno = this.getEdad(event.target.value);
    this.menorEdad =  this.edadAlumno < 18;
  }

  getEdad(fecha: string){
    let today = new Date(); 
    let date = new Date(fecha);
    return today.getFullYear() - date.getFullYear(); 
  }

  mesPagado(){
    let mom = moment(this.formAlumno.value.fechaPago).add(1, 'month');
    let now = moment();
    this.pagado = mom.isAfter(now) ;
  }

  pagar(){
    if(confirm("Esta seguro de que desea confirmar el pago de la cuota mensual?")){
      let temp = this.formAlumno.value;
      let month = moment().add(1, 'months');
      this.formAlumno.setValue({
        numeroSocio: temp.numeroSocio,
        nombre: temp.nombre,
        apellido: temp.apellido,
        dni: temp.dni,
        fechaNacimiento: temp.fechaNacimiento,
        email: temp.email,
        obraSocial: temp.obraSocial,
        certificadoData: temp.certificadoData,
        certificadoName: temp.certificadoName,
        idCurso: temp.idCurso,
        fechaPago: month.get('year') + '-' + month.get('month') + '-' + month.get('date')
      });
      this.mesPagado();
    }
  }

  fileInput(event: any){
    // console.log(event.target.files[0]);
    let temp = this.formAlumno.value;
    console.log(event.target.files)
    var that = this;
    var tgt = event.target || window.event.srcElement, files = tgt.files;
    if (FileReader && files && files.length) {
        var fr = new FileReader();
        fr.onload = function () {
          that.certificado = fr.result;
          that.formAlumno.setValue({
            numeroSocio: temp.numeroSocio,
            nombre: temp.nombre,
            apellido: temp.apellido,
            dni: temp.dni,
            fechaNacimiento: temp.fechaNacimiento,
            email: temp.email,
            obraSocial: temp.obraSocial,
            certificadoData: fr.result,
            certificadoName: event.target.files[0].name,
            idCurso: temp.idCurso,
            fechaPago: temp.fechaPago
          });
        }
        fr.readAsDataURL(files[0]);
    } 
  }
  
  // AGREGA LO DE o2 A o1 Y SI o2 TIENE UN VALOR PARA UNA KEY DE o1, ENTONCES REEMPLAZA EL VALOR
  jsonConcat(o1:any, o2:any) {
    for (var key in o2) {
      o1[key] = o2[key];
    }
    return o1;
  }
  
  getCantClasesCurso(id:any){
    return this.cursos.filter(curso => {
      return curso.curso == id;
    })[0].cantClases;
  }

  submit(){
    var final;
    final = {};
    if(this.menorEdad){
      this.jsonConcat(final,this.formAlumno.value);
      this.jsonConcat(final,this.formTutor.value);
    }else{
      this.jsonConcat(final,this.formAlumno.value);
      this.jsonConcat(final, {
        nombreTutor: null,
        apellidoTutor: null,
        dniTutor: null,
        emailTutor: null,
        telefonoTutor: null
      });
    }
    console.log(final)
    if(this.modify && confirm("Esta seguro de que desea guardar la modificación?")){
      this.alumnoService.modifyAlumno(final).then(data => {
        if(data){
          this.error = data.error;
          this.message = data.message;
        }else{
          this.error = false;
          this.message = '';
        }
      });
    }else if(!this.modify && confirm("Esta seguro de que desea añadir este usuario?")){
      this.alumnoService.addAlumno(final).then(data => {
        if(data){
          this.error = data.error;
          this.message = data.message;
        }else{
          this.error = false;
          this.message = '';
        }
      });
    }
  }

}
