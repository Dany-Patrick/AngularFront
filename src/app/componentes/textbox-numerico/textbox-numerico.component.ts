import { Component, OnInit, Input , Output, EventEmitter ,forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'textbox-numerico',
  templateUrl: './textbox-numerico.component.html',
  styleUrls: ['./textbox-numerico.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextboxNumericoComponent),
      multi: true
    }
  ]
})
export class TextboxNumericoComponent implements OnInit , ControlValueAccessor{
  nombre: string;

  id: string;

  required: boolean;
  ocultar: boolean;
  form_c: boolean;




  @Input() titulo: string;
  @Input() label_ancho: any;
  @Input() input_ancho: any;
  @Input() clase_input: string;
  @Input() clase_label: string;
  @Input("value")   valor: any;

  constructor() { }

  ngOnInit() {
    if (this.titulo == "") {
      this.ocultar = true;
    }
    if (this.clase_input == "form_input_c") {
      this.form_c = true;
    }
  }


  // Both onChange and onTouched are functions
  onChange: any = () => { };
  onTouched: any = () => { };

  get value() {
    return this.valor;
  }

  set value(val) {
    this.valor = val;
    this.onChange(val);
    this.onTouched();
  }
  // We implement this method to keep a reference to the onChange
  // callback function passed by the forms API
  registerOnChange(fn) {
    this.onChange = fn;
  }
  // We implement this method to keep a reference to the onTouched
  //callback function passed by the forms API
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  // This is a basic setter that the forms API is going to use
  writeValue(value) {
    if (value) {
      this.value = value;
    }
  }etDisabledState?(isDisabled: boolean): void;

}
