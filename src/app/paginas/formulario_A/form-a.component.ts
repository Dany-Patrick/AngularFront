import { Component, OnInit, Output, EventEmitter}   from '@angular/core';
import { FormControl , FormGroup, ReactiveFormsModule, FormBuilder, Validators, NgForm} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Metodos_service } from 'src/app/index_db/metodos/metodos.service';
@Component({
  selector: 'app-form-a',
  templateUrl: './form-a.component.html',
  styleUrls: ['./form-a.component.css']
})
export class FormAComponent implements OnInit {
  myForm: FormGroup;
  forma:FormGroup;
  AST_ENCUESTA_List: any;
  id_encuesta: any;


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


  constructor(private ast_encuesta: Metodos_service,private rutaActiva: ActivatedRoute) {

    

   }


  ngOnInit() {

    this.forma = new FormGroup({
      "region": new FormControl("", Validators.required),
      "provincia": new FormControl("", Validators.required),
      "comuna": new FormControl("", Validators.required),
      "localidad": new FormControl(""),
      "huso": new FormControl("", Validators.required),
      "zona": new FormControl("", Validators.required),
      "utmx": new FormControl("", Validators.required),
      "utmy": new FormControl("", Validators.required),
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
      "num_fono_1_encuestado": new FormControl("")
  })

    this.id_encuesta = this.rutaActiva.snapshot.params.id_encuesta;
//Función que se va a ejecutar al iniciar el componente principal
this.ast_encuesta.getAll().then((AST_ENCUESTA: any[]) => { //Obtiene la colección de datos local
  this.AST_ENCUESTA_List = AST_ENCUESTA; //Variable de interpolación con el html

  for(var i = 0; i < AST_ENCUESTA.length; i++)
  {
    if(AST_ENCUESTA[i].ID_ENCUESTA == this.id_encuesta)
    {
      
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
      this.forma.patchValue({casilla_gerencia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.COMUNA});
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
      this.forma.patchValue({fecha: AST_ENCUESTA[i].FECHA_ENCUESTA});
      this.forma.patchValue({nombre_encuestado: AST_ENCUESTA[i].NOMBRE_ENCUESTADO      });
      this.forma.patchValue({cargo: AST_ENCUESTA[i].CARGO_ENCUESTADO      });
      this.forma.patchValue({email_encuestado: AST_ENCUESTA[i].EMAIL_ENCUESTADO      });
      this.forma.patchValue({codigo_fono_1_encuestado: AST_ENCUESTA[i].FONO1});
      this.forma.patchValue({num_fono_1_encuestado: AST_ENCUESTA[i].FONO1});
      this.forma.patchValue({email_gerencia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.MAIL});
console.log(AST_ENCUESTA[i]);
    }
  }
})

    

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
    




}
