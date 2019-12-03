import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { ApiService } from 'src/app/servicios/api.service';
import { DexieService } from '../../servicios/dexie.service';
import { AST_ENCUESTA } from '../models/AST_ENCUESTA';
import { AST_ENCUESTA_ABASTECIMIENTO } from '../models/AST_ENCUESTA_ABASTECIMIENTO';
import { AST_ENCUESTA_ESPECIE_C } from '../models/AST_ENCUESTA_ESPECIE_C';


@Injectable()
export class Ast_Encuesta_Service  {

  data: any;
  clase_encuesta: AST_ENCUESTA;
 // clase_especie_c: AST_ENCUESTA_ESPECIE_C;
 // clase_abastecimiento: AST_ENCUESTA_ABASTECIMIENTO;

  
  tabla_ast_encuesta: Dexie.Table<any[], number>;//instancia de la base datos
  
 // tabla_especie_c: Dexie.Table<AST_ENCUESTA_ESPECIE_C, number>;//instancia de la base datos
    
  //tabla_abastecimiento: Dexie.Table<AST_ENCUESTA_ABASTECIMIENTO, number>;//instancia de la base datos
  


  constructor(private dexieService: DexieService,private apiService: ApiService ) {
    this.tabla_ast_encuesta = this.dexieService.table('AST_ENCUESTA');//Se asigna la tabla de la base de datos
   // this.tabla_especie_c = this.dexieService.table('AST_ENCUESTA_ESPECIE_C');//Se asigna la tabla de la base de datos
    //this.tabla_abastecimiento = this.dexieService.table('AST_ENCUESTA_ABASTECIMIENTO');//Se asigna la tabla de la base de datos
  }

  getAll() {//Obtiene todos los datos de la tabla
    
    return this.tabla_ast_encuesta.toArray();
  }




  remove(id) { //Elimina datos
    return this.tabla_ast_encuesta.delete(id);
  }





  crear_tablas() {

    this.apiService.traer_encuesta().subscribe((
   (data: any[]) =>  
       {  
           this.data = JSON.parse(JSON.stringify(data)); 

           for(var a = 0; a < Object.keys(this.data).length ;a++){

            this.tabla_ast_encuesta.add(this.data[a] );
           }
          // alert(Object.keys(this.data).length);
      
       //  this.data = Object.keys(this.data[i].ID_ENCUESTA).length; 
        // console.log(JSON.stringify(this.data[i].ID_ENCUESTA));
           
             // this.clase_abastacimiento = new AST_ENCUESTA_ABASTECIMIENTO
         
           //add(this.clase_encuesta);
      
/*


              for(var a = 0; a < Object.keys(this.data[i].AST_ENCUESTA_ESPECIE_C).length ;a++){
                this.clase_especie_c = new AST_ENCUESTA_ESPECIE_C(
                  parseInt( JSON.stringify(this.data[i].AST_ENCUESTA_ESPECIE_C[a].ID_ENCUESTA)),
                  parseInt( JSON.stringify(this.data[i].AST_ENCUESTA_ESPECIE_C[a].ESPECIE))
              
                  );
           
                  
                this.tabla_especie_c.add(this.clase_especie_c );
           
                if(JSON.stringify(this.data[i].AST_ENCUESTA_ESPECIE_C[a].AST_ENCUESTA_ABASTECIMIENTO[a]) != null)
                  {
                   console.log(JSON.stringify(this.data[i].AST_ENCUESTA_ESPECIE_C[a].AST_ENCUESTA_ABASTECIMIENTO[a])); 
                   this.clase_abastecimiento = new AST_ENCUESTA_ABASTECIMIENTO(
                    parseInt( JSON.stringify(this.data[i].AST_ENCUESTA_ESPECIE_C[a].AST_ENCUESTA_ABASTECIMIENTO[a].ID_ENCUESTA)),
                    parseInt( JSON.stringify(this.data[i].AST_ENCUESTA_ESPECIE_C[a].AST_ENCUESTA_ABASTECIMIENTO[a].PRODUCTO)),
                    parseInt( JSON.stringify(this.data[i].AST_ENCUESTA_ESPECIE_C[a].AST_ENCUESTA_ABASTECIMIENTO[a].ESPECIE)),
                    parseInt( JSON.stringify(this.data[i].AST_ENCUESTA_ESPECIE_C[a].AST_ENCUESTA_ABASTECIMIENTO[a].TIPO_ABASTECIMIENTO)),
                    parseInt( JSON.stringify(this.data[i].AST_ENCUESTA_ESPECIE_C[a].AST_ENCUESTA_ABASTECIMIENTO[a].PORCENTAJE_CONSUMO_ANUAL )),
                    parseInt( JSON.stringify(this.data[i].AST_ENCUESTA_ESPECIE_C[a].AST_ENCUESTA_ABASTECIMIENTO[a].CONSUMO_ANUAL )),
                    parseInt( JSON.stringify(this.data[i].AST_ENCUESTA_ESPECIE_C[a].AST_ENCUESTA_ABASTECIMIENTO[a].UNIDAD_CONSUMO_ANUAL )),
                    parseInt( JSON.stringify(this.data[i].AST_ENCUESTA_ESPECIE_C[a].AST_ENCUESTA_ABASTECIMIENTO[a].CONSUMO_ANUAL_M3)),
                    parseInt( JSON.stringify(this.data[i].AST_ENCUESTA_ESPECIE_C[a].AST_ENCUESTA_ABASTECIMIENTO[a].PORCENTAJE_ORIGEN_PROPIO )),
                    parseInt( JSON.stringify(this.data[i].AST_ENCUESTA_ESPECIE_C[a].AST_ENCUESTA_ABASTECIMIENTO[a].PORCENTAJE_ORIGEN_TERCERO)),
                    parseInt( JSON.stringify(this.data[i].AST_ENCUESTA_ESPECIE_C[a].AST_ENCUESTA_ABASTECIMIENTO[a].CONSUMO_PROPIO_M3 )),
                    parseInt( JSON.stringify(this.data[i].AST_ENCUESTA_ESPECIE_C[a].AST_ENCUESTA_ABASTECIMIENTO[a].CONSUMO_PROPIO_M3 ))
                
                    );
                    this.tabla_abastecimiento.add(this.clase_abastecimiento );
                  }
              
              
                }
      */
         
      //   console.log(this.clase_encuesta.ID_ENCUESTA);
            //console.log(JSON.stringify(this.data[i].ID_ENCUESTA));
       }
   ));    
     }


}