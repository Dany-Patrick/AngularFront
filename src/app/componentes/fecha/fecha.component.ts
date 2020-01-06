

import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Metodos_service } from 'src/app/index_db/metodos/metodos.service';

@Component({
  selector: 'fecha',
  templateUrl: './fecha.component.html',
  styleUrls: ['./fecha.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FechaComponent),
      multi: true
    }
  ]
})
export class FechaComponent implements OnInit, ControlValueAccessor {







  nombre: string;

  id: string;

  required: boolean;
  ocultar: boolean;



@Input() region_seleccionada : any;
  @Input() titulo: string;
  @Input() label_ancho: any;
  @Input() input_ancho: any;
  @Input() clase_input: string;
  @Input() clase_label: string;
  @Input("value")   valor: any;
  @Input() seleccion_regional: number;
  @Input() seleccion_provincia: number;
  @Input() valido: boolean;
input_region:any;
 Regiones:any ;
 Provincias:any;
 Comunas:any;
 @Input() codigo_provincia:string;
 lista: any;
 contador_provincias: number = 0;
 contador :number = 0;
 select_region:any;

  constructor(private ast_encuesta: Metodos_service) {


  }

 

  ngOnInit() {

    if (this.titulo == "") {
      this.ocultar = true;
    }


 


 
 
  }


  // Both onChange and onTouched are functions
  onChange: any = () => { };
  onTouched: any = () => { };

  get value() {
    return this.valor;
  }

  set value(val) {
    this.valor = val;
    this.onChange(val);
    this.onTouched();
  }
  // We implement this method to keep a reference to the onChange
  // callback function passed by the forms API
  registerOnChange(fn) {
    this.onChange = fn;
  }
  // We implement this method to keep a reference to the onTouched
  //callback function passed by the forms API
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  // This is a basic setter that the forms API is going to use
  writeValue(value) {
    if (value) {
      this.value = value;
    }
  }
  setDisabledState?(isDisabled: boolean): void;
}
 

