import { Component, OnInit, Output, EventEmitter}   from '@angular/core';
import { FormControl , FormGroup, ReactiveFormsModule, FormBuilder, Validators, NgForm} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { TextboxTextoComponent } from '../../componentes/textbox-texto/textbox-texto.component';

@Component({
  selector: 'app-form-a',
  templateUrl: './form-a.component.html',
  styleUrls: ['./form-a.component.css']
})
export class FormAComponent implements OnInit {


  forma:FormGroup;
  constructor() {


      this.forma = new FormGroup({
          "region": new FormControl("" , Validators.required),
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


   }


  ngOnInit() {

  }

  guardar()
  {

     console.log(this.forma.value);

  }

}
