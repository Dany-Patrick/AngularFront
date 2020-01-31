import { Component, OnInit, Output, EventEmitter, Input}   from '@angular/core';
import { FormControl , FormGroup, ReactiveFormsModule, FormBuilder, Validators, NgForm} from '@angular/forms';
import { Metodos_service } from 'src/app/index_db/metodos/metodos.service';
import { ActivatedRoute } from '@angular/router';
import { findReadVarNames } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-formulario-c',
  templateUrl: './formulario-c.component.html',
  styleUrls: ['./formulario-c.component.css']
})
export class FormularioCComponent implements OnInit {

  forma:FormGroup;
  mostrar_a:boolean = false;
  mostrar_b:boolean = false;
  AST_ENCUESTA_List: any;
  id_encuesta: any;
  situacion:any;
  todos : any;
  lista:any = [];
  lista_2:any = [];
  lista_a:any = [];
  lista_b:any = [];
  @Input() especies_en_indexdb:string = "";
  especies:any = [];
  array_meses_trabajados: any =["0","0","0","0","0","0","0","0","0","0","0","0"];
  meses_trabajados_detalle:any = "";
 indice_filas:any=0;
  contador2:any = 0;
  contador3:any = 0;
  contador4:any = 0;
  control_1:any;
  control_2:any;
  @Input() especie_seleccionada:any = "";
  constructor(private ast_encuesta: Metodos_service,private rutaActiva: ActivatedRoute) {



   }


