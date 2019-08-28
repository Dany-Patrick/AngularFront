import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

url:string = 'https://danytest.infor.cl/api/AstillaTipoSeccion';
  constructor( private httpClient:HttpClient) {  }

  getData() 
  {
     
    return this.httpClient.get(this.url); //url

  }
  

}
