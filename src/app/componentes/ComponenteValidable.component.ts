import {  Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'componente-validable',
  template: '',
  styles: [':host{display:inline-block}']
})
export class ComponenteValidableComponent {
  @Input() public titulo: string;
  @Output() public valueChange = new EventEmitter();
  @Input() public validadores: string="";
  @Input() public simple: boolean=false;
  

  public mensajeError: string = "";

  protected _valor: string = "";
  @Input()
  get value() {
    return this._valor;
  }

  set value(val) {
    if (this._valor != val) {
      this._valor = val;
      this.valueChange.emit(val);
    }
  }

  isValid(): boolean {
    if (this.validadores.length > 0) {
      let validador = this.validadores.split(";");

      for (let v of validador) {
        let r;
        eval("r = this." + v.trim());
        if (r == false) {
          return false;
        }
      }
    }
    return true;
  }
  validador(b: boolean, mensaje: string): boolean {
    if (b) {
      this.mensajeError = "";   
    }
    else {
      this.mensajeError = mensaje;
    }
    return b;
  }

  public addClassError(): boolean {
    return this.mensajeError.length>0
  }

  //validadores comunes
  public requerido(): boolean {
    return this.validador(this.value != null && this.value != undefined && this.value.toString().trim().length>0, "El campo es requerido");
  }
}
