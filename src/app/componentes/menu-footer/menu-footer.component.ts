import { Component, OnInit ,Input} from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';
import { ActivatedRoute } from '@angular/router';
import { Metodos_service } from 'src/app/index_db/metodos/metodos.service';

@Component({
  selector: 'menu-footer',
  templateUrl: './menu-footer.component.html',
  styleUrls: ['./menu-footer.component.css']
})
export class MenuFooterComponent implements OnInit {
 data: Object[];
  clase_td:string;
  formulario:string;
  id_encuesta: number;
  Comunas:any;

  lista: any;
  constructor(private ast_encuesta: Metodos_service,private rutaActiva: ActivatedRoute) { }

 
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
