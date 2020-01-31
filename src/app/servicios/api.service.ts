import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

url:string ;


  constructor( private httpClient:HttpClient) {  }

  traer_secciones() 
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
  traer_causa_paralizacion()
  {  

    
   this.url = "https://desastilla.infor.cl/astillas/api/AST/Tipo/Causa_paralizacion";
    return this.httpClient.get(this.url);

  }
  traer_causa_desaparecido()
  {  

    
   this.url = "https://desastilla.infor.cl/astillas/api/AST/Tipo/Causa_desaparecido";
    return this.httpClient.get(this.url);

  }
  traer_especie()
  {  

    
   this.url = "https://desastilla.infor.cl/astillas/api/AST/Tipo/Especie";
    return this.httpClient.get(this.url);

  }
  traer_unidad()
  {  

    
   this.url = "https://desastilla.infor.cl/astillas/api/AST/Tipo/Unidad";
    return this.httpClient.get(this.url);

  }
  traer_plaza()
  {  

    
   this.url = "https://desastilla.infor.cl/astillas/api/AST/Tipo/Plaza";
    return this.httpClient.get(this.url);

  }
  traer_destino_produccion()
  {  
 
   this.url = "https://desastilla.infor.cl/astillas/api/AST/Tipo/Destino_produccion";
    return this.httpClient.get(this.url);

  }
  traer_abastecimiento()
  {  
 
   this.url = "https://desastilla.infor.cl/astillas/api/AST/Tipo/Abastecimiento";
    return this.httpClient.get(this.url);

  }
  traer_especializacion()
  {  
 
   this.url = "https://desastilla.infor.cl/astillas/api/AST/Tipo/Especializacion";
    return this.httpClient.get(this.url);

  }
  traer_maquinaria()
  {  
 
   this.url = "https://desastilla.infor.cl/astillas/api/AST/Tipo/Maquinaria";
    return this.httpClient.get(this.url);

  }
  traer_monedas()
  {  
 
   this.url = "https://desastilla.infor.cl/astillas/api/AST/Tipo/Moneda";
    return this.httpClient.get(this.url);

  }
  traer_residuo()
  {  
 
   this.url = "https://desastilla.infor.cl/astillas/api/AST/Tipo/Residuo";
    return this.httpClient.get(this.url);

  }
}
