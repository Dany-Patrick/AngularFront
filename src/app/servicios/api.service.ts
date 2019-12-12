import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

url:string ;


  constructor( private httpClient:HttpClient) {  }

  getData() 
  {
    this.url = 'https://desastilla.infor.cl/astillas/api/AST/Tipo/Seccion';
    return this.httpClient.get(this.url); //url

  }

  traer_encuesta()
  {  
    this.url = "https://desastilla.infor.cl/astillas/api/Encuestas/ObtenerEncuesta";

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'DatosEntrada':'{"ID_ENCUESTADOR": 6,"ANO_PROCESO": 2019,"ID_ENCUESTA": null}' });
  let options = { headers: headers };
  
    return this.httpClient.post(this.url,null);

  }
  
  traer_region()
  {  

    
   this.url = "https://desastilla.infor.cl/astillas/api/AST/Tipo/Region";
    return this.httpClient.get(this.url);

  }
  traer_provincias()
  {  

    
   this.url = "https://desastilla.infor.cl/astillas/api/AST/Tipo/Provincia";
    return this.httpClient.get(this.url);

  }
  traer_comunas()
  {  

    
   this.url = "https://desastilla.infor.cl/astillas/api/AST/Tipo/Comuna";
    return this.httpClient.get(this.url);

  }
  traer_cargos()
  {  

    
   this.url = "https://desastilla.infor.cl/astillas/api/AST/Tipo/Cargos";
    return this.httpClient.get(this.url);

  }
  traer_encuestadores()
  {  

    
   this.url = "https://desastilla.infor.cl/astillas/api/AST/Tipo/Encuestador";
    return this.httpClient.get(this.url);

  }
}
