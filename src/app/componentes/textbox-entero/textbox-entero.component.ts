import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textbox-entero',
  templateUrl: './textbox-entero.component.html',
  styleUrls: ['./textbox-entero.component.css']
})
export class TextboxEnteroComponent implements OnInit {
  name: string;
  value:any;
  id:string;
  clase:string;
  required:boolean;
  constructor() { }

  ngOnInit() {
  }

}
