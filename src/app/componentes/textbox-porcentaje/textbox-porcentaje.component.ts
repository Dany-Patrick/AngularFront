import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textbox-porcentaje',
  templateUrl: './textbox-porcentaje.component.html',
  styleUrls: ['./textbox-porcentaje.component.css']
})
export class TextboxPorcentajeComponent implements OnInit {
  name: string;
  value:any;
  id:string;
  clase:string;
  required:boolean;
  constructor() { }

  ngOnInit() {
  }

}
