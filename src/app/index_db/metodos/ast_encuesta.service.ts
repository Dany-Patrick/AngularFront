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
  clase_especie_c: AST_ENCUESTA_ESPECIE_C;
  clase_abastecimiento: AST_ENCUESTA_ABASTECIMIENTO;

  
  tabla_ast_encuesta: Dexie.Table<AST_ENCUESTA, number>;//instancia de la base datos
  
  tabla_especie_c: Dexie.Table<AST_ENCUESTA_ESPECIE_C, number>;//instancia de la base datos
    
  tabla_abastecimiento: Dexie.Table<AST_ENCUESTA_ABASTECIMIENTO, number>;//instancia de la base datos
  


  constructor(private dexieService: DexieService,private apiService: ApiService ) {
    this.tabla_ast_encuesta = this.dexieService.table('AST_ENCUESTA');//Se asigna la tabla de la base de datos
    this.tabla_especie_c = this.dexieService.table('AST_ENCUESTA_ESPECIE_C');//Se asigna la tabla de la base de datos
    this.tabla_abastecimiento = this.dexieService.table('AST_ENCUESTA_ABASTECIMIENTO');//Se asigna la tabla de la base de datos
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
          // alert(Object.keys(this.data).length);
          /* for(var i = i; i <Object.keys(this.data).length ;i++)
           {
             this.array[i] = JSON.stringify(this.data[i]);
           }
          */
     
       //  this.data = Object.keys(this.data[i].ID_ENCUESTA).length; 
        // console.log(JSON.stringify(this.data[i].ID_ENCUESTA));
                 for(var i = 0; i < Object.keys(this.data).length ;i++){
             // this.clase_abastacimiento = new AST_ENCUESTA_ABASTECIMIENTO
           this.clase_encuesta = new AST_ENCUESTA(
           parseInt( JSON.stringify(this.data[i].ID_ENCUESTA)),
           parseInt(JSON.stringify(this.data[i].ANO)),
           parseInt(JSON.stringify(this.data[i].RUT_EMPRESA)),
           parseInt(JSON.stringify(this.data[i].CODIGO_UNIDAD )),
           parseInt(JSON.stringify(this.data[i].REGION)),
           parseInt(JSON.stringify(this.data[i].PROVINCIA )),
           parseInt(JSON.stringify(this.data[i].COMUNA )),
           JSON.stringify(this.data[i].SELECCION ),
           JSON.stringify(this.data[i].TIPO_MOVILIDAD ),
           JSON.stringify(this.data[i].TIPO_PLANTA),
           JSON.stringify(this.data[i].TIPO_EQUIPO),
           JSON.stringify(this.data[i].SITUACION),
           parseInt(JSON.stringify(this.data[i].CAUSA_PARALIZACION)),
           JSON.stringify(this.data[i].SITUACION_ACTUAL),
           JSON.stringify(this.data[i].NOMBRE_PROPIETARIO),
           JSON.stringify(this.data[i].NOMBRE_GERENTE),
           parseInt(JSON.stringify(this.data[i].ANOS_EXPERIENCIA)),
           parseInt(JSON.stringify(this.data[i].C_ENCUESTADOR )),
           JSON.stringify(this.data[i].FECHA_ENCUESTA ),
           JSON.stringify(this.data[i].NOMBRE_ENCUESTADO ),
           parseInt(JSON.stringify(this.data[i].CARGO_ENCUESTADO )),
           JSON.stringify(this.data[i].OBS ),
           parseInt(JSON.stringify(this.data[i].PRODUCCION_ANUAL )),
           parseInt(JSON.stringify(this.data[i].UNIDAD_PROD_ANUAL )),
           parseInt(JSON.stringify(this.data[i].PRODUCCION_M3  )),
           parseInt(JSON.stringify(this.data[i].PRODUCCION_ANUAL_SC )),
           parseInt(JSON.stringify(this.data[i].UNDAD_PRODUCCION_ANUAL_SC )),
           parseInt(JSON.stringify(this.data[i].PRODUCCION_SC_M3 )),
           parseInt(JSON.stringify(this.data[i].PRODUCCION_ANUAL_CC )),
           parseInt(JSON.stringify(this.data[i].UNIDAD_PROD_ANUAL_CC )),
           parseInt(JSON.stringify(this.data[i].PRODUCCION_CC_M3 )),
           parseInt(JSON.stringify(this.data[i].PRODUCCION_TURNO )),
           parseInt(JSON.stringify(this.data[i].UNIDAD_PROD_TURNO )),
           parseInt(JSON.stringify(this.data[i].PRODUCCION_TURNO_M3 )),
           parseInt(JSON.stringify(this.data[i].CAPACIDAD_MAXIMA_TURNO)),
           parseInt(JSON.stringify(this.data[i].UNIDAD_CAP_MAXIMA_TURNO )),
           parseInt(JSON.stringify(this.data[i].CAPACIDAD_MAXIMA_TURNO_M3)),
           parseInt(JSON.stringify(this.data[i].CAPACIDAD_ANUAL )),
           parseInt(JSON.stringify(this.data[i].UNIDAD_CAP_ANUAL )),
           parseInt(JSON.stringify(this.data[i].CAPACIDAD_ANUAL_M3 )),
           parseInt(JSON.stringify(this.data[i].MESES_TRABAJADOS )),
           parseInt(JSON.stringify(this.data[i].DIAS_TRAB_MES )),
           parseInt(JSON.stringify(this.data[i].TURNOS_DIA )),
           parseInt(JSON.stringify(this.data[i].HORAS_TURNO )),
           parseInt(JSON.stringify(this.data[i].PRODUCCION_ESTIMADA )),
           parseInt(JSON.stringify(this.data[i].UNIDAD_PROD_ESTIMADA )),
           parseInt(JSON.stringify(this.data[i].PRODUCCION_ESTIMADA_M3 )),
           parseInt(JSON.stringify(this.data[i].PRODUCCION_ESTIMADA_SC )),
           parseInt(JSON.stringify(this.data[i].UNIDAD_PROD_ESTIMADA_SC )),
           parseInt(JSON.stringify(this.data[i].PRODUCCION_ESTIMADA_SC_M3 )),
           parseInt(JSON.stringify(this.data[i].PRODUCCION_ESTIMADA_CC )),
           parseInt(JSON.stringify(this.data[i].UNIDAD_PROD_ESTIMADA_CC )),
           parseInt(JSON.stringify(this.data[i].PRODUCCION_ESTIMADA_CC_M3 )),
           parseInt(JSON.stringify(this.data[i].VARIACION_PRODUCCION_ESTIMADA )),
           parseInt(JSON.stringify(this.data[i].VARIACION_PRODUCCION_ESTIMADA_CC)),
           parseInt(JSON.stringify(this.data[i].VARIACION_PRODUCCION_ESTIMADA_SC )),
           parseInt(JSON.stringify(this.data[i].CODIGO_ANTIGUO )),
           parseInt(JSON.stringify(this.data[i].VOLUMEN_M3 )),
           parseInt(JSON.stringify(this.data[i].ESTRATO )),
           parseInt(JSON.stringify(this.data[i].USUARIO_INGRESO) ),
           JSON.stringify(this.data[i].EMAIL_ENCUESTADO ),
           JSON.stringify(this.data[i].CELULAR_ENCUESTADO ),
           parseInt(JSON.stringify(this.data[i].ROTACION_OPERARIOS )),
           parseInt(JSON.stringify(this.data[i].NOMBRE_EMPRESA_TRAVES )),
           parseInt(JSON.stringify(this.data[i].FECHA_ACTUALIZACION )),
           parseInt(JSON.stringify(this.data[i].COMPLETITUD )),
           JSON.stringify(this.data[i].CAUSA_DESAPARECIDO ),
           JSON.stringify(this.data[i].ESTADO_ENCUESTA  )
           );
           //add(this.clase_encuesta);
           this.tabla_ast_encuesta.add(this.clase_encuesta );



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
      
         }
      //   console.log(this.clase_encuesta.ID_ENCUESTA);
            //console.log(JSON.stringify(this.data[i].ID_ENCUESTA));
       }
   ));    
     }


}