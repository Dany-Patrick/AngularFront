import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Metodos_service } from 'src/app/index_db/metodos/metodos.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'lista-desplegable',
  templateUrl: './textbox-lista-desplegable.component.html',
  styleUrls: ['./textbox-lista-desplegable.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextboxListaDesplegableComponent),
      multi: true
    }
  ]
})
export class TextboxListaDesplegableComponent implements OnInit, ControlValueAccessor {
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

  constructor(private ast_encuesta: Metodos_service) {


  }

 

  ngOnInit() {


    if (this.titulo == "") {
      this.ocultar = true;
    }

   
    if (this.titulo == "Región") {
      this.ast_encuesta.get_regiones().then((PEF_TREGION: any[]) => { //Obtiene la colección de datos local
 
      this.Regiones = new Array(PEF_TREGION.length);

        for(var i = 0; i < PEF_TREGION.length; i++)
        {
          this.Regiones[i] = [[PEF_TREGION[i].NOMBRE],[PEF_TREGION[i].REGION]];
        }
    
        this.lista = this.Regiones;
      });
    }
    
    if (this.titulo == "Provincia") {
  
      this.ast_encuesta.get_provincias().then((PEF_TPROVINCIA: any[]) => { //Obtiene la colección de datos local
      for(var b = 0; b < PEF_TPROVINCIA.length; b++)
      {
        if(PEF_TPROVINCIA[b].REGION ==   this.seleccion_regional)
        {
          this.contador_provincias++;
      } 
         }

      this.Provincias = new Array(this.contador_provincias);   
      for(var c = 0; c < PEF_TPROVINCIA.length; c++)
      {
        if(PEF_TPROVINCIA[c].REGION ==   this.seleccion_regional)
        {
          this.Provincias[this.contador] = [[PEF_TPROVINCIA[c].NOMBRE],[PEF_TPROVINCIA[c].PROVINCIA]];  
          this.contador++;
        } 
      }
        this.lista = this.Provincias;
      });
    }

    if (this.titulo == "Comuna") {
      this.contador_provincias= 0;
      this.ast_encuesta.get_comunas().then((PEF_TCOMUNA: any[]) => { //Obtiene la colección de datos local
        for(var b = 0; b < PEF_TCOMUNA.length; b++)
        {
          if(PEF_TCOMUNA[b].REGION ==   this.seleccion_regional && PEF_TCOMUNA[b].PROVINCIA == this.seleccion_provincia)
          {
            this.contador_provincias++;
        } 
           }
  
        this.Comunas = new Array(this.contador_provincias);   
        for(var c = 0; c < PEF_TCOMUNA.length; c++)
        {
          if(PEF_TCOMUNA[c].REGION ==   this.seleccion_regional && PEF_TCOMUNA[c].PROVINCIA == this.seleccion_provincia)
          {
            this.Comunas[this.contador] = [[PEF_TCOMUNA[c].NOMBRE],[PEF_TCOMUNA[c].COMUNA]];  
            this.contador++;
          } 
        }
          this.lista = this.Comunas;
      });
    }



    if (this.titulo == "Nombre encuestador") {
      this.ast_encuesta.get_encuestador().then((AST_ENCUESTADOR: any[]) => { //Obtiene la colección de datos local
  
        this.lista = new Array(AST_ENCUESTADOR.length);   
        for(var c = 0; c < AST_ENCUESTADOR.length; c++)
        {
      
            this.lista[c] = [[AST_ENCUESTADOR[c].NOMBRE],[AST_ENCUESTADOR[c].C_ENCUESTADOR]];  
       
        }
  
      });

    }

    if (this.titulo == "Zona") {
      this.lista = [[["F"],["F"]] 
                  , [["G"],["G"]]
                  , [["H"],["H"]]
                  , [["I"],["I"]]
                  , [["J"],["J"]]
                  , [["K"],["K"]]];
    }

    if (this.titulo == "Cargo") {

     
      this.ast_encuesta.get_cargos().then((PEF_TCARGO: any[]) => { //Obtiene la colección de datos local
  
        this.lista = new Array(PEF_TCARGO.length);   
        for(var c = 0; c < PEF_TCARGO.length; c++)
        {
      
            this.lista[c] = [[PEF_TCARGO[c].DESCRIPCION],[PEF_TCARGO[c].CARGO]];  
       
        }
  
      });

     
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
 

