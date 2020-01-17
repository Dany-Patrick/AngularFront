import { Component, OnInit , Input, ViewChild, Injectable, Output} from '@angular/core';
import { EventEmitter } from 'protractor';


@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.html',
  styleUrls: ['./spinner.css']
})
export class Spinner implements OnInit {
    
  @Input() mensaje = 'Loading...';
  @Input() display : boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  mostrarSpinner(mostrar : boolean){  
    this.display = mostrar;
  }

}
