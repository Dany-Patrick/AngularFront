import { Component, OnInit} from '@angular/core';
import { FormControl , FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Metodos_service } from 'src/app/index_db/metodos/metodos.service';
import { ConverCoordenadas, Coordenadas } from 'src/app/utiles/convert-coordenadas';
import { Utiles } from 'src/app/utiles/utiles';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataStrings } from 'src/app/utiles/data-strings';
import { AST_ENCUESTA } from 'src/app/index_db/models/AST_ENCUESTA';
import { PEF_TPROVINCIA } from 'src/app/index_db/models/PEF_TPROVINCIA';
import { PEF_TCOMUNA } from 'src/app/index_db/models/PEF_TCOMUNA';
import { PEF_TREGION } from 'src/app/index_db/models/PEF_TREGION';
import { FormularioComponent } from '../formulario/formulario.component';

@Component({
  selector: 'app-form-a',
  templateUrl: './form-a.component.html',
  styleUrls: ['./form-a.component.css']
})
export class FormAComponent extends Utiles implements OnInit {
  
  id_encuesta: any;
  latitud:  any  = "";
  longitud: any  = "";  
  spinnerComp : boolean = true;
  encuesta : AST_ENCUESTA =new AST_ENCUESTA();
  regionesList :  Array<PEF_TREGION> =new Array<PEF_TREGION>();
  provinciasList :  Array<PEF_TPROVINCIA> =new Array<PEF_TPROVINCIA>();
  comunasList : Array<PEF_TCOMUNA> =new Array<PEF_TCOMUNA>();
  husoList : Array<IDesplegable<number,number>> = [{id:18 , valor : 18},{id:19 , valor : 19}];  
  zonaList : Array<IDesplegable<string,string>> = [{id:'F' , valor : 'F'},{id: 'G' , valor : 'G'},{id: 'H' , valor : 'H'},{id: 'I' , valor : 'I'},{id: 'J' , valor : 'J'},{id: 'K' , valor : 'K'}]; 
  codigoPlanta :  Array<IDesplegable<number,number>> =[];

  codigoGerencia : {id:number, valor:number}[];
  ingreso : number = 0;  
  provinciasListGerencia:  Array<PEF_TPROVINCIA> =new Array<PEF_TPROVINCIA>();
  comunasListGerencia : Array<PEF_TCOMUNA> =new Array<PEF_TCOMUNA>();
   

  constructor(private ast_encuesta: Metodos_service,private rutaActiva: ActivatedRoute,public modalService: NgbModal ) {
    super(modalService);
  }

  async ngOnInit() {            
    
    this.id_encuesta = this.rutaActiva.snapshot.params.id_encuesta;           
    this.encuesta = await this.ast_encuesta.tabla_ast_encuesta.where('ID_ENCUESTA').equals(+this.id_encuesta).first() as unknown as AST_ENCUESTA;                  
    this.encuesta.PEF_EMPRESA_UNIDAD_ASTILLAS.ZONA = this.encuesta.PEF_EMPRESA_UNIDAD_ASTILLAS.ZONA ? this.encuesta.PEF_EMPRESA_UNIDAD_ASTILLAS.ZONA.toString().trim() : '';
    this.regionesList = (await this.ast_encuesta.tabla_pef_region.toArray()) as unknown as Array<PEF_TREGION>;
   // this.encuestadores = (await this.ast_encuesta.crear_tabla_ast_encuestador.toArray())   as unknown as Array<ASE_ENCUESTADOR> 
    this.spinnerComp =  false;    
  }

  public async cambiarProvincias(esPlanta : boolean, region :number ) {     
    if (region > 0) {    
      if(esPlanta){
        this.provinciasList = (await this.ast_encuesta.tabla_pef_provincia.where('REGION').equals(+region).toArray()) as unknown as Array<PEF_TPROVINCIA>;                
      }
      else{
        this.provinciasListGerencia = (await this.ast_encuesta.tabla_pef_provincia.where('REGION').equals(+region).toArray()) as unknown as Array<PEF_TPROVINCIA>;         
      }
      if(this.ingreso >= 4){
        if(esPlanta){
          this.encuesta.PROVINCIA = null;
          this.comunasList = new Array<PEF_TCOMUNA>();
        }
        else{ 
          this.encuesta.PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.PROVINCIA = null;
          this.comunasListGerencia = new Array<PEF_TCOMUNA>();
        }
          return;
      }
      this.ingreso++;               
    }    
  }