  ngOnInit() {
    this.ast_encuesta.get_especies().then((PEF_TESPECIE: any[]) => { //Obtiene la colección de datos local de las especies
    
      this.especies = new Array(PEF_TESPECIE.length);
  
        for(var i = 0; i < PEF_TESPECIE.length; i++)
        {
          this.especies[i] = [[PEF_TESPECIE[i].NOMBRE],[PEF_TESPECIE[i].ESPECIE]];
        }
    
        this.especies.sort();
      });

    
    this.forma = new FormGroup({
      "produccion_anual_a": new FormControl(),
      "unidad_a": new FormControl(),
      "produccion_proyectada_a": new FormControl(),
      "variacion_a": new FormControl(),

      "produccion_anual_b": new FormControl(),
      "unidad_b": new FormControl(),
      "produccion_proyectada_b": new FormControl(),
      "variacion_b": new FormControl(),

      "produccion_turno": new FormControl(),
      "unidad_c": new FormControl(),
      "capacidad_maxima_turno": new FormControl(),
      "unidad_c_": new FormControl(),

      "meses_trabajados": new FormControl(),
      "dias_trabajados_mes": new FormControl(),
      "n_turnos_dia": new FormControl(),
      "n_horas_turno": new FormControl(),

      "todos": new FormControl(false),
      "enero": new FormControl(),
      "febrero": new FormControl(),
      "marzo": new FormControl(),
      "abril": new FormControl(),
      "mayo": new FormControl(),
      "junio": new FormControl(),
      "julio": new FormControl(),
      "agosto": new FormControl(),
      "septiembre": new FormControl(),
      "octubre": new FormControl(),
      "noviembre": new FormControl(),
      "diciembre": new FormControl(),

      "agregar_especie": new FormControl(),

    });


    this.id_encuesta = this.rutaActiva.snapshot.params.id_encuesta;
    //Función que se va a ejecutar al iniciar el componente principal
    this.ast_encuesta.getAll().then((AST_ENCUESTA: any[]) => { //Obtiene la colección de datos local
      this.AST_ENCUESTA_List = AST_ENCUESTA; //Variable de interpolación con el html
      for(var i = 0; i < AST_ENCUESTA.length; i++)
      {
        if(AST_ENCUESTA[i].ID_ENCUESTA == this.id_encuesta)
        {
          console.log( AST_ENCUESTA[i] );
          this.forma.patchValue({produccion_anual_a: AST_ENCUESTA[i].PRODUCCION_ANUAL_SC});
          this.forma.patchValue({unidad_a: AST_ENCUESTA[i].UNIDAD_PROD_ANUAL_SC});
          this.forma.patchValue({produccion_proyectada_a: AST_ENCUESTA[i].PRODUCCION_ESTIMADA_SC});
          this.forma.patchValue({variacion_a: AST_ENCUESTA[i].VARIACION_PRODUCCION_ESTIMADA_CC});

          this.forma.patchValue({produccion_anual_b: AST_ENCUESTA[i].PRODUCCION_ANUAL_CC});
          this.forma.patchValue({unidad_b: AST_ENCUESTA[i].UNIDAD_PROD_ANUAL_CC});
          this.forma.patchValue({produccion_proyectada_b: AST_ENCUESTA[i].PRODUCCION_ESTIMADA_CC});
          this.forma.patchValue({variacion_b: AST_ENCUESTA[i].VARIACION_PRODUCCION_ESTIMADA_SC});

          this.forma.patchValue({produccion_turno: AST_ENCUESTA[i].PRODUCCION_TURNO});
          this.forma.patchValue({unidad_c: AST_ENCUESTA[i].UNIDAD_PROD_TURNO});
          this.forma.patchValue({capacidad_maxima_turno: AST_ENCUESTA[i].CAPACIDAD_MAXIMA_TURNO});
          this.forma.patchValue({unidad_c_: AST_ENCUESTA[i].UNIDAD_CAP_MAXIMA_TURNO});

          this.forma.patchValue({meses_trabajados: AST_ENCUESTA[i].MESES_TRABAJADOS_DETALLE});
          this.forma.patchValue({dias_trabajados_mes: AST_ENCUESTA[i].DIAS_TRAB_MES});
          this.forma.patchValue({n_turnos_dia: AST_ENCUESTA[i].TURNOS_DIA});
          this.forma.patchValue({n_horas_turno: AST_ENCUESTA[i].HORAS_TURNO});
          
          if(AST_ENCUESTA[i].MESES_TRABAJADOS_DETALLE == "11111111111" )
          {
            this.forma.patchValue({todos: true});
            this.forma.patchValue({enero: true});
            this.forma.patchValue({febrero: true});
            this.forma.patchValue({marzo: true});
            this.forma.patchValue({abril: true});
            this.forma.patchValue({mayo: true});
            this.forma.patchValue({junio: true});
            this.forma.patchValue({julio: true});
            this.forma.patchValue({agosto: true});
            this.forma.patchValue({septiembre: true});
            this.forma.patchValue({octubre: true});
            this.forma.patchValue({noviembre: true});
            this.forma.patchValue({diciembre: true});
          }else{
            if(AST_ENCUESTA[i].MESES_TRABAJADOS_DETALLE != null)
            {
              var meses_detalle:string = AST_ENCUESTA[i].MESES_TRABAJADOS_DETALLE;

              if(meses_detalle[0] == "1")
              {
                this.forma.patchValue({enero: true});
              }
              if(meses_detalle[1] == "1")
              {
                this.forma.patchValue({febrero: true});
              }
              if(meses_detalle[2] == "1")
              {
                this.forma.patchValue({marzo: true});
              }
              if(meses_detalle[3] == "1")
              {
                this.forma.patchValue({abril: true});
              }
              if(meses_detalle[4] == "1")
              {
                this.forma.patchValue({mayo: true});
              }
              if(meses_detalle[5] == "1")
              {
                this.forma.patchValue({junio: true});
              }
              if(meses_detalle[6] == "1")
              {
                this.forma.patchValue({julio: true});
              }
              if(meses_detalle[7] == "1")
              {
                this.forma.patchValue({agosto: true});
              }
              if(meses_detalle[8] == "1")
              {
                this.forma.patchValue({septiembre: true});
              }
              if(meses_detalle[9] == "1")
              {
                this.forma.patchValue({octubre: true});
              }  
              if(meses_detalle[10] == "1")
              {
                this.forma.patchValue({noviembre: true});
              }
              if(meses_detalle[11] == "1")
              {
                this.forma.patchValue({diciembre: true});
              }
            }
            

        
          }

          for(var a = 0; a < AST_ENCUESTA[i].AST_ENCUESTA_PRODUCCION_ESPECIE_2.length ; a++)
          {
       
            for(var e = 0; e < this.especies.length; e++)
            {
                if(this.especies[e][1] == AST_ENCUESTA[i].AST_ENCUESTA_PRODUCCION_ESPECIE_2[a].ESPECIE)
                  {
                    var porcentaje_sc:number = 0;
                    var porcentaje_cc:number = 0;
                        this.forma.addControl('especie_'+this.contador3, new FormControl(AST_ENCUESTA[i].AST_ENCUESTA_PRODUCCION_ESPECIE_2[a].ESPECIE));
                        if(AST_ENCUESTA[i].AST_ENCUESTA_PRODUCCION_ESPECIE_2[a].PRODUCTO == "2530010" || AST_ENCUESTA[i].AST_ENCUESTA_PRODUCCION_ESPECIE_2[a].PRODUCTO == "2530012")
                        {
                          this.forma.addControl("sin_corteza_" +this.contador3, new FormControl(AST_ENCUESTA[i].AST_ENCUESTA_PRODUCCION_ESPECIE_2[a].PORCENTAJE));
                          porcentaje_sc = AST_ENCUESTA[i].AST_ENCUESTA_PRODUCCION_ESPECIE_2[a].PORCENTAJE;
                          this.forma.addControl("a_precio_"+this.contador3, new FormControl(''));
                          this.forma.addControl("a_unidad_"+this.contador3, new FormControl(''));
                          this.forma.addControl("a_c_h_"+this.contador3, new FormControl(''));
                          this.forma.addControl("a_puesto_"+this.contador3, new FormControl(''));
                          this.mostrar_c3a( porcentaje_sc ,this.contador3);
                        }else{
                          this.forma.addControl("sin_corteza_" +this.contador3, new FormControl());
                          this.forma.addControl("a_precio_"+this.contador3, new FormControl(''));
                          this.forma.addControl("a_unidad_"+this.contador3, new FormControl(''));
                          this.forma.addControl("a_c_h_"+this.contador3, new FormControl(''));
                          this.forma.addControl("a_puesto_"+this.contador3, new FormControl(''));

                        }
                        if( AST_ENCUESTA[i].AST_ENCUESTA_PRODUCCION_ESPECIE_2[a].PRODUCTO == "2530011")
                        {
                          this.forma.addControl("con_corteza_" +this.contador3, new FormControl(AST_ENCUESTA[i].AST_ENCUESTA_PRODUCCION_ESPECIE_2[a].PORCENTAJE));
                          porcentaje_cc = AST_ENCUESTA[i].AST_ENCUESTA_PRODUCCION_ESPECIE_2[a].PORCENTAJE;
                          this.forma.addControl("b_precio_"+this.contador3, new FormControl(''));
                          this.forma.addControl("b_unidad_"+this.contador3, new FormControl(''));
                          this.forma.addControl("b_c_h_"+this.contador3, new FormControl(''));
                          this.forma.addControl("b_puesto_"+this.contador3, new FormControl(''));
                          this.mostrar_c3b( porcentaje_cc ,this.contador3);
                        }else{
                          this.forma.addControl("con_corteza_" +this.contador3, new FormControl());
                          this.forma.addControl("b_precio_"+this.contador3, new FormControl(''));
                          this.forma.addControl("b_unidad_"+this.contador3, new FormControl(''));
                          this.forma.addControl("b_c_h_"+this.contador3, new FormControl(''));
                          this.forma.addControl("b_puesto_"+this.contador3, new FormControl(''));

                        }

                        this.forma.addControl("porcentaje_final_" +this.contador3, new FormControl(porcentaje_sc + porcentaje_cc));
                      
              

                    this.lista.push([[this.especies[e][0]],[this.especies[e][1]],[  this.contador3]]);
                  this.quitar_elementos_previos(this.especies[e][0]);
         
                    this.contador3++;
                  }
            }
        
        
          }
     
      
        }
      }
    });
  
  }

