import { Component, OnInit, Input } from '@angular/core';
import { FormControl , FormGroup, ReactiveFormsModule, FormBuilder, Validators, NgForm, NgControl} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Ast_Encuesta_Service } from 'src/app/index_db/metodos/ast_encuesta.service';
@Component({
  selector: 'app-formulario-b',
  templateUrl: './formulario-b.component.html',
  styleUrls: ['./formulario-b.component.css']
})
export class FormularioBComponent implements OnInit {
  forma:FormGroup;
  AST_ENCUESTA_List: any;
  id_encuesta: any;


  constructor(private ast_encuesta: Ast_Encuesta_Service,private rutaActiva: ActivatedRoute ) { }
 
  ngOnInit() {

    this.forma = new FormGroup({
      "movil": new FormControl(false, Validators.required),
      "permanente": new FormControl(false, Validators.required,),
      "paralizado": new FormControl(false, Validators.required),
      "trabajando": new FormControl(false),
      "nuevo": new FormControl(false, Validators.required),
      "desaparecido": new FormControl(false, Validators.required),
      "falta_capital_de_trabajo": new FormControl(false, Validators.required),
      "falta_mercado": new FormControl(false, Validators.required),
      "falta_abastecimiento": new FormControl(false, Validators.required),
      "cambio_giro": new FormControl(false),
      "fuerza_mayor": new FormControl(false, Validators.required),
      "legales_y_de_gestión": new FormControl(false, Validators.required)
 
    });
    

  }

  guardar()
  {

     console.log(this.forma.value);

  }

    
}
