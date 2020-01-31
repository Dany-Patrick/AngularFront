import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Metodos_service } from 'src/app/index_db/metodos/metodos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario-i',
  templateUrl: './formulario-i.component.html',
  styleUrls: ['./formulario-i.component.css']
})
export class FormularioIComponent implements OnInit {
  forma:FormGroup;
  id_encuesta: any;
  lista:any = [];
  lista_2:any = [];
  constructor(private ast_encuesta: Metodos_service,private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    this.id_encuesta = this.rutaActiva.snapshot.params.id_encuesta;
    this.forma = new FormGroup({
      "iso9001": new FormControl(),
      "iso14001": new FormControl(),
      "certffor": new FormControl(),
      "fsc": new FormControl(),
      "adpl": new FormControl(),
      "ohsas": new FormControl(),

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
