import { Component, OnInit, Input, Output, EventEmitter, forwardRef, OnDestroy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Metodos_service } from 'src/app/index_db/metodos/metodos.service';


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


  @Input() name : any;
@Input() region_seleccionada : any;
@Input() especies_en_indexdb:string = "";
  @Input() titulo: string;
  @Input() label_ancho: any;
  @Input() input_ancho: any;
  @Input() clase_input: string;
  @Input() clase_label: string;
  @Input("value")   valor: any;
  @Input() seleccion_regional: number;
  @Input() seleccion_provincia: number;
  @Input() valor_comuna: number;
  @Input() valor_provincia: number;
  @Input() valido: boolean;
  @Input() especie_seleccionada:any;
input_region:any;
 Regiones:any ;
 Provincias:any;
 Comunas:any;
 @Input() codigo_provincia:string;
 lista: any;
 contador_provincias: number = 0;
 contador :number = 0;
 select_region:any;
lista_elementod_borrados:any;
  constructor(private ast_encuesta: Metodos_service) {


  }

  
  ngOnInit() {
    if(this.clase_input == "input_form_h_destino" )
    {
      this.valor = "0";
      this.ast_encuesta.get_residuo().then((AST_TIPO_TRESIDUO: any[]) => { //Obtiene la colección de datos local
        
        this.lista = new Array(AST_TIPO_TRESIDUO.length);
    
          for(var i = 0; i < AST_TIPO_TRESIDUO.length; i++)
          {
            this.lista[i] = [[AST_TIPO_TRESIDUO[i].DESCRIPCION],[AST_TIPO_TRESIDUO[i].DESTINO_RESIDUO]];
          }
      
          this.lista.sort();
        });
    }
    if(this.clase_input == "input_form_f_moneda" )
    {
      this.valor = "0";
      this.ast_encuesta.get_moneda().then((AST_TMONEDA: any[]) => { //Obtiene la colección de datos local
        
        this.lista = new Array(AST_TMONEDA.length);
    
          for(var i = 0; i < AST_TMONEDA.length; i++)
          {
            this.lista[i] = [[AST_TMONEDA[i].SIGLA],[AST_TMONEDA[i].DESCRIPCION]];
          }
      
          this.lista.sort();
        });
    }
    if(this.clase_input == "input_form_c4_puesto" )
    {
      this.valor = "0";
      this.ast_encuesta.get_plaza().then((AST_TPLAZA: any[]) => { //Obtiene la colección de datos local
        
        this.lista = new Array(AST_TPLAZA.length);
    
          for(var i = 0; i < AST_TPLAZA.length; i++)
          {
            this.lista[i] = [[AST_TPLAZA[i].DESCRIPCION],[AST_TPLAZA[i].DESCRIPCION]];
          }
      
          this.lista.sort();
        });
    }
    if(this.titulo == "Unidad" || this.clase_input == "input_form_c4" || this.clase_input == "input_form_d")
{
  this.valor = "0";
  this.ast_encuesta.get_unidad().then((AST_TUNIDAD: any[]) => { //Obtiene la colección de datos local
    
    this.lista = new Array(AST_TUNIDAD.length);

      for(var i = 0; i < AST_TUNIDAD.length; i++)
      {
        this.lista[i] = [[AST_TUNIDAD[i].SIGLA],[AST_TUNIDAD[i].UNIDAD]];
      }
  
      this.lista.sort();
    });
}
    if(this.clase_input == "input_agregar_especie")
{
 
  this.valor = "0";
  this.ast_encuesta.get_especies().then((PEF_TESPECIE: any[]) => { //Obtiene la colección de datos local
    
    this.lista = new Array(PEF_TESPECIE.length);

      for(var i = 0; i < PEF_TESPECIE.length; i++)
      {
        this.lista[i] = [[PEF_TESPECIE[i].NOMBRE],[PEF_TESPECIE[i].ESPECIE]];
      }
  
      this.lista.sort();
    });
}


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
        this.lista = this.Provincias.sort();;
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
          this.lista = this.Comunas.sort();
      });
    }



    if (this.titulo == "Nombre encuestador") {
      this.ast_encuesta.get_encuestador().then((AST_ENCUESTADOR: any[]) => { //Obtiene la colección de datos local
  
        this.lista = new Array(AST_ENCUESTADOR.length);   
        for(var c = 0; c < AST_ENCUESTADOR.length; c++)
        {
      
            this.lista[c] = [[AST_ENCUESTADOR[c].NOMBRE],[AST_ENCUESTADOR[c].C_ENCUESTADOR]];  
       
        }
        this.lista.sort();
      });

    }

    if (this.titulo == "Zona") {
      this.lista = [[["F"],["F"]] 
                  , [["G"],["G"]]
                  , [["H"],["H"]]
                  , [["I"],["I"]]
                  , [["J"],["J"]]
                  , [["K"],["K"]]];

                  this.lista.sort();
    }

    if (this.titulo == "Cargo") {

     
      this.ast_encuesta.get_cargos().then((PEF_TCARGO: any[]) => { //Obtiene la colección de datos local
  
        this.lista = new Array(PEF_TCARGO.length);   
        for(var c = 0; c < PEF_TCARGO.length; c++)
        {
      
            this.lista[c] = [[PEF_TCARGO[c].DESCRIPCION],[PEF_TCARGO[c].CARGO]];  
       
        }
        this.lista.sort();
      });

     
    }

    if (this.titulo == "Huso") {

     
      this.lista = [[[18],[18]] 
                   , [[19],[19]]];
        this.lista.sort();
      

     
    }
    if(this.clase_input == "input_agregar_especie")
    {
      this.lista = [[["Agregar especie"],["agregar"]]];  
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

mostrar()
{  
 
  
  
if(this.titulo == "Provincia")
{

  this.contador_provincias= 0;
 this.contador=0;

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
      this.lista = this.Provincias.sort();;
    });
 
}
if (this.titulo == "Comuna") {

  this.lista =  null;
  this.contador_provincias= 0;
 this.contador=0;
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
      this.lista = this.Comunas.sort();
  });
}
}
eliminar_seleccion(dato)
{
  var contador =0;
  var nueva_lista :any = new Array(this.lista.length -1);   ;

  for(var a = 0; a < this.lista.length; a++)
  {
  
      if(this.lista[a][1][0] != dato)
      {
        nueva_lista[contador] = [[this.lista[a][0][0]],[this.lista[a][1][0]]];
      contador++;
      }
    
      
    

  }

  this.lista = nueva_lista;

}

agregar_elemento_borrado()
{ 

  if(this.especie_seleccionada != "")
  { 
  var arreglo: any = this.especie_seleccionada.split(',')
 
  for(var i = 0; i < arreglo.length -1; i++)
 
  {var arreglo2: any =arreglo[i].split('|')

    for(var d = 0; d < arreglo.length ; d++)
  { 
 
    if( arreglo2[d] >0 )
  {
   
    this.lista.push([[arreglo2[d-1]],[arreglo2[d].toString()]]);
  }
      
  }

  }

}

this.especie_seleccionada = "";
this.lista =  this.lista.sort();

if(this.especies_en_indexdb != "")
{
  var arreglo2: any = this.especies_en_indexdb.split(',')
  
 

    
      for(var e = 0; e < arreglo2.length -1 ; e++)
  {
    for(var a = 0; a < this.lista.length  ; a++)
    {
    if(arreglo2[e] != "")
    {   
    if(arreglo2[e] == this.lista[a][0])
      { 
        this.lista.splice(a,1);
      }

  }
  
    }
  }

 
  this.especies_en_indexdb = "";
}

}

}

