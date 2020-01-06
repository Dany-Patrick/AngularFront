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
import { ASE_TCAUSA_DESAPARECIDO } from '../models/ASE_TCAUSA_DESAPARECIDO';
import { ASE_TCAUSA_PARALIZACION } from '../models/ASE_TCAUSA_PARALIZACION';
import { AST_ENCUESTA_SECCION } from '../models/AST_ENCUESTA_SECCION';
import { PEF_TESPECIE } from '../models/PEF_TESPECIE';


@Injectable()
export class Metodos_service  {

  data: any;

  
  tabla_ast_encuesta: Dexie.Table<AST_ENCUESTA[], number>;//instancia de la base datos
  tabla_pef_region: Dexie.Table<PEF_TREGION[], number>;
  tabla_pef_provincia: Dexie.Table<PEF_TPROVINCIA[], number>;
  tabla_pef_comuna: Dexie.Table<PEF_TCOMUNA[], number>;
  tabla_pef_cargos: Dexie.Table<PEF_TCARGOS[], number>;
  tabla_ast_encuestador: Dexie.Table<AST_ENCUESTADOR[], number>;
  tabla_ase_tcausa_desaparecido: Dexie.Table<ASE_TCAUSA_DESAPARECIDO[], number>;
  tabla_ase_tcausa_paralizacion: Dexie.Table<ASE_TCAUSA_PARALIZACION[], number>;
  tabla_ast_seccion: Dexie.Table<AST_ENCUESTA_SECCION[], number>;
  tabla_pef_tespecie: Dexie.Table<PEF_TESPECIE[], number>;
  
  constructor(private dexieService: DexieService,private apiService: ApiService) {

    this.tabla_ast_encuesta = this.dexieService.table('AST_ENCUESTA');//Se asigna la tabla de la base de datos
    this.tabla_pef_region = this.dexieService.table('PEF_TREGION');
    this.tabla_pef_provincia = this.dexieService.table('PEF_TPROVINCIA');
    this.tabla_pef_comuna = this.dexieService.table('PEF_TCOMUNA');
    this.tabla_pef_cargos = this.dexieService.table('PEF_TCARGOS');
    this.tabla_ast_encuestador = this.dexieService.table('AST_ENCUESTADOR');
    this.tabla_ase_tcausa_desaparecido = this.dexieService.table('ASE_TCAUSA_DESAPARECIDO');
    this.tabla_ase_tcausa_paralizacion = this.dexieService.table('ASE_TCAUSA_PARALIZACION');
    this.tabla_ast_seccion = this.dexieService.table('AST_ENCUESTA_SECCION');
    this.tabla_pef_tespecie = this.dexieService.table('PEF_TESPECIE');
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
  get_causa_desaparecido() {//Obtiene todos los datos de la tabla
    
    return this.tabla_ase_tcausa_desaparecido.toArray();
  }
  get_causa_paralizacion() {//Obtiene todos los datos de la tabla
    
    return this.tabla_ase_tcausa_paralizacion.toArray();
  }
  get_seccion() {//Obtiene todos los datos de la tabla
    
    return this.tabla_ast_seccion.toArray();
  }
  get_especies() {//Obtiene todos los datos de la tabla
    
    return this.tabla_pef_tespecie.toArray();
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
           crear_tabla_ase_paralizacion() {

            this.apiService.traer_causa_paralizacion().subscribe((
           (data: any[]) =>  
               {  
                this.get_causa_paralizacion().then((ASE_TCAUSA_PARALIZACION: any[]) => { //Obtiene la colección de datos local
            
                  if(ASE_TCAUSA_PARALIZACION.length <= 0)
                  {
                          this.data = JSON.parse(JSON.stringify(data));  
                            for(var a = 0; a < Object.keys(this.data).length ;a++){ 
                              this.tabla_ase_tcausa_paralizacion.add(this.data[a] );
                            }
                  }   
                });
              }
           ));    
             }
             crear_tabla_ase_desaparecido() {

              this.apiService.traer_causa_desaparecido().subscribe((
             (data: any[]) =>  
                 {  
                  this.get_causa_desaparecido().then((ASE_TCAUSA_DESAPARECIDO: any[]) => { //Obtiene la colección de datos local
              
                    if(ASE_TCAUSA_DESAPARECIDO.length <= 0)
                    {
                            this.data = JSON.parse(JSON.stringify(data));  
                              for(var a = 0; a < Object.keys(this.data).length ;a++){ 
                                this.tabla_ase_tcausa_desaparecido.add(this.data[a] );
                              }
                    }   
                  });
                }
             ));    
               }
               crear_tabla_ast_seccion() {

                this.apiService.traer_secciones().subscribe((
               (data: any[]) =>  
                   {  
                    this.get_seccion().then((AST_ENCUESTA_SECCION: any[]) => { //Obtiene la colección de datos local
                
                      if(AST_ENCUESTA_SECCION.length <= 0)
                      {
                              this.data = JSON.parse(JSON.stringify(data));  
                                for(var a = 0; a < Object.keys(this.data).length ;a++){ 
                                  this.tabla_ast_seccion.add(this.data[a] );
                                }
                      }   
                    });
                  }
               ));    
                 }
                 crear_tabla_pef_tespecie() {

                  this.apiService.traer_especie().subscribe((
                 (data: any[]) =>  
                     {  
                      this.get_especies().then((PEF_TESPECIE: any[]) => { //Obtiene la colección de datos local
                  
                        if(PEF_TESPECIE.length <= 0)
                        {
                                this.data = JSON.parse(JSON.stringify(data));  
                                  for(var a = 0; a < Object.keys(this.data).length ;a++){ 
                                    this.tabla_pef_tespecie.add(this.data[a] );
                                  }
                        }   
                      });
                    }
                 ));    
                   }

}