  guardar()
  {

    
    if(this.forma.valid)
    {
      console.log(this.forma.value);
    }
  }
  activar_todos()
  {
    if(this.forma.get("todos").value == true)
    {
      this.forma.patchValue({enero: true});
      this.forma.patchValue({febrero: true});
      this.forma.patchValue({marzo: true});
      this.forma.patchValue({abril: true});
      this.forma.patchValue({mayo: true});
      this.forma.patchValue({junio: true});
      this.forma.patchValue({julio: true});
      this.forma.patchValue({agosto: true});
      this.forma.patchValue({septiembre: true});
      this.forma.patchValue({octubre: true});
      this.forma.patchValue({noviembre: true});
      this.forma.patchValue({diciembre: true});

      this.meses_trabajados_detalle = ""
   

  
      for(var i = 0; i < this.array_meses_trabajados.length; i++)
      {
        
        this.meses_trabajados_detalle += "1";;
      }
 
        this.forma.patchValue({meses_trabajados:     this.meses_trabajados_detalle});
    }

  }
  desactivar_todos()
{
    this.forma.patchValue({todos: false});
    this.todos = false;
    
 
  }

 
  borrar_fila(fila , indice , valor, valor_fila)
  {
    if(this.contador2 == 0)
    {
      this.especie_seleccionada = "";
    }
      
            for(var c = 0; c< this.lista_2.length ; c++)
            {
              

              this.forma.removeControl("a_"+valor+"_"+c);
              this.forma.removeControl("b_"+valor+"_"+c);
            
          }
          this.forma.removeControl("a_precio_" +valor);
          this.forma.removeControl("a_unidad_" +valor);
          this.forma.removeControl("a_c_h_" +valor);
          this.forma.removeControl("a_puesto_" +valor);
          this.forma.removeControl("b_precio_" +valor);
          this.forma.removeControl("b_unidad_" +valor);
          this.forma.removeControl("b_c_h_" +valor);
          this.forma.removeControl("b_puesto_" +valor);

          if( this.forma.get("sin_corteza_" +valor).value > 0)
          {
            if(this.lista_a.length == 1)
            {
              this.lista_a.splice(0,1);
            }else{
              this.lista_a.splice(indice,1);
            }
          }

          if( this.forma.get("con_corteza_" +valor).value > 0)
          {
          if(this.lista_b.length == 1)
          {
            this.lista_b.splice(0,1);
          }else{
            this.lista_b.splice(indice,1);
          }
        }

          this.forma.removeControl("sin_corteza_" +valor);
          this.forma.removeControl("con_corteza_" +valor);
          this.forma.removeControl("especie_" +valor);
          this.forma.removeControl("porcentaje_final_" +valor);

          if(this.lista.length == 1)
          {
            this.lista.splice(0,1);
          }else{
            this.lista.splice(indice,1);
          }
       

   this.especie_seleccionada += fila+"|"+valor_fila+",";
 
   this.contador3 = 0;
this.contador2++;
console.log("------------");
console.log("Datos: "+fila+" "+ indice +" "+  valor+" "+  valor_fila);
console.log("Lista: "+this.lista.length);
for(var c = 0; c< this.lista.length ; c++)
            {
              console.log(this.lista[c]);
            }
console.log("Lista_a: "+this.lista_a.length);
for(var c = 0; c< this.lista_a.length ; c++)
            {
              console.log(this.lista_a[c]);
            }
console.log("Lista_b: "+this.lista_b.length);
for(var c = 0; c< this.lista_b.length ; c++)
            {
              console.log(this.lista_b[c]);
            }

  }
  contador2_cero()
  {
    this.contador2=0;
  }

