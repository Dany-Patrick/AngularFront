import { Component, OnInit, Output, EventEmitter}   from '@angular/core';
import { FormControl , FormGroup, ReactiveFormsModule, FormBuilder, Validators, NgForm} from '@angular/forms';

@Component({
  selector: 'app-formulario-c',
  templateUrl: './formulario-c.component.html',
  styleUrls: ['./formulario-c.component.css']
})
export class FormularioCComponent implements OnInit {
  forma:FormGroup;
  constructor() {


      this.forma = new FormGroup({
      })


   }


  ngOnInit() {

  }

  guardar()
  {

     console.log(this.forma.value);

  }

}
