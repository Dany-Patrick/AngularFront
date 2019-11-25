import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { ApiService } from 'src/app/servicios/api.service';



import { DexieService } from '../../servicios/dexie.service';

import { AST_ENCUESTA } from '../models/AST_ENCUESTA';

import { AST_ENCUESTA_ABASTECIMIENTO } from '../models/AST_ENCUESTA_ABASTECIMIENTO';
@Injectable()
export class Ast_Encuesta_service  {

  data: any;
  clase_encuesta: AST_ENCUESTA;
  clase_abastacimiento: AST_ENCUESTA_ABASTECIMIENTO;
  table: Dexie.Table<AST_ENCUESTA, number>;//instancia de la base datos

  constructor(private dexieService: DexieService,private apiService: ApiService ) {
    this.table = this.dexieService.table('AST_ENCUESTA');//Se asigna la tabla de la base de datos
  }

  getAll() {//Obtiene todos los datos de la tabla
    
    return this.table.toArray();
  }

  add(data) { // Agrega datos al index db
    return this.table.add(data);
  }

 

  remove(id) { //Elimina datos
    return this.table.delete(id);
  }





  crear_tabla() {

    this.apiService.traer_encuesta().subscribe((
   (data: any[]) =>  
       {  
           this.data = JSON.parse(JSON.stringify(data)); 
          // alert(Object.keys(this.data).length);
          /* for(var i = i; i <Object.keys(this.data).length ;i++)
           {
             this.array[i] = JSON.stringify(this.data[i]);
           }
          */
        console.log(JSON.stringify(this.data[0].AST_ENCUESTA_ESPECIE_C)); 
       //  this.data = Object.keys(this.data[i].ID_ENCUESTA).length; 
        // console.log(JSON.stringify(this.data[i].ID_ENCUESTA));
                 for(var i = 0; i < Object.keys(this.data).length ;i++){

                 // this.clase_abastacimiento = new AST_ENCUESTA_ABASTECIMIENTO();
                  console.log();
           this.clase_encuesta = new AST_ENCUESTA(
           parseInt( JSON.stringify(this.data[i].ID_ENCUESTA)),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           JSON.stringify(this.data[i].ID_ENCUESTA),
           JSON.stringify(this.data[i].ID_ENCUESTA),
           JSON.stringify(this.data[i].ID_ENCUESTA),
           JSON.stringify(this.data[i].ID_ENCUESTA),
           JSON.stringify(this.data[i].ID_ENCUESTA),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           JSON.stringify(this.data[i].ID_ENCUESTA),
           JSON.stringify(this.data[i].ID_ENCUESTA),
           JSON.stringify(this.data[i].ID_ENCUESTA),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           JSON.stringify(this.data[i].ID_ENCUESTA),
           JSON.stringify(this.data[i].ID_ENCUESTA),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           JSON.stringify(this.data[i].ID_ENCUESTA),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           JSON.stringify(this.data[i].ID_ENCUESTA),
           JSON.stringify(this.data[i].ID_ENCUESTA),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           parseInt(JSON.stringify(this.data[i].ID_ENCUESTA)),
           JSON.stringify(this.data[i].ID_ENCUESTA),
           this.clase_encuesta 
   
           );
        
           //add(this.clase_encuesta);
          this.add(this.clase_abastacimiento );
         }
      //   console.log(this.clase_encuesta.ID_ENCUESTA);
            //console.log(JSON.stringify(this.data[i].ID_ENCUESTA));
       }
   ));

    
     }
}