  public async cambiarComunas(esPlanta : boolean, region :number, provincia : number) {
    if (region > 0 && provincia > 0) {    
      if(esPlanta){
        this.comunasList = (await this.ast_encuesta.tabla_pef_comuna.where({ PROVINCIA: +provincia, REGION: +region }).toArray()) as unknown as Array<PEF_TCOMUNA>;  
        this.codigoPlanta = this.obtenerCodigo(this.comunasList[0].CODIGO_AREA ? this.comunasList[0].CODIGO_AREA : null);         
      }
      else{
        this.comunasListGerencia = (await this.ast_encuesta.tabla_pef_comuna.where({ PROVINCIA: +provincia, REGION: +region }).toArray()) as unknown as Array<PEF_TCOMUNA>; 
        this.codigoGerencia = this.obtenerCodigo(this.comunasListGerencia[0].CODIGO_AREA ? this.comunasListGerencia[0].CODIGO_AREA : null); 
        console.info("cod-gerencia = "+JSON.stringify(this.codigoGerencia));
      }            
      if(this.ingreso >= 4){
        if(esPlanta)this.encuesta.COMUNA = null;
        else this.encuesta.PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.COMUNA = null;
        return;
      }
      this.ingreso++;
    }    
  }
  
  obtenerCodigo(id : number) : Array<IDesplegable<number,number>>{
    return [{id:9,valor:9},{id: id,valor:id} ];
  }
   
  public guardar(form: FormularioComponent) : void {
    //CAMBIAR LATITUD Y LONGITUD VER SI SON STRING
    if (form.isValid()) {
      //guardar
    }
    else {
      //formulario con errores
    }
  }

  async convertLatLngToUtm(){
    this.spinnerComp =  true;
    var getCord  = new ConverCoordenadas();
    let cords2 : Promise<Coordenadas> = getCord.getLocation2().then((cords2: Coordenadas)=>{      
      return cords2;  
    });
    if((await cords2).mensajeError == null){  
      this.encuesta.PEF_EMPRESA_UNIDAD_ASTILLAS.HUSO = (await cords2).huso;
      this.encuesta.PEF_EMPRESA_UNIDAD_ASTILLAS.ZONA = (await cords2).zona;
      this.encuesta.PEF_EMPRESA_UNIDAD_ASTILLAS.UTMX = (await cords2).utmx;
      this.encuesta.PEF_EMPRESA_UNIDAD_ASTILLAS.UTMY = (await cords2).utmy;    
      this.encuesta.PEF_EMPRESA_UNIDAD_ASTILLAS.LATITUD  = (await cords2).latitud; 
      this.encuesta.PEF_EMPRESA_UNIDAD_ASTILLAS.LONGITUD = (await cords2).longitud.toString();/********STRING */
      this.spinnerComp =  false;
    } 
    else{
      this.spinnerComp =  false;
      this.modalError(DataStrings.errorObtenerCoordenadasUTM());
    }  
  }
 
  copiar_datos(){
   /* if(this.forma.get('switch_boton').value == true)
    {
      this.forma.patchValue({codigo_fono_1_gerencia: this.forma.get('codigo_fono_1_planta').value});
      this.forma.patchValue({num_fono_1_gerencia: this.forma.get('num_fono_1_planta').value});
      this.forma.patchValue({codigo_fono_2_gerencia: this.forma.get('codigo_fono_2_planta').value});
      this.forma.patchValue({num_fono_2_gerencia: this.forma.get('num_fono_2_planta').value});
      this.forma.patchValue({region_gerencia: this.forma.get('region').value});
      this.forma.patchValue({provincia_gerencia: this.forma.get('provincia').value});
      this.forma.patchValue({comuna_gerencia: this.forma.get('comuna').value});
      this.forma.patchValue({direccion_gerencia: this.forma.get('direccion_planta').value});
      this.forma.patchValue({ciudad_gerencia: this.forma.get('ciudad_planta').value});
      this.forma.patchValue({email_gerencia: this.forma.get('email_planta').value});
    }
    else{
      this.forma.patchValue({region_gerencia: this.AST_ENCUESTA_List2.PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.REGION      });
      this.forma.patchValue({provincia_gerencia: this.AST_ENCUESTA_List2.PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.PROVINCIA});
      this.forma.patchValue({comuna_gerencia: this.AST_ENCUESTA_List2.PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.COMUNA});
      this.forma.patchValue({codigo_fono_1_gerencia: this.AST_ENCUESTA_List2.PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.AREA1});
      this.forma.patchValue({num_fono_1_gerencia: this.AST_ENCUESTA_List2.PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.FONO1});
      if( this.AST_ENCUESTA_List2.PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.AREA2 != null)
      {
        this.forma.patchValue({codigo_fono_2_gerencia:this.AST_ENCUESTA_List2.PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.AREA2});
      }
      else{
        this.forma.patchValue({codigo_fono_2_gerencia: this.AST_ENCUESTA_List2.PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.AREA1});
      }
      this.forma.patchValue({num_fono_2_gerencia: this.AST_ENCUESTA_List2.PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.FONO2});
      this.forma.patchValue({direccion_gerencia: this.AST_ENCUESTA_List2.PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.DIRECCION});
      this.forma.patchValue({ciudad_gerencia: this.AST_ENCUESTA_List2.PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.CIUDAD});
      this.forma.patchValue({email_gerencia: this.AST_ENCUESTA_List2.PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.MAIL});
    }*/
  }  
}

interface IDesplegable<T,U>{
  //(key: T, value: U): void;
  id : T ;
  valor : U;  
}