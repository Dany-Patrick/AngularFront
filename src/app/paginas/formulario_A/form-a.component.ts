import { Component, OnInit, Output, EventEmitter}   from '@angular/core';
import { FormControl , FormGroup, ReactiveFormsModule, FormBuilder, Validators, NgForm} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Metodos_service } from 'src/app/index_db/metodos/metodos.service';
import { ConverCoordenadas, Coordenadas } from 'src/app/utiles/convert-coordenadas';
import { Utiles } from 'src/app/utiles/utiles';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataStrings } from 'src/app/utiles/data-strings';
import { resolve } from 'url';
import { AST_ENCUESTA } from 'src/app/index_db/models/AST_ENCUESTA';
import { Observable } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { tap } from 'rxjs/operators';

import { take } from 'rxjs/operators';
import { pipe } from '@angular/core/src/render3/pipe';

@Component({
  selector: 'app-form-a',
  templateUrl: './form-a.component.html',
  styleUrls: ['./form-a.component.css']
})
export class FormAComponent extends Utiles implements OnInit {
  myForm: FormGroup;
  forma:FormGroup;
  AST_ENCUESTA_List: any;
  seleccion_regional: any;
  seleccion_provincia: any;
  codigo_provincia: number;
  id_encuesta: any;
  latitud:  any  = "";
  longitud: any  = "";
  

  spinnerComp : boolean;
 
  
  valor_provincia:any ="";
  valor_comuna:any ="";
  valido_1:any;
  valido_2:any;
  valido_3:any;
  valido_4:any;
  valido_5:any;
  valido_6:any;
  valido_7:any;
  valido_8:any;
  valido_9:any;
  valido_10:any;
  valido_11:any;
  valido_12:any;
  valido_13:any;
  valido_14:any;
  valido_15:any;
  valido_16:any;
  valido_17:any;
  valido_18:any;
  valido_19:any;
  valido_20:any;
  valido_21:any;
  valido_22:any;
  valido_23:any;
  valido_24:any;
  valido_25:any;
  valido_26:any;
  valido_27:any;
  valido_28:any;
  valido_29:any;
  valido_30:any;
  valido_31:any;
  valido_32:any;
  valido_33:any;
  valido_34:any;
  valido_35:any;
  valido_36:any;
  valido_37:any;
  valido_38:any;
  valido_39:any;
  valido_40:any;

  AST_ENCUESTA_List2:  AST_ENCUESTA;//Observable<AST_ENCUESTA>;
  AST_ENCUESTA : AST_ENCUESTA;

  constructor(private ast_encuesta: Metodos_service,private rutaActiva: ActivatedRoute,public modalService: NgbModal ) {
    super(modalService);
   }


