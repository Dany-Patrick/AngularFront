import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { ApiService } from 'src/app/servicios/api.service';
import { DexieService } from '../../servicios/dexie.service';
import { AST_ENCUESTA } from '../models/AST_ENCUESTA';

import { PEF_TREGION } from '../models/PEF_TREGION';
import { PEF_TPROVINCIA } from '../models/PEF_TPROVINCIA';
import { PEF_TCOMUNA } from '../models/PEF_TCOMUNA';
import { PEF_TCARGOS } from '../models/PEF_TCARGOS';
import { AST_ENCUESTADOR } from '../models/AST_ENCUESTADOR';


@Injectable()
export class Metodos_service  {

  Ast_Encuestas: any;
  data: any;
contador:number = 0;
  
  tabla_ast_encuesta: Dexie.Table<AST_ENCUESTA[], number>;//instancia de la base datos
  tabla_pef_region: Dexie.Table<PEF_TREGION[], number>;
  tabla_pef_provincia: Dexie.Table<PEF_TPROVINCIA[], number>;
  tabla_pef_comuna: Dexie.Table<PEF_TCOMUNA[], number>;
  tabla_pef_cargos: Dexie.Table<PEF_TCARGOS[], number>;
  tabla_ast_encuestador: Dexie.Table<AST_ENCUESTADOR[], number>;

  constructor(private dexieService: DexieService,private apiService: ApiService) {

    this.tabla_ast_encuesta = this.dexieService.table('AST_ENCUESTA');//Se asigna la tabla de la base de datos
    this.tabla_pef_region = this.dexieService.table('PEF_TREGION');
    this.tabla_pef_provincia = this.dexieService.table('PEF_TPROVINCIA');
    this.tabla_pef_comuna = this.dexieService.table('PEF_TCOMUNA');
    this.tabla_pef_cargos = this.dexieService.table('PEF_TCARGOS');
    this.tabla_ast_encuestador = this.dexieService.table('AST_ENCUESTADOR');
  }

  getAll() {//Obtiene todos los datos de la tabla
    
    return this.tabla_ast_encuesta.toArray();
  }

  get_regiones() {//Obtiene todos los datos de la tabla
    
    return this.tabla_pef_region.toArray();
  }
  get_provincias() {//Obtiene todos los datos de la tabla
    
    return this.tabla_pef_provincia.toArray();
  }

  get_comunas() {//Obtiene todos los datos de la tabla
    
    return this.tabla_pef_comuna.toArray();
  }
  get_cargos() {//Obtiene todos los datos de la tabla
    
    return this.tabla_pef_cargos.toArray();
  }
  get_encuestador() {//Obtiene todos los datos de la tabla
    
    return this.tabla_ast_encuestador.toArray();
  }


  remove(id) { //Elimina datos
    return this.tabla_ast_encuesta.delete(id);
  }







  crear_tablas() {
  

    this.apiService.traer_encuesta().subscribe((
   (data: any[]) =>  
       {  
        this.getAll().then((AST_ENCUESTA: any[]) => { //Obtiene la colección de datos local

if(AST_ENCUESTA.length <= 0)
{
        this.data = JSON.parse(JSON.stringify(data));  
           for(var a = 0; a < Object.keys(this.data).length ;a++){ 
            this.tabla_ast_encuesta.add(this.data[a] );
           }
}   
        });
       }
   ));    
     }



     crear_tabla_pef_tregion() {

      this.apiService.traer_region().subscribe((
     (data: any[]) =>  
         {  
          this.get_provincias().then((PEF_TREGION: any[]) => { //Obtiene la colección de datos local

  if(PEF_TREGION.length <= 0)
  {
          this.data = JSON.parse(JSON.stringify(data));  
             for(var a = 0; a < Object.keys(this.data).length ;a++){ 
              this.tabla_pef_region.add(this.data[a] );
             }
  }   
          });
        
         }
     ));    
       }

       
     crear_tabla_pef_tprovincia() {

      this.apiService.traer_provincias().subscribe((
     (data: any[]) =>  
         {  

          this.get_provincias().then((PEF_TPROVINCIA: any[]) => { //Obtiene la colección de datos local
   
  if(PEF_TPROVINCIA.length <= 0)
  {
          this.data = JSON.parse(JSON.stringify(data));  
             for(var a = 0; a < Object.keys(this.data).length ;a++){ 
              this.tabla_pef_provincia.add(this.data[a] );
             }
  }   
          });

         }
     ));    
       }
       
       
     crear_tabla_pef_tcomuna() {

      this.apiService.traer_comunas().subscribe((
     (data: any[]) =>  
         {  
          this.get_comunas().then((PEF_TCOMUNA: any[]) => { //Obtiene la colección de datos local
      
            if(PEF_TCOMUNA.length <= 0)
            {
                    this.data = JSON.parse(JSON.stringify(data));  
                      for(var a = 0; a < Object.keys(this.data).length ;a++){ 
                        this.tabla_pef_comuna.add(this.data[a] );
                      }
            }   
          });
        }
     ));    
       }
       crear_tabla_pef_tcargos() {

        this.apiService.traer_cargos().subscribe((
       (data: any[]) =>  
           {  
            this.get_cargos().then((PEF_TCARGOS: any[]) => { //Obtiene la colección de datos local
        
              if(PEF_TCARGOS.length <= 0)
              {
                      this.data = JSON.parse(JSON.stringify(data));  
                        for(var a = 0; a < Object.keys(this.data).length ;a++){ 
                          this.tabla_pef_cargos.add(this.data[a] );
                        }
              }   
            });
          }
       ));    
         }
         crear_tabla_ast_encuestador() {

          this.apiService.traer_encuestadores().subscribe((
         (data: any[]) =>  
             {  
              this.get_encuestador().then((AST_ENCUESTADOR: any[]) => { //Obtiene la colección de datos local
          
                if(AST_ENCUESTADOR.length <= 0)
                {
                        this.data = JSON.parse(JSON.stringify(data));  
                          for(var a = 0; a < Object.keys(this.data).length ;a++){ 
                            this.tabla_ast_encuestador.add(this.data[a] );
                          }
                }   
              });
            }
         ));    
           }
}