  agregar_especie()
  {  
      this.especie_seleccionada="";
    for(var e = 0; e < this.especies.length; e++)
    { 
        if(this.especies[e][1] == this.forma.get("agregar_especie").value)
          { 
            this.lista.push([[this.especies[e][0]],[this.especies[e][1]],[  this.contador3]]);
       
            this.forma.addControl('especie_'+this.contador3, new FormControl(this.especies[e][1][0]));
          }
    }

    for(var a = 0; a < this.lista_2.length ; a++)
    {
    
    for(var b = 0; b < this.lista_a.length ; b++)
    {

      this.forma.addControl("a_"+b+"_"+a, new FormControl(''));
     
  
    }
    for(var c = 0; c < this.lista_b.length ; c++)
    {

      this.forma.addControl("b_"+c+"_"+a, new FormControl(''));
     
  
    }
  }
  
    this.forma.addControl("sin_corteza_" +this.contador3, new FormControl(''));
    this.forma.addControl("con_corteza_" +this.contador3, new FormControl(''));
    this.forma.addControl("porcentaje_final_" +this.contador3, new FormControl(''));

    this.forma.addControl("a_precio_"+this.contador3, new FormControl(''));
    this.forma.addControl("a_unidad_"+this.contador3, new FormControl(''));
    this.forma.addControl("a_c_h_"+this.contador3, new FormControl(''));
    this.forma.addControl("a_puesto_"+this.contador3, new FormControl(''));
    this.forma.addControl("b_precio_"+this.contador3, new FormControl(''));
    this.forma.addControl("b_unidad_"+this.contador3, new FormControl(''));
    this.forma.addControl("b_c_h_"+this.contador3, new FormControl(''));
    this.forma.addControl("b_puesto_"+this.contador3, new FormControl(''));
    this.contador3++;
  

  }
  mostrar_c3a(valor,item)
  {

    this.ast_encuesta.get_destino_produccion().then((AST_TDESTINO_PRODUCCION: any[]) => { //Obtiene la colección de datos local
      this.lista_2 = AST_TDESTINO_PRODUCCION; //Variable de interpolación con el html
      for(var i = 0; i < AST_TDESTINO_PRODUCCION.length; i++)
      {
     
        
          this.lista_2[i] = [[AST_TDESTINO_PRODUCCION[i].DESCRIPCION],[AST_TDESTINO_PRODUCCION[i].DESCRIPCION]];
      
      }

      this.lista_2.push([["Total"]]);

  

   
        if(valor > 0)
        {
          this.lista_a.push(this.lista[item]);
     
          for(var a = 0; a < this.lista_2.length ; a++)
          {
          
          for(var b = 0; b < this.lista_a.length ; b++)
          {

            this.forma.addControl("a_"+this.lista[item][2]+"_"+a, new FormControl(''));
           
        
          }
        }
            
          
      
    
   
  }
  
    });

    if(valor > 0)
    {
        this.mostrar_a = true;
    }else{
      this.mostrar_a = false;
    }

  }
  mostrar_c3b(valor,item)
  {
    this.ast_encuesta.get_destino_produccion().then((AST_TDESTINO_PRODUCCION: any[]) => { //Obtiene la colección de datos local
      this.lista_2 = AST_TDESTINO_PRODUCCION; //Variable de interpolación con el html
      for(var i = 0; i < AST_TDESTINO_PRODUCCION.length; i++)
      {
     
        
          this.lista_2[i] = [[AST_TDESTINO_PRODUCCION[i].DESCRIPCION],[AST_TDESTINO_PRODUCCION[i].DESCRIPCION]];
      
      }

      this.lista_2.push([["Total"]]);

    

    
     
        if(valor > 0)
        {
          this.lista_b.push(this.lista[item]);
          for(var a = 0; a < this.lista_2.length ; a++)
          {
          
          for(var b = 0; b < this.lista_b.length ; b++)
          {
            this.forma.addControl("b_"+this.lista[item][2]+"_"+a, new FormControl(''));
        
          }
        
            
          }
      
    
   
  }

  
    });

    if(valor > 0)
    {
        this.mostrar_b = true;
    }else{
      this.mostrar_b = false;
    }


  }
  add_meses_detalle()
  {  this.meses_trabajados_detalle = ""


  if(this.forma.get("enero").value == true)
  { 
      this.array_meses_trabajados[0] = "1";
  }else {
      this.array_meses_trabajados[0] = "0";
  }

  if(this.forma.get("febrero").value == true)
  {
      this.array_meses_trabajados[1] = "1";
  }else {
    this.array_meses_trabajados[1] = "0";
  } 

  if(this.forma.get("marzo").value == true)
  {
       this.array_meses_trabajados[2] = "1";
  }else {
    this.array_meses_trabajados[2] = "0";
  } 
  
  if(this.forma.get("abril").value == true)
  {
       this.array_meses_trabajados[3] = "1";
  }else {
    this.array_meses_trabajados[3] = "0";
  } 
  
  if(this.forma.get("mayo").value == true)
  {
       this.array_meses_trabajados[4] = "1";
  }else {
    this.array_meses_trabajados[4] = "0";
  } 
  
  if(this.forma.get("junio").value == true)
  {
       this.array_meses_trabajados[5] = "1";
  }else {
    this.array_meses_trabajados[5] = "0";
  } 
  
  if(this.forma.get("julio").value == true)
  {
       this.array_meses_trabajados[6] = "1";
  }else {
    this.array_meses_trabajados[6] = "0";
  } 
  
  if(this.forma.get("agosto").value == true)
  {
       this.array_meses_trabajados[7] = "1";
  }else {
    this.array_meses_trabajados[7] = "0";
  }  
  
  if(this.forma.get("septiembre").value == true)
  {
       this.array_meses_trabajados[8] = "1";
  }else {
    this.array_meses_trabajados[9] = "0";
  } 
  
  if(this.forma.get("octubre").value == true)
  {
       this.array_meses_trabajados[9] = "1";
  }else {
    this.array_meses_trabajados[9] = "0";
  } 
  
  if(this.forma.get("noviembre").value == true)
  {
       this.array_meses_trabajados[10] = "1";
  }else {
    this.array_meses_trabajados[10] = "0";
  }  
  
  if(this.forma.get("diciembre").value == true)
  {
       this.array_meses_trabajados[11] = "1";
  }else{
      this.array_meses_trabajados[11] = "0";
  }

    for(var i = 0; i < this.array_meses_trabajados.length; i++)
    {
      
      this.meses_trabajados_detalle += this.array_meses_trabajados[i];
    }
    this.forma.patchValue({meses_trabajados:     this.meses_trabajados_detalle});

  }
  quitar_elementos_previos(dato)
  {

    this.especies_en_indexdb += dato+",";
  }
}
