import { Component, OnInit, Output } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import { AST_ENCUESTA } from 'src/app/index_db/models/AST_ENCUESTA';
import { Metodos_service } from 'src/app/index_db/metodos/metodos.service';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']

})
export class RowComponent implements OnInit {
variable:0 ;
//AST_ENCUESTA_List: any;
id_encuesta: any;

 AST_ENCUESTA_List: Array<AST_ENCUESTA> = []; 
  
  constructor(private router: Router,private ast_encuesta: Metodos_service) { }


  ngOnInit() {
    this.ast_encuesta.getAll().then((AST_ENCUESTA: any[]) => { //Obtiene la colección de datos local
      this.AST_ENCUESTA_List = AST_ENCUESTA; //Variable de interpolación con el html

  });


};
    
}
