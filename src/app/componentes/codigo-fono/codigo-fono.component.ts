import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'codigo-fono',
  templateUrl: './codigo-fono.component.html',
  styleUrls: ['./codigo-fono.component.css']
})
export class CodigoFonoComponent implements OnInit {
  nombre: string;
  valor:any;
  id:string;

  required:boolean;
  ocultar:boolean;


  
 

  @Input() titulo:string;
  @Input() label_ancho:any;
  @Input() input_ancho:any;
  @Input()   clase_input:string;
  @Input()   clase_label:string;
 
  constructor() { }

  ngOnInit() {
    if(this.titulo == "")
    {
      this.ocultar = true ;
    }
  }

}
