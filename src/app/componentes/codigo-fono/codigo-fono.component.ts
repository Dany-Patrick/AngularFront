import { Component, OnInit, Input, Output, EventEmitter, forwardRef, ɵConsole } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Metodos_service } from 'src/app/index_db/metodos/metodos.service';
import { of } from 'rxjs';

@Component({
  selector: 'codigo-fono',
  templateUrl: './codigo-fono.component.html',
  styleUrls: ['./codigo-fono.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CodigoFonoComponent),
      multi: true
    }
  ]
})
export class CodigoFonoComponent implements OnInit, ControlValueAccessor {
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

 lista: any;
 contador_provincias: number = 0;
 contador :number = 0;
 select_region:any;

  constructor(private ast_encuesta: Metodos_service) { }

  ngOnInit() {
    if (this.titulo == "") {
      this.ocultar = true;
    }

  
      this.ast_encuesta.get_provincias().then((PEF_TPOVINCIA: any[]) => { //Obtiene la colección de datos local
  
  
        this.Comunas = new Array(PEF_TPOVINCIA.length);   
        this.contador_provincias = 0;

        for(var c = 0; c < PEF_TPOVINCIA.length; c++)
        {
     
              this.Comunas[c] = PEF_TPOVINCIA[c].CODIGO_AREA;  
              this.contador_provincias++;
         
        }

  

        var uniqueArray = this.Comunas.filter(function(value, index, self) { 
          return self.indexOf(value) === index;
        }); // returns ['a', 1, 2, '1']
        uniqueArray.push(9);
        
        uniqueArray.sort(function(a, b) {
          return a - b;
        });
        this.lista = uniqueArray;
      });

    


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
  }etDisabledState?(isDisabled: boolean): void;
}
