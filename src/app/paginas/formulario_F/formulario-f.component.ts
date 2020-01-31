import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Metodos_service } from 'src/app/index_db/metodos/metodos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario-f',
  templateUrl: './formulario-f.component.html',
  styleUrls: ['./formulario-f.component.css']
})
export class FormularioFComponent implements OnInit {


  forma:FormGroup;
  id_encuesta: any;
  lista:any = [];
  lista_2:any = [];

  constructor(private ast_encuesta: Metodos_service,private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    this.forma = new FormGroup({
      "a_tipo_moneda": new FormControl(),
      "a_maquinaria": new FormControl(),
      "a_instalaciones": new FormControl(),
      "a_total": new FormControl(),
      "b_tipo_moneda": new FormControl(),
      "b_maquinaria": new FormControl(),
      "b_instalaciones": new FormControl(),
      "b_total": new FormControl()

      
    });
  }
  guardar()
{

  
  if(this.forma.valid)
  {
    console.log(this.forma.value);
  }
}

}