  async ngOnInit() {
  
    this.spinnerComp = true;
    this.contruirForm();    
    this.id_encuesta = this.rutaActiva.snapshot.params.id_encuesta;
    await this.ast_encuesta.getEncuestaById(this.id_encuesta).then((AST_ENCUESTA: any) => {
      this.ast_encuesta.encuesta$.subscribe(AST_ENCUESTA =>this.AST_ENCUESTA_List2 = AST_ENCUESTA);        
      this.spinnerComp = false;
    }); 
  //this.ast_encuesta.encuesta$.pipe(take(1)).subscribe(AST_ENCUESTA_List2 => this.forma.patchValue(AST_ENCUESTA_List2));
 /* this.AST_ENCUESTA_List2 = this.AST_ENCUESTA_List2 = (await this.ast_encuesta.getEncuestaById(this.id_encuesta)).pipe(
    tap(AST_ENCUESTA_List2 => this.forma.patchValue(AST_ENCUESTA_List2) )
  );
 /* this.ast_encuesta.getEncuestaById(this.id_encuesta).then((AST_ENCUESTA: any) => {
    return AST_ENCUESTA;
  });*/
 /* this.ast_encuesta.getEncuestaById(this.id_encuesta).then((AST_ENCUESTA: any) => {
    this.ast_encuesta.encuesta$.pipe(take(1)).subscribe(AST_ENCUESTA => this.AST_ENCUESTA_List2 = AST_ENCUESTA);
  });
   /*this.AST_ENCUESTA_List2 = (await this.ast_encuesta.getEncuestaById(this.id_encuesta)).pipe(
     tap(AST_ENCUESTA => this.forma.patchValue(AST_ENCUESTA) )
   );*/
  /* this.ast_encuesta.getEncuestaById(this.id_encuesta)).pipe(
    take(1)).subscribe( AST_ENCUESTA => this.AST_ENCUESTA_List2 = AST_ENCUESTA 
      //tap(AST_ENCUESTA_List2 => this.forma.patchValue(AST_ENCUESTA_List2) )

  );
   console.info("lalzlalala"+JSON.stringify(await this.AST_ENCUESTA_List2));
   /*this.AST_ENCUESTA_List2 = (await this.ast_encuesta.getEncuestaById(this.id_encuesta)).pipe(
    tap(AST_ENCUESTA_List2 => this.forma.patchValue(AST_ENCUESTA_List2) )
  );*/

  /* this.AST_ENCUESTA = this.AST_ENCUESTA_List2;
 // this.ast_encuesta.getEncuestaById(this.id_encuesta).then((AST_ENCUESTA: any) => {
    this.codigo_provincia = AST_ENCUESTA.PEF_EMPRESA_UNIDAD_ASTILLAS.AREA1;
  
      this.forma.patchValue({region: AST_ENCUESTA.PEF_EMPRESA_UNIDAD_ASTILLAS.REGION});
      this.forma.patchValue({provincia: AST_ENCUESTA.PEF_EMPRESA_UNIDAD_ASTILLAS.PROVINCIA});
      this.forma.patchValue({comuna: AST_ENCUESTA.PEF_EMPRESA_UNIDAD_ASTILLAS.COMUNA});
      this.forma.patchValue({localidad: AST_ENCUESTA.PEF_EMPRESA_UNIDAD_ASTILLAS.LOCALIDAD});
      this.forma.patchValue({huso: AST_ENCUESTA.PEF_EMPRESA_UNIDAD_ASTILLAS.HUSO});
      this.forma.patchValue({zona: AST_ENCUESTA.PEF_EMPRESA_UNIDAD_ASTILLAS.ZONA.replace(/\s/g, "")});
      this.forma.patchValue({utmx: AST_ENCUESTA.PEF_EMPRESA_UNIDAD_ASTILLAS.UTMX});
      this.forma.patchValue({utmy: AST_ENCUESTA.PEF_EMPRESA_UNIDAD_ASTILLAS.UTMY});
      //this.forma.patchValue({rut_empresa: AST_ENCUESTA.PEF_EMPRESA_UNIDAD_ASTILLAS.RUT_EMPRESA});
      this.forma.patchValue({nombre_propietario: AST_ENCUESTA.NOMBRE_PROPIETARIO});
      this.forma.patchValue({razon_social: AST_ENCUESTA.PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.RAZON_SOCIAL});
      this.forma.patchValue({nombre_planta: AST_ENCUESTA.PEF_EMPRESA_UNIDAD_ASTILLAS.NOMBRE_UNIDAD});
      this.forma.patchValue({ciudad_planta: AST_ENCUESTA.PEF_EMPRESA_UNIDAD_ASTILLAS.CIUDAD});
      this.forma.patchValue({direccion_planta: AST_ENCUESTA.PEF_EMPRESA_UNIDAD_ASTILLAS.DIRECCION});
      this.forma.patchValue({codigo_fono_1_planta: AST_ENCUESTA.PEF_EMPRESA_UNIDAD_ASTILLAS.AREA1});
      this.forma.patchValue({num_fono_1_planta: AST_ENCUESTA.PEF_EMPRESA_UNIDAD_ASTILLAS.FONO1});
      if( AST_ENCUESTA.PEF_EMPRESA_UNIDAD_ASTILLAS.AREA2 != "")
      {
        this.forma.patchValue({codigo_fono_2_planta: AST_ENCUESTA.PEF_EMPRESA_UNIDAD_ASTILLAS.AREA2});
      }else{
        this.forma.patchValue({codigo_fono_2_planta: AST_ENCUESTA.PEF_EMPRESA_UNIDAD_ASTILLAS.AREA1});
      }


      this.forma.patchValue({num_fono_2_planta: AST_ENCUESTA.PEF_EMPRESA_UNIDAD_ASTILLAS.FONO2});
      this.forma.patchValue({email_planta: AST_ENCUESTA.PEF_EMPRESA_UNIDAD_ASTILLAS.MAIL});
      this.forma.patchValue({casilla_planta: AST_ENCUESTA.PEF_EMPRESA_UNIDAD_ASTILLAS.CASILLA});
      this.forma.patchValue({nombre_gerente: AST_ENCUESTA.NOMBRE_GERENTE});
      this.forma.patchValue({region_gerencia: AST_ENCUESTA.PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.REGION      });
      this.forma.patchValue({provincia_gerencia: AST_ENCUESTA.PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.PROVINCIA});
      this.forma.patchValue({comuna_gerencia: AST_ENCUESTA.PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.COMUNA});
      this.forma.patchValue({direccion_gerencia: AST_ENCUESTA.PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.DIRECCION});
      this.forma.patchValue({ciudad_gerencia: AST_ENCUESTA.PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.CIUDAD});
      this.forma.patchValue({casilla_gerencia: AST_ENCUESTA.PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.COMUNA});
      this.forma.patchValue({codigo_fono_1_gerencia: AST_ENCUESTA.PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.AREA1});
      this.forma.patchValue({num_fono_1_gerencia: AST_ENCUESTA.PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.FONO1});
      if( AST_ENCUESTA.PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.AREA2 != "")
      {
        this.forma.patchValue({codigo_fono_2_gerencia: AST_ENCUESTA.PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.AREA2});
      }else{
        this.forma.patchValue({codigo_fono_2_gerencia: AST_ENCUESTA.PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.AREA1});
      }


      this.forma.patchValue({num_fono_2_gerencia: AST_ENCUESTA.PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.FONO2});
      this.forma.patchValue({web: AST_ENCUESTA.PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.WEB});
      this.forma.patchValue({nombre_encuestador: AST_ENCUESTA.USUARIO_INGRESO});
      var str = AST_ENCUESTA.FECHA_ENCUESTA; 
      var fecha = str.split("T", 2); 

      this.forma.patchValue({fecha: fecha[0]});
      this.forma.patchValue({nombre_encuestado: AST_ENCUESTA.NOMBRE_ENCUESTADO      });
      this.forma.patchValue({cargo: AST_ENCUESTA.CARGO_ENCUESTADO      });
      this.forma.patchValue({email_encuestado: AST_ENCUESTA.EMAIL_ENCUESTADO      });
      this.forma.patchValue({codigo_fono_1_encuestado: AST_ENCUESTA.FONO1});
      this.forma.patchValue({num_fono_1_encuestado: AST_ENCUESTA.FONO1});
      this.forma.patchValue({email_gerencia: AST_ENCUESTA.PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.MAIL});
      this.codigo_provincia = AST_ENCUESTA.PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.AREA1;
      this.seleccion_regional = this.forma.get('region').value;
      this.seleccion_provincia = this.forma.get('provincia').value;
      //return new Promise( resolve => setTimeout(resolve, 300) );
      
      this.spinnerComp = false;
    //  return AST_ENCUESTA;
  //});
  */
//Función que se va a ejecutar al iniciar el componente principal
/*
this.ast_encuesta.getAll().then((AST_ENCUESTA: any[]) => { //Obtiene la colección de datos local
  this.AST_ENCUESTA_List = AST_ENCUESTA; //Variable de interpolación con el html

  for(var i = 0; i < AST_ENCUESTA.length; i++)
  {
    if(AST_ENCUESTA[i].ID_ENCUESTA == this.id_encuesta)
    {
      this.codigo_provincia = AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.AREA1;
  
      this.forma.patchValue({region: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.REGION});
      this.forma.patchValue({provincia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PROVINCIA});
      this.forma.patchValue({comuna: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.COMUNA});
      this.forma.patchValue({localidad: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.LOCALIDAD});
      this.forma.patchValue({huso: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.HUSO});
      this.forma.patchValue({zona: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.ZONA.replace(/\s/g, "")});
      this.forma.patchValue({utmx: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.UTMX});
      this.forma.patchValue({utmy: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.UTMY});
      this.forma.patchValue({rut_empresa: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.RUT_EMPRESA});
      this.forma.patchValue({nombre_propietario: AST_ENCUESTA[i].NOMBRE_PROPIETARIO});
      this.forma.patchValue({razon_social: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.RAZON_SOCIAL});
      this.forma.patchValue({nombre_planta: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.NOMBRE_UNIDAD});
      this.forma.patchValue({ciudad_planta: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.CIUDAD});
      this.forma.patchValue({direccion_planta: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.DIRECCION});
      this.forma.patchValue({codigo_fono_1_planta: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.AREA1});
      this.forma.patchValue({num_fono_1_planta: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.FONO1});
      if( AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.AREA2 != "")
      {
        this.forma.patchValue({codigo_fono_2_planta: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.AREA2});
      }else{
        this.forma.patchValue({codigo_fono_2_planta: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.AREA1});
      }


      this.forma.patchValue({num_fono_2_planta: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.FONO2});
      this.forma.patchValue({email_planta: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.MAIL});
      this.forma.patchValue({casilla_planta: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.CASILLA});
      this.forma.patchValue({nombre_gerente: AST_ENCUESTA[i].NOMBRE_GERENTE});
      this.forma.patchValue({region_gerencia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.REGION      });
      this.forma.patchValue({provincia_gerencia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.PROVINCIA});
      this.forma.patchValue({comuna_gerencia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.COMUNA});
      this.forma.patchValue({direccion_gerencia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.DIRECCION});
      this.forma.patchValue({ciudad_gerencia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.CIUDAD});
      this.forma.patchValue({casilla_gerencia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.CASILLA});
      this.forma.patchValue({codigo_fono_1_gerencia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.AREA1});
      this.forma.patchValue({num_fono_1_gerencia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.FONO1});
      if( AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.AREA2 != "")
      {
        this.forma.patchValue({codigo_fono_2_gerencia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.AREA2});
      }else{
        this.forma.patchValue({codigo_fono_2_gerencia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.AREA1});
      }


      this.forma.patchValue({num_fono_2_gerencia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.FONO2});
      this.forma.patchValue({web: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.WEB});
      this.forma.patchValue({nombre_encuestador: AST_ENCUESTA[i].USUARIO_INGRESO});
      var str = AST_ENCUESTA[i].FECHA_ENCUESTA; 
      var fecha = str.split("T", 2); 

      this.forma.patchValue({fecha: fecha[0]});
      this.forma.patchValue({nombre_encuestado: AST_ENCUESTA[i].NOMBRE_ENCUESTADO      });
      this.forma.patchValue({cargo: AST_ENCUESTA[i].CARGO_ENCUESTADO      });
      this.forma.patchValue({email_encuestado: AST_ENCUESTA[i].EMAIL_ENCUESTADO      });
      this.forma.patchValue({codigo_fono_1_encuestado: AST_ENCUESTA[i].FONO1});
      this.forma.patchValue({num_fono_1_encuestado: AST_ENCUESTA[i].FONO1});
      this.forma.patchValue({email_gerencia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.MAIL});
      this.codigo_provincia = AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.AREA1;
      this.seleccion_regional = this.forma.get('region').value;
      this.seleccion_provincia = this.forma.get('provincia').value;
console.log(AST_ENCUESTA[i]);
    }
  }
})*/
}
getCord : ConverCoordenadas;
cords2 : Coordenadas;
getZona(){

}
contruirForm(){
    this.forma = new FormGroup({
      region: new FormControl("", Validators.required),
      provincia: new FormControl("", Validators.required),
      "comuna": new FormControl("", Validators.required),
      "localidad": new FormControl(""),
      "huso": new FormControl("", Validators.required),
      "zona": new FormControl("", Validators.required),
      "utmx": new FormControl("", Validators.required),
      utmy: new FormControl("", Validators.required),
      "rut_empresa": new FormControl("", Validators.required),
      "nombre_propietario": new FormControl(""),
      "razon_social": new FormControl("", Validators.required),
      "nombre_planta": new FormControl("", Validators.required),
      "ciudad_planta": new FormControl("", Validators.required),
      "direccion_planta": new FormControl("", Validators.required),
      "codigo_fono_1_planta": new FormControl(""),
      "num_fono_1_planta": new FormControl(""),
      "codigo_fono_2_planta": new FormControl(""),
      "num_fono_2_planta": new FormControl(""),
      "email_planta": new FormControl(""),
      "casilla_planta": new FormControl(""),
      "nombre_gerente": new FormControl("", Validators.required),
      "region_gerencia": new FormControl("", Validators.required),
      "provincia_gerencia": new FormControl("", Validators.required),
      "comuna_gerencia": new FormControl("", Validators.required),
      "direccion_gerencia": new FormControl("", Validators.required),
      "ciudad_gerencia": new FormControl("", Validators.required),
      "casilla_gerencia": new FormControl(""),
      "email_gerencia": new FormControl(""),
      "codigo_fono_1_gerencia": new FormControl(""),
      "num_fono_1_gerencia": new FormControl(""),
      "codigo_fono_2_gerencia": new FormControl(""),
      "num_fono_2_gerencia": new FormControl(""),
      "web": new FormControl(""),
      "nombre_encuestador": new FormControl("", Validators.required),
      "fecha": new FormControl("", Validators.required),
      "nombre_encuestado": new FormControl("", Validators.required),
      "cargo": new FormControl("", Validators.required),
      "email_encuestado": new FormControl(""),
      "codigo_fono_1_encuestado": new FormControl(""),
      "num_fono_1_encuestado": new FormControl(""),
      "switch_boton": new FormControl(false)
      
  });
}

async convertLatLngToUtm(){
  var getCord  = new ConverCoordenadas();
 var cords2 : Promise<Coordenadas> = getCord.getLocation2().then((cords2: Coordenadas)=>{      
    return cords2;  
  });
  if((await cords2).mensajeError == null){    
    this.forma.patchValue({huso: (await cords2).huso});
    this.forma.patchValue({zona: (await cords2).zona});
    this.forma.patchValue({utmx: (await cords2).utmx});
    this.forma.patchValue({utmy: (await cords2).utmy});    
    this.latitud = (await cords2).latitud;
    this.longitud = (await cords2).longitud;
  } 
  else{
    this.modalError(DataStrings.errorObtenerCoordenadasUTM());
  }  
}

guardar()
  {

    this.valido_1 = this.forma.get('region').valid
    this.valido_2 = this.forma.get('provincia').valid
    this.valido_3 = this.forma.get('comuna').valid
    this.valido_4 = this.forma.get('localidad').valid
    this.valido_5 = this.forma.get('huso').valid
    this.valido_6 = this.forma.get('zona').valid
    this.valido_7 = this.forma.get('utmx').valid
    this.valido_8 = this.forma.get('utmy').valid
    this.valido_9 = this.forma.get('rut_empresa').valid
    this.valido_10 = this.forma.get('nombre_propietario').valid
    this.valido_11 = this.forma.get('razon_social').valid
    this.valido_12 = this.forma.get('nombre_planta').valid
    this.valido_13 = this.forma.get('ciudad_planta').valid
    this.valido_14 = this.forma.get('direccion_planta').valid
    this.valido_15 = this.forma.get('codigo_fono_1_planta').valid
    this.valido_16 = this.forma.get('num_fono_1_planta').valid
    this.valido_17 = this.forma.get('codigo_fono_2_planta').valid
    this.valido_18 = this.forma.get('num_fono_2_planta').valid
    this.valido_19 = this.forma.get('email_planta').valid
    this.valido_20 = this.forma.get('casilla_planta').valid
    this.valido_21 = this.forma.get('nombre_gerente').valid
    this.valido_22 = this.forma.get('region_gerencia').valid
    this.valido_23 = this.forma.get('provincia_gerencia').valid
    this.valido_24 = this.forma.get('comuna_gerencia').valid
    this.valido_25 = this.forma.get('direccion_gerencia').valid
    this.valido_26 = this.forma.get('ciudad_gerencia').valid
    this.valido_27 = this.forma.get('casilla_gerencia').valid
    this.valido_28 = this.forma.get('codigo_fono_1_gerencia').valid
    this.valido_29 = this.forma.get('num_fono_1_gerencia').valid
    this.valido_30 = this.forma.get('codigo_fono_2_gerencia').valid
    this.valido_31 = this.forma.get('num_fono_2_gerencia').valid
    this.valido_32= this.forma.get('email_gerencia').valid
    this.valido_33 = this.forma.get('web').valid
    this.valido_34 = this.forma.get('nombre_encuestador').valid
    this.valido_35 = this.forma.get('fecha').valid
    this.valido_36 = this.forma.get('nombre_encuestado').valid
    this.valido_37 = this.forma.get('cargo').valid
    this.valido_38= this.forma.get('email_encuestado').valid
    this.valido_39= this.forma.get('codigo_fono_1_encuestado').valid
    this.valido_40= this.forma.get('num_fono_1_encuestado').valid


      if(this.forma.valid)
      {
        console.log(this.forma.value);
      }


  }
         ///trae coordenadas


