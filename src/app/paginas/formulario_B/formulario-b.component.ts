import { Component, OnInit, Input } from '@angular/core';
import { FormControl , FormGroup, ReactiveFormsModule, FormBuilder, Validators, NgForm, NgControl} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Metodos_service } from 'src/app/index_db/metodos/metodos.service';
@Component({
  selector: 'app-formulario-b',
  templateUrl: './formulario-b.component.html',
  styleUrls: ['./formulario-b.component.css']
})
export class FormularioBComponent implements OnInit {
  forma:FormGroup;
  AST_ENCUESTA_List: any;
  id_encuesta: any;
  situacion:any;
  checkboxes:any;
  lista:any;
  constructor(private ast_encuesta: Metodos_service,private rutaActiva: ActivatedRoute ) { }
 
  ngOnInit() {

    this.forma = new FormGroup({
      "movil": new FormControl(false),
      "permanente": new FormControl(false),
      "b2_paralizado": new FormControl(false),
      "b2_trabajando": new FormControl(false),
      "b2_nuevo": new FormControl(false),
      "b2_desaparecido": new FormControl(false),
      "causa_paralizacion": new FormControl(),
      "b4_paralizado": new FormControl(false),
      "b4_trabajando": new FormControl(false),
      "b4_nuevo": new FormControl(false),
      "b4_desaparecido": new FormControl(false),
      "causa_desaparecido": new FormControl()
    });
    this.id_encuesta = this.rutaActiva.snapshot.params.id_encuesta;
    //Función que se va a ejecutar al iniciar el componente principal
    this.ast_encuesta.getAll().then((AST_ENCUESTA: any[]) => { //Obtiene la colección de datos local
      this.AST_ENCUESTA_List = AST_ENCUESTA; //Variable de interpolación con el html
     
      for(var i = 0; i < AST_ENCUESTA.length; i++)
      {
        if(AST_ENCUESTA[i].ID_ENCUESTA == this.id_encuesta)
        {
          if(AST_ENCUESTA[i].TIPO_MOVILIDAD == "M")
          {
            this.forma.patchValue({movil: true});
          }
          if(AST_ENCUESTA[i].TIPO_MOVILIDAD == "P")
          {
            this.forma.patchValue({permanente: true});
          }
      
      
          if(AST_ENCUESTA[i].SITUACION == "P")
          {
            this.forma.patchValue({b2_paralizado: true});

                  if(AST_ENCUESTA[i].CAUSA_PARALIZACION == "P")
                  {
                    this.forma.patchValue({falta_capital_de_trabajo: true});
                  }
                  if(AST_ENCUESTA[i].CAUSA_PARALIZACION == "T")
                  {
                    this.forma.patchValue({falta_mercado: true});
                  }
                  if(AST_ENCUESTA[i].CAUSA_PARALIZACION == "N")
                  {
                    this.forma.patchValue({falta_abastecimiento: true});
                  }
                  if(AST_ENCUESTA[i].CAUSA_PARALIZACION == "D")
                  {
                    this.forma.patchValue({cambio_giro: true});
                  }
                  if(AST_ENCUESTA[i].CAUSA_PARALIZACION == "P")
                  {
                    this.forma.patchValue({fuerza_mayor: true});
                  }
                  if(AST_ENCUESTA[i].CAUSA_PARALIZACION == "T")
                  {
                    this.forma.patchValue({legales_y_de_gestión: true});
                  }
          }
          this.situacion = AST_ENCUESTA[i].SITUACION;
          if(AST_ENCUESTA[i].SITUACION == "T")
          {
            this.forma.patchValue({b2_trabajando: true});
          }
          if(AST_ENCUESTA[i].SITUACION == "N")
          {
            this.forma.patchValue({b2_nuevo: true});
          }
          if(AST_ENCUESTA[i].SITUACION == "D")
          {
            this.forma.patchValue({b2_desaparecido: true});

                  if(AST_ENCUESTA[i].CAUSA_DESAPARECIDO == "P")
                  {
                    this.forma.patchValue({falta_capital_de_trabajo: true});
                  }
                  if(AST_ENCUESTA[i].CAUSA_DESAPARECIDO == "T")
                  {
                    this.forma.patchValue({falta_mercado: true});
                  }
                  if(AST_ENCUESTA[i].CAUSA_DESAPARECIDO == "N")
                  {
                    this.forma.patchValue({falta_abastecimiento: true});
                  }
                  if(AST_ENCUESTA[i].CAUSA_DESAPARECIDO == "D")
                  {
                    this.forma.patchValue({cambio_giro: true});
                  }
                  if(AST_ENCUESTA[i].CAUSA_DESAPARECIDO == "P")
                  {
                    this.forma.patchValue({fuerza_mayor: true});
                  }
                  if(AST_ENCUESTA[i].CAUSA_DESAPARECIDO == "T")
                  {
                    this.forma.patchValue({legales_y_de_gestión: true});
                  }
          }

       
            
         
     
          if(AST_ENCUESTA[i].TIPO_MOVILIDAD == "P")
          {
            this.forma.patchValue({b4_paralizado: true});
          }
          if(AST_ENCUESTA[i].TIPO_MOVILIDAD == "T")
          {
            this.forma.patchValue({b4_trabajando: true});
          }
          if(AST_ENCUESTA[i].TIPO_MOVILIDAD == "N")
          {
            this.forma.patchValue({b4_nuevo: true});
          }
          if(AST_ENCUESTA[i].TIPO_MOVILIDAD == "D")
          {
            this.forma.patchValue({b4_desaparecido: true});
          }
     
          console.log( AST_ENCUESTA[i]);
        }
      }
    })
    
        

  }

