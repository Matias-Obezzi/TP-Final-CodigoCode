import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private baseURL: string = "http://localhost:8080/api/cursos";

  constructor() { }

  public async getCursos() : Promise<any>{
    return await fetch(this.baseURL).then(data => data.json()).then(data => {
      return data;
    })
  }

  public async getCursoById(id: any) : Promise<any>{
    return await fetch(this.baseURL + "/" + id ).then(data => data.json()).then(data => {
      return data.response;
    })
  }

  public async addCurso(data: any): Promise<any>{
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

  public async modifyCurso(data: any): Promise<any>{
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

  public async deleteCurso(id: any): Promise<any>{
    return await fetch(this.baseURL + '/' + id, {
      method: 'DELETE'
    }).then(data => data.json()).then(data => {
      return data.response;
    });
  }
}
