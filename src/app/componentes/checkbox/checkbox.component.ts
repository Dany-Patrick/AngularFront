import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

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
