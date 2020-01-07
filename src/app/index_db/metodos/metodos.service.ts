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
  
  crear_tablas() {this.generarTablas<AST_ENCUESTA>("AST_ENCUESTA",this.tabla_ast_encuesta);}
  crear_tabla_pef_tregion() {this.generarTablas<PEF_TREGION>("PEF_TREGION",this.tabla_pef_region);}       
  crear_tabla_pef_tprovincia() {this.generarTablas<PEF_TPROVINCIA>("PEF_TPROVINCIA",this.tabla_pef_provincia);}              
  crear_tabla_pef_tcomuna() {this.generarTablas<PEF_TCOMUNA>("PEF_TCOMUNA",this.tabla_pef_comuna);}
  crear_tabla_pef_tcargos() {this.generarTablas<PEF_TCARGOS>("PEF_TCARGOS",this.tabla_pef_cargos);}
  crear_tabla_ast_encuestador() {this.generarTablas<AST_ENCUESTADOR>("AST_ENCUESTADOR",this.tabla_ast_encuestador);}           
  crear_tabla_ase_paralizacion() {this.generarTablas<ASE_TCAUSA_PARALIZACION>("ASE_TCAUSA_PARALIZACION",this.tabla_ase_tcausa_paralizacion);}
  crear_tabla_ase_desaparecido() {this.generarTablas<ASE_TCAUSA_DESAPARECIDO>("ASE_TCAUSA_DESAPARECIDO",this.tabla_ase_tcausa_desaparecido);}
  crear_tabla_ast_seccion() {this.generarTablas<AST_ENCUESTA_SECCION>("AST_ENCUESTA_SECCION",this.tabla_ast_seccion);}
  crear_tabla_pef_tespecie() {this.generarTablas<PEF_TESPECIE>("PEF_TESPECIE",this.tabla_pef_tespecie);}

  generarTablas<T>(nombreTabla : string, tabla : Dexie.Table<T[], number>)  {    
    tabla.count().then((cantidad)=>{
      if(cantidad == 0){
        this.apiService.obtenerTabla(nombreTabla).subscribe((
          (data: any[]) =>{                      
          this.dexieService.transaction("rw", tabla, () => {
            tabla.bulkAdd(data);
          }).catch(function (e) {
            // handle errors
          })}));   
        }
      });      
  } 

  generarTablaEncuesta()  { //obtener encuesta por id de encuestador
    this.apiService.obtenerTabla("AST_ENCUESTA").subscribe((
      (data: any[]) =>{  
        this.tabla_ast_encuesta.toArray().then((tipoTabla : any[]) => {
          if(tipoTabla.length <=0){ // esto cambia en caso de sincronizacion encuesta y tipo encuesta
            this.data = JSON.parse(JSON.stringify(data)); 
            for(var a = 0; a < Object.keys(this.data).length ;a++){ 
              //evaluar segun fecha actualizacion, completitud, estado              
              this.tabla_ast_encuesta.add(this.data[a] );              
            }           
          }
        });        
      }));
  }

  getAll(){ return this.tabla_ast_encuesta.toArray();}
  get_regiones() {return this.tabla_pef_region.toArray();}
  get_provincias() {return this.tabla_pef_provincia.toArray();}
  get_comunas() {return this.tabla_pef_comuna.toArray();}
  get_cargos() {return this.tabla_pef_cargos.toArray();}
  get_encuestador() { return this.tabla_ast_encuestador.toArray();}
  get_causa_desaparecido() {return this.tabla_ase_tcausa_desaparecido.toArray();}
  get_causa_paralizacion() {return this.tabla_ase_tcausa_paralizacion.toArray();}
  get_seccion() {return this.tabla_ast_seccion.toArray();}
  get_especies() {return this.tabla_pef_tespecie.toArray();}

  getEncuestaById(id : any) {
    if(!isNaN(id)){
      return this.tabla_ast_encuesta.get(+id);
    }
    else{
      return null;
    }
  }
  remove(id) { //Elimina datos
    return this.tabla_ast_encuesta.delete(id);
  }
}