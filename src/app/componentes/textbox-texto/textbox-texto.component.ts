import { Component, OnInit, Input , Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'textbox',
  templateUrl: './textbox-texto.component.html',
  styleUrls: ['./textbox-texto.component.css']
})
export class TextboxTextoComponent implements OnInit {

  valor:any;
  id:string;

  required:boolean;
  ocultar:boolean;


  @Input() titulo:string;
  @Input() label_ancho:any;
  @Input() input_ancho:any;
  @Input() clase_input:string;
  @Input() clase_label:string;
  @Input()  nombre: string;

 
  constructor() { }

  ngOnInit() {


    if(this.titulo == "")
    {
      this.ocultar = true ;
    }
  }

}
