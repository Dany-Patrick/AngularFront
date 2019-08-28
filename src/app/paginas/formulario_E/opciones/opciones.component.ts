import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'opciones',
  templateUrl: './opciones.component.html',
  styleUrls: ['./opciones.component.css']
})
export class OpcionesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  opcion:string = "permanente";
  permanente:string  = "activo";
  temporal:string ;
  cambiarFormulario(opcion)
  {
    this.opcion = opcion;
      if(opcion == "permanente")
      {
        this.permanente = "activo";
        this.temporal =  "";
      }else if(opcion == "temporal")
      {
        this.temporal =  "activo";
        this.permanente = "";
      }
  }
}
