import { Component, OnInit, Input, Output, EventEmitter, forwardRef, OnDestroy,ViewChild, ElementRef  } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { ComponenteValidableComponent } from '../ComponenteValidable.component';

@Component({
  selector: 'lista-desplegable2',
  templateUrl: './textbox-lista-desplegable2.component.html',
  styleUrls: ['./textbox-lista-desplegable2.component.css'],
  providers: [{ provide: ComponenteValidableComponent, useExisting: TextboxListaDesplegable2Component }]
})
export class TextboxListaDesplegable2Component extends ComponenteValidableComponent  {

  @Input() identificador: string;
  @Input() texto: string;
  @Input() public tieneTitulo: boolean=false;

  constructor() { super();}
  _lista: Array<Object> = null;

  @Input()
  set lista(l: Array<Object>) {
    if (this._lista != null) {
      let self = this;
      setTimeout(function () { self.existe();}, 10);
    }
    this._lista = l;
  }

  existe():void {
    if (this._lista != null && !this._lista.some(a => a[this.identificador] == this._valor)) {
      this.value = "";
    }
  }

  get lista() {
    return this._lista;
  }
}