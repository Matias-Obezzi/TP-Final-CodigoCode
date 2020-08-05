import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private baseURL: string = "http://localhost:8080/api/alumnos";

  constructor() { }
  
  public async getAlumnos(): Promise<any>{
    return await fetch(this.baseURL).then(data => data.json()).then(data => {
      return data;
    });
  }

  public async getAlumnosByIdCurso(id: any): Promise<any>{
    return await fetch(this.baseURL + "/curso/" + id).then(data => data.json()).then(data => {
      return data;
    });
  }

  public async getAlumnoById(id: any): Promise<any>{
    return await fetch(this.baseURL + "/" + id).then(data => data.json()).then(data => {
      return data.response;
    });
  }

  public async addAlumno(data: any): Promise<any>{
    return await fetch(this.baseURL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(data => data.json()).then(data => {
      return data.response;
    });
  }

  public async modifyAlumno(data: any): Promise<any>{
    return await fetch(this.baseURL, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(data => data.json()).then(data => {
      return data.response;
    });
  }

  public async deleteAlumno(id: any): Promise<any>{
    return await fetch(this.baseURL + '/' + id, {
      method: 'DELETE'
    }).then(data => data.json()).then(data => {
      return data.response;
    });
  }
}
