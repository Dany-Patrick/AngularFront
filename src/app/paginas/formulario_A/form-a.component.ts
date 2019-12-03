import { Component, OnInit, Output, EventEmitter}   from '@angular/core';
import { FormControl , FormGroup, ReactiveFormsModule, FormBuilder, Validators, NgForm} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Ast_Encuesta_Service } from 'src/app/index_db/metodos/ast_encuesta.service';
@Component({
  selector: 'app-form-a',
  templateUrl: './form-a.component.html',
  styleUrls: ['./form-a.component.css']
})
export class FormAComponent implements OnInit {

  forma:FormGroup;
  AST_ENCUESTA_List: any;
  id_encuesta: any;

  constructor(private ast_encuesta: Ast_Encuesta_Service,private rutaActiva: ActivatedRoute) {

    

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
      "codigo_fono_1_encuestado": new FormControl("", Validators.required),
      "num_fono_1_encuestado": new FormControl("", Validators.required)
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
      this.forma.patchValue({zona: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.ZONA});
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
      this.forma.patchValue({codigo_fono_2_planta: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.AREA2});
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
      this.forma.patchValue({codigo_fono_2_gerencia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.AREA2});
      this.forma.patchValue({num_fono_2_gerencia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.FONO2});
      this.forma.patchValue({web: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.WEB});
      this.forma.patchValue({nombre_encuestador: 6});
      this.forma.patchValue({fecha: AST_ENCUESTA[i].FECHA_ENCUESTA});
      this.forma.patchValue({nombre_encuestado: AST_ENCUESTA[i].NOMBRE_ENCUESTADO      });
      this.forma.patchValue({cargo: AST_ENCUESTA[i].CARGO_ENCUESTADO      });
      this.forma.patchValue({email_encuestado: AST_ENCUESTA[i].EMAIL_ENCUESTADO      });
      this.forma.patchValue({codigo_fono_1_encuestado: AST_ENCUESTA[i].FONO1});
      this.forma.patchValue({num_fono_1_encuestado: AST_ENCUESTA[i].FONO1});
      console.log( AST_ENCUESTA[i]);
    }
  }
})

    

  }

  guardar()
  {

     console.log(this.forma.value);

  }
    




}
