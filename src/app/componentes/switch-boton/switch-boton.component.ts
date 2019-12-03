import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'switch-boton',
  templateUrl: './switch-boton.component.html',
  styleUrls: ['./switch-boton.component.css']
})
export class SwitchBotonComponent implements OnInit {

  nombre: string;
  valor:any;
  id:string;
  clase:string;
  required:boolean;
  ocultar:boolean;


  
 

  @Input() titulo:string;
  @Input() label_ancho:any;
  @Input() input_ancho:any;

 
  constructor() { }

  ngOnInit() {
    if(this.titulo == "")
    {
      this.ocultar = true ;
    }
  }
}
