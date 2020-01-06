import { Component, OnInit, Output, EventEmitter, Input}   from '@angular/core';
import { FormControl , FormGroup, ReactiveFormsModule, FormBuilder, Validators, NgForm} from '@angular/forms';
import { Metodos_service } from 'src/app/index_db/metodos/metodos.service';
import { ActivatedRoute } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-formulario-c',
  templateUrl: './formulario-c.component.html',
  styleUrls: ['./formulario-c.component.css']
})
export class FormularioCComponent implements OnInit {

  forma:FormGroup;
  AST_ENCUESTA_List: any;
  id_encuesta: any;
  situacion:any;
  todos : any;
  lista:any = [];
  contador2:any = 0;
  @Input() especie_seleccionada:any;
  constructor(private ast_encuesta: Metodos_service,private rutaActiva: ActivatedRoute) {



   }


  ngOnInit() {
    
    this.forma = new FormGroup({
      "produccion_anual_a": new FormControl(),
      "unidad_a": new FormControl(),
      "produccion_proyectada_a": new FormControl(),
      "variacion_a": new FormControl(),
      "produccion_anual_b": new FormControl(),
      "unidad_b": new FormControl(),
      "produccion_proyectada_b": new FormControl(),
      "produccion_turno": new FormControl(),
      "variacion_b": new FormControl(),
      "unidad_c": new FormControl(),
      "capacidad_maxima_turno": new FormControl(),
      "unidad_c_": new FormControl(),
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
      "agregar_especie": new FormControl()
    });


    this.id_encuesta = this.rutaActiva.snapshot.params.id_encuesta;
    //Función que se va a ejecutar al iniciar el componente principal
    this.ast_encuesta.getAll().then((AST_ENCUESTA: any[]) => { //Obtiene la colección de datos local
      this.AST_ENCUESTA_List = AST_ENCUESTA; //Variable de interpolación con el html
      for(var i = 0; i < AST_ENCUESTA.length; i++)
      {
        if(AST_ENCUESTA[i].ID_ENCUESTA == this.id_encuesta)
        {
          
        
          console.log( AST_ENCUESTA[i]);
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
    }


  }
  desactivar_todos()
{
    this.forma.patchValue({todos: false});
    this.todos = false;
  }

  agregar_especie()
  {
    this.lista.push([[this.forma.get("agregar_especie").value]]);
  }
  borrar_fila(fila)
  {
 
  if(this.contador2 == 0)
  {
    this.especie_seleccionada = "";
  }
    var contador =0;
    var nueva_lista :any = new Array(this.lista.length -1);   ;
  
    for(var a = 0; a < this.lista.length; a++)
    {
      
        if(this.lista[a][0][0] != fila)
        {
          nueva_lista[contador] = [[this.lista[a][0][0]],[this.lista[a][0][0]]];
         contador++;
        }
      
  
    }
  this.especie_seleccionada += fila.toString()+",";
    this.lista = nueva_lista;
    this.contador2++;
  }
  contador2_cero()
  {
    this.contador2=0;
  }
}
