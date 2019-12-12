import { Component, OnInit, Output, EventEmitter}   from '@angular/core';
import { FormControl , FormGroup, ReactiveFormsModule, FormBuilder, Validators, NgForm} from '@angular/forms';
import { Metodos_service } from 'src/app/index_db/metodos/metodos.service';
import { ActivatedRoute } from '@angular/router';

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
  constructor(private ast_encuesta: Metodos_service,private rutaActiva: ActivatedRoute) {



   }


  ngOnInit() {
    
    this.forma = new FormGroup({
      "produccion_anual_a": new FormControl(0, Validators.required),
      "unidad_a": new FormControl(0, Validators.required),
      "produccion_proyectada_a": new FormControl(0, Validators.required),
      "variacion_a": new FormControl(0, Validators.required),
      "produccion_anual_b": new FormControl(0, Validators.required),
      "unidad_b": new FormControl(0, Validators.required),
      "produccion_proyectada_b": new FormControl(0, Validators.required),
      "produccion_turno": new FormControl(0, Validators.required),
      "variacion_b": new FormControl(0, Validators.required),
      "unidad_c": new FormControl(0, Validators.required),
      "capacidad_maxima_turno": new FormControl(0, Validators.required),
      "unidad_c_": new FormControl(0, Validators.required),
      "dias_trabajados_mes": new FormControl(0, Validators.required),
      "n_turnos_dia": new FormControl(0, Validators.required),
      "n_horas_turno": new FormControl(0, Validators.required),
      "todos": new FormControl(0, Validators.required),
      "enero": new FormControl(0, Validators.required),
      "febrero": new FormControl(0, Validators.required),
      "marzo": new FormControl(0, Validators.required),
      "abril": new FormControl(0, Validators.required),
      "mayo": new FormControl(0, Validators.required),
      "junio": new FormControl(0, Validators.required),
      "julio": new FormControl(0, Validators.required),
      "agosto": new FormControl(0, Validators.required),
      "septiembre": new FormControl(0, Validators.required),
      "octubre": new FormControl(0, Validators.required),
      "noviembre": new FormControl(0, Validators.required),
      "diciembre": new FormControl(0, Validators.required),
    });


    this.id_encuesta = this.rutaActiva.snapshot.params.id_encuesta;
    //Función que se va a ejecutar al iniciar el componente principal
    this.ast_encuesta.getAll().then((AST_ENCUESTA: any[]) => { //Obtiene la colección de datos local
      this.AST_ENCUESTA_List = AST_ENCUESTA; //Variable de interpolación con el html
      for(var i = 0; i < AST_ENCUESTA.length; i++)
      {
        if(AST_ENCUESTA[i].ID_ENCUESTA == this.id_encuesta)
        {
          
          this.forma.patchValue({produccion_anual_a: AST_ENCUESTA[i].PRODUCCION_ANUAL_SC});
          this.forma.patchValue({unidad_a: AST_ENCUESTA[i].UNIDAD_PROD_ANUAL_SC});
          this.forma.patchValue({produccion_proyectada_a: AST_ENCUESTA[i].PRODUCCION_ESTIMADA_SC});
          this.forma.patchValue({variacion_a: AST_ENCUESTA[i].VARIACION_PRODUCCION_ESTIMADA_CC});

          this.forma.patchValue({produccion_anual_b: AST_ENCUESTA[i].PRODUCCION_ANUAL_CC});
          this.forma.patchValue({unidad_b: AST_ENCUESTA[i].UNIDAD_PROD_ANUAL_CC});
          this.forma.patchValue({produccion_proyectada_b: AST_ENCUESTA[i].PRODUCCION_TURNO});
          this.forma.patchValue({variacion_b: AST_ENCUESTA[i].PRODUCCION_ESTIMADA_CC});

          this.forma.patchValue({produccion_turno: AST_ENCUESTA[i].PRODUCCION_TURNO});
          this.forma.patchValue({unidad_c: AST_ENCUESTA[i].UNIDAD_PROD_TURNO});
          this.forma.patchValue({capacidad_maxima_turno: AST_ENCUESTA[i].CAPACIDAD_MAXIMA_TURNO});
          this.forma.patchValue({unidad_c_: AST_ENCUESTA[i].UNIDAD_CAP_MAXIMA_TURNO});

          this.forma.patchValue({dias_trabajados_mes: AST_ENCUESTA[i].DIAS_TRAB_MES});
          this.forma.patchValue({n_turnos_dia: AST_ENCUESTA[i].TURNOS_DIA});
          this.forma.patchValue({n_horas_turno: AST_ENCUESTA[i].HORAS_TURNO});

          this.forma.patchValue({todos: AST_ENCUESTA[i].PRODUCCION_ANUAL_CC});

          this.forma.patchValue({enero: AST_ENCUESTA[i].PRODUCCION_ANUAL_CC});
          this.forma.patchValue({febrero: AST_ENCUESTA[i].PRODUCCION_ANUAL_CC});
          this.forma.patchValue({marzo: AST_ENCUESTA[i].PRODUCCION_ANUAL_CC});
          this.forma.patchValue({abril: AST_ENCUESTA[i].PRODUCCION_ANUAL_CC});

          this.forma.patchValue({mayo: AST_ENCUESTA[i].PRODUCCION_ANUAL_CC});
          this.forma.patchValue({junio: AST_ENCUESTA[i].PRODUCCION_ANUAL_CC});

          this.forma.patchValue({julio: AST_ENCUESTA[i].PRODUCCION_ANUAL_CC});
          this.forma.patchValue({agosto: AST_ENCUESTA[i].PRODUCCION_ANUAL_CC});

          this.forma.patchValue({septiembre: AST_ENCUESTA[i].PRODUCCION_ANUAL_CC});
          this.forma.patchValue({octubre: AST_ENCUESTA[i].PRODUCCION_ANUAL_CC});
          this.forma.patchValue({noviembre: AST_ENCUESTA[i].PRODUCCION_ANUAL_CC});
          this.forma.patchValue({diciembre: AST_ENCUESTA[i].PRODUCCION_ANUAL_CC});
        
          console.log( AST_ENCUESTA[i]);
        }
      }
    });
  
  }

  guardar()
  {

     console.log(this.forma.value);

  }

}
