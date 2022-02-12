import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  API = environment.UrlServicio;
  listaPaises: Array<any> = []
  request: Array<any> = []

  constructor(private http: HttpClient) { }

  getDatosServicio() {
    const url = `${this.API}/all`;
    return this.http.get(url);
  }
  
}
