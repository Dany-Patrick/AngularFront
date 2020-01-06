import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

import { Metodos_service } from 'src/app/index_db/metodos/metodos.service';
import { Alert } from 'selenium-webdriver';
@Component({
  selector: 'app-row-list',
  templateUrl: './row-list.component.html',
  styleUrls: ['./row-list.component.css']
})

export class RowListComponent implements OnInit {
 
  orderId:any;
  id_encuesta : number;

  clase_td:string;
  formulario:string;

  datos:any;

  lista: any;
  constructor( private httpClient:HttpClient, private router: Router ,private ast_encuesta: Metodos_service,private rutaActiva: ActivatedRoute) {  }

  ngOnInit() {
    this.getData();

 
  }

  getData() {
 
    this.ast_encuesta.get_seccion().then((AST_ENCUESTA_SECCION: any[]) => { //Obtiene la colección de datos local

      this.lista = new Array(AST_ENCUESTA_SECCION.length);   

     
  
      for(var c = 0; c < AST_ENCUESTA_SECCION.length; c++)
      {       
            this.lista[c] = [[AST_ENCUESTA_SECCION[c].SECCION],[AST_ENCUESTA_SECCION[c].SUBSECCION],[AST_ENCUESTA_SECCION[c].DESCRIPCION]];        
  
          }

    });
    this.id_encuesta = this.rutaActiva.snapshot.params.id_encuesta;
  }
}