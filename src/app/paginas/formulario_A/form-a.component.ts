import { Component, OnInit, Output, EventEmitter}   from '@angular/core';
import { FormControl , FormGroup, ReactiveFormsModule, FormBuilder, Validators, NgForm} from '@angular/forms';
import {Validaciones} from '../../shared/validaciones';

import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-form-a',
  templateUrl: './form-a.component.html',
  styleUrls: ['./form-a.component.css']
})
export class FormAComponent implements OnInit {

  forma:FormGroup;
  constructor(private httpClient:HttpClient) {


    this.forma = new FormGroup({
      "region": new FormControl("" , Validators.required),
      "provincia": new FormControl("", Validators.required),
      "comuna": new FormControl("", Validators.required),
      "localidad": new FormControl(""),
      "huso": new FormControl("", [Validators.required, Validators.min(18), Validators.max(19)]),
      "zona": new FormControl("", Validators.required),
      "utmx": new FormControl("", [Validators.required, Validators.min(100000), Validators.max(999999)]),
      "utmy": new FormControl("", [Validators.required, Validators.min(1000000), Validators.max(9999999)]),
      "rut_empresa": new FormControl("", [Validators.required, Validators.pattern(Validaciones.validaRut)]),
      "nombre_propietario": new FormControl("",Validators.pattern(Validaciones.validaNombre)),
      "razon_social": new FormControl("", Validators.required),
      "nombre_planta": new FormControl("", [Validators.required,Validators.pattern(Validaciones.validaNombre)]),
      "ciudad_planta": new FormControl("", Validators.required),
      "direccion_planta": new FormControl("", Validators.required),
      "codigo_fono_1_planta": new FormControl(""),
      "num_fono_1_planta": new FormControl("",[Validators.minLength(7),Validators.maxLength(8), Validators.pattern(Validaciones.validaNumeroEntero)]),
      "codigo_fono_2_planta": new FormControl(""),
      "num_fono_2_planta": new FormControl("",[Validators.minLength(7),Validators.maxLength(8), Validators.pattern(Validaciones.validaNumeroEntero)]),
      "email_planta": new FormControl("", Validators.email),
      "casilla_planta": new FormControl(""),
      "nombre_gerente": new FormControl("", [Validators.required,Validators.pattern(Validaciones.validaNombre)]),
      "region_gerencia": new FormControl("", Validators.required),
      "provincia_gerencia": new FormControl("", Validators.required),
      "comuna_gerencia": new FormControl("", Validators.required),
      "direccion_gerencia": new FormControl("", Validators.required),
      "ciudad_gerencia": new FormControl("", Validators.required),
      "casilla_gerencia": new FormControl(""),
      "codigo_fono_1_gerencia": new FormControl(""),
      "num_fono_1_gerencia": new FormControl("",Validators.pattern(Validaciones.validaNumeroEntero)),
      "codigo_fono_2_gerencia": new FormControl(""),
      "num_fono_2_gerencia": new FormControl("",Validators.pattern(Validaciones.validaNumeroEntero)),
      "web": new FormControl("", Validators.pattern(Validaciones.validarURL)),
      "nombre_encuestador": new FormControl("", Validators.required),
      "fecha": new FormControl("", Validators.required),
      "nombre_encuestado": new FormControl("", [Validators.required,Validators.pattern(Validaciones.validaNombre)]),
      "cargo": new FormControl("", Validators.required),
      "email_encuestado": new FormControl("",Validators.email),
      "codigo_fono_1_encuestado": new FormControl("", Validators.required),
      "num_fono_1_encuestado": new FormControl("", [Validators.minLength(7),Validators.maxLength(8), Validators.pattern(Validaciones.validaNumeroEntero), Validators.required])
  })


   }


  ngOnInit() {
//Función que se va a ejecutar al iniciar el componente principal
   

  }

  guardar()
  {

     console.log(this.forma.value);

  }
    




}