 /*this.forma.patchValue({huso: this.huso});
 this.forma.patchValue({zona: this.letter});
 this.forma.patchValue({utmx: parseInt(this.utmx, 10)});
 this.forma.patchValue({utmy:  parseInt(this.utmy, 10)}); */


 


   
   
    copiar_datos()
    {



      if(this.forma.get('switch_boton').value == true)
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

      }else{
        this.ast_encuesta.getAll().then((AST_ENCUESTA: any[]) => { //Obtiene la colección de datos local
          this.AST_ENCUESTA_List = AST_ENCUESTA; //Variable de interpolación con el html
        
          for(var i = 0; i < AST_ENCUESTA.length; i++)
          {
            if(AST_ENCUESTA[i].ID_ENCUESTA == this.id_encuesta)
            {
              this.forma.patchValue({region_gerencia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.REGION      });
              this.forma.patchValue({provincia_gerencia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.PROVINCIA});
              this.forma.patchValue({comuna_gerencia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.COMUNA});
              this.forma.patchValue({codigo_fono_1_gerencia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.AREA1});
              this.forma.patchValue({num_fono_1_gerencia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.FONO1});
              if( AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.AREA2 != "")
              {
                this.forma.patchValue({codigo_fono_2_gerencia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.AREA2});
              }else{
                this.forma.patchValue({codigo_fono_2_gerencia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.AREA1});
              }
        
        
              this.forma.patchValue({num_fono_2_gerencia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.FONO2});
              this.forma.patchValue({direccion_gerencia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.DIRECCION});
              this.forma.patchValue({ciudad_gerencia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.CIUDAD});
              this.forma.patchValue({email_gerencia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.MAIL});
            }
          }
        });
          
      }

       
   
    }
    cambio()
    {

      this.seleccion_regional = this.forma.get('region').value;
    
        this.forma.patchValue({provincia: null});
        this.forma.patchValue({comuna: null});
        this.valor_provincia = null;
        this.valor_comuna = null;
     
    }
    cambio_2()
    {

      this.seleccion_provincia = this.forma.get('provincia').value;
      this.forma.patchValue({comuna: null});
      this.valor_comuna = null;

    }
  }