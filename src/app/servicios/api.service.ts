import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import { Urls } from '../utiles/urls';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  url:string ;

  constructor( private httpClient:HttpClient) {  }

  obtenerTabla(nombretabla :string){        
    this.url = Urls.rutas[nombretabla];     
    /*  let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'DatosEntrada':'{"ID_ENCUESTADOR": 6,"ANO_PROCESO": 2019,"ID_ENCUESTA": null}' });
      let options = { headers: headers }; */
    if(nombretabla == "AST_ENCUESTA"){
      return this.httpClient.post(this.url,null);
    } 
    return this.httpClient.get(this.url); //url
  } 
  traer_secciones() 
  {
    this.url = 'https://desastilla.infor.cl/astillas/api/AST/Tipo/Seccion';
    return this.httpClient.get(this.url); //url

  }
}
