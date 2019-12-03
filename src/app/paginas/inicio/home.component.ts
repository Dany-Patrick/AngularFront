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

  ngOnInit() {

    this.ast_encuesta.crear_tablas();


  }
 
    
    

}





