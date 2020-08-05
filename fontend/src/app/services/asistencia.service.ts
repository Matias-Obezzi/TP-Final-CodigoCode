import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {

  private baseURL: string = "http://localhost:8080/api/asistencia";

  constructor() { }

  public async getAsistencia() : Promise<any>{
    return await fetch(this.baseURL).then(data => data.json()).then(data => {
      return data;
    })
  }
  
  public async getAsistenciaByCurso(id: any) : Promise<any>{
    return await fetch(this.baseURL + '/' + id).then(data => data.json()).then(data => {
      return data;
    })
  }
  
  public async setAsistenciaCurso(data: any) : Promise<any>{
    return await fetch(this.baseURL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)}).then(data => data.json()).then(data => {
        return data.response;
      })
  }
  
}
