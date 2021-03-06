import { Component, OnInit } from '@angular/core';
import { AST_ENCUESTA } from '../../index_db/models/AST_ENCUESTA';
import {Ast_Encuesta_Service} from '../../index_db/metodos/ast_encuesta.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ast_encuesta: Ast_Encuesta_Service) { }
  todosList: Array<AST_ENCUESTA> = []; 
  ngOnInit() {

    this.ast_encuesta.crear_tablas();


   this.ast_encuesta.getAll().then((todos: Array<AST_ENCUESTA>) => { //Obtiene la colección de datos local
    this.todosList = todos; //Variable de interpolación con el html

  });;
  }
 
    
    

}





