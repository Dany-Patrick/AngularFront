import { Component, Input} from '@angular/core';
import { ComponenteValidableComponent } from '../ComponenteValidable.component';

@Component({
  selector: 'app-textbox-input',
  templateUrl: './textbox-input.component.html',
  styleUrls: ['./textbox-input.component.css'],
  providers: [{ provide: ComponenteValidableComponent, useExisting: TextboxInputComponent }]  //Esto debe agregarse en otros componentes que crees y que requieran validación
})
export class TextboxInputComponent extends ComponenteValidableComponent {//Esto debe agregarse en otros componentes que crees y que requieran validación 
    
  @Input() tipo: TiposTextBox = TiposTextBox.Texto;
  @Input() public tieneTitulo: boolean=false;
  constructor() { super(); }

  getTipo(): string {
    return TiposTextBox[this.tipo];
  }

  //Validadores
  private rango(i: number, f: number): boolean {
    let v = parseFloat(this.value);
    return this.validador(v != undefined && v != NaN && v > i && v < f, `El valor de estar entre ${i} y ${f}`);
  }

  //this.validador es la funcion que debe retornar todos los otros validadores, como minimo debe ir otro que valide según el tipo de dato parametrizado
  //por ejemplo (borralos despúes)
  private validaSiDiceHola() {
    if (this.value == "hola") {
      return this.validador(true, "Si dice hola!!!")
    }
    else {
      return this.validador(false, "No dice hola :(")
    }
  }

  private validaSiDiceHolaCorto() {
    return this.validador(this.value == "hola", "No dice hola :(")
  }
}

enum TiposTextBox {
  Entero ="number",
  Decimal = "number",
  Porcentaje = "number",
  Fecha ="date",
  Telefono = "tel",
  Correo = "email",
  Texto = "text"
}