  guardar()
  {

     console.log(this.forma.value);

  }
  mostrar_b3(letra)
  {
    this.forma.patchValue({causa_paralizacion: false});
    this.situacion = letra;
    if(this.situacion == "D")
    {
     this.ast_encuesta.get_causa_desaparecido().then((ASE_TCAUSA_DESAPARECIDO: any[]) => { //Obtiene la colección de datos local
   
       this.checkboxes = new Array(ASE_TCAUSA_DESAPARECIDO.length);   
       for(var i = 0; i < ASE_TCAUSA_DESAPARECIDO.length; i++)
       {
     
           this.checkboxes[i] = [[ASE_TCAUSA_DESAPARECIDO[i].DESCRIPCION],[ASE_TCAUSA_DESAPARECIDO[i].CAUSA_DESAPARECIDO]];  
  
       }
       this.lista = this.checkboxes;
     });
    }
    if(this.situacion == "P")
    {
      this.forma.patchValue({b4_paralizado: false});  
      this.forma.patchValue({b4_trabajando: false});  
      this.forma.patchValue({b4_nuevo: false});
      this.forma.patchValue({b4_desaparecido: false});
     this.ast_encuesta.get_causa_paralizacion().then((ASE_TCAUSA_PARALIZACION: any[]) => { //Obtiene la colección de datos local
   
       this.checkboxes = new Array(ASE_TCAUSA_PARALIZACION.length);   
       for(var c = 0; c < ASE_TCAUSA_PARALIZACION.length; c++)
       {
     
           this.checkboxes[c] = [[ASE_TCAUSA_PARALIZACION[c].DESCRIPCION],[ASE_TCAUSA_PARALIZACION[c].CAUSA_DESAPARECIDO]];  
        
       }
       this.lista = this.checkboxes;
     });
    }
  
  }
  valor_checbox_paralizacion(valor)
  {
    this.forma.patchValue({causa_paralizacion: valor});  
    this.forma.patchValue({causa_desaparecido: ""});  
  }
  valor_checbox_desaparecido(valor)
  {
    this.forma.patchValue({causa_desaparecido: valor});  
    this.forma.patchValue({causa_paralizacion: ""});  
  }
    
}
