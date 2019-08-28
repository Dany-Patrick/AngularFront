import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'subtitulo',
  templateUrl: './subtitulo.component.html',
  styleUrls: ['./subtitulo.component.css']
})
export class SubtituloComponent implements OnInit {

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
