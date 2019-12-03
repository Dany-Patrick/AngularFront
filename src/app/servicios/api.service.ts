import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

url:string = 'https://desastilla.infor.cl/astillas/api/AST/Tipo/Seccion';
url_api:string = "https://desastilla.infor.cl/astillas/api/Encuestas/ObtenerEncuesta";

  constructor( private httpClient:HttpClient) {  }

  getData() 
  {
    return this.httpClient.get(this.url); //url

  }

  traer_encuesta()
  {  
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'DatosEntrada':'{"ID_ENCUESTADOR": 6,"ANO_PROCESO": 2019,"ID_ENCUESTA": null}' });
  let options = { headers: headers };
  
    return this.httpClient.post(this.url_api,null);

  }
  

}
