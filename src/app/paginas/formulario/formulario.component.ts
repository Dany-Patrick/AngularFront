import { Component, OnInit, ContentChildren, QueryList} from '@angular/core';
import { ComponenteValidableComponent } from 'src/app/componentes/ComponenteValidable.component';


@Component({
  selector: 'app-formulario',
  template: '<ng-content #contenido></ng-content>'
})
export class FormularioComponent {

  @ContentChildren(ComponenteValidableComponent) todoComponents: QueryList<ComponenteValidableComponent>;

  constructor() { }

  isValid(): boolean {

    let valido = true;
    for (let c of this.todoComponents.toArray()) {
      if (!c.isValid()) {
        valido = false;
      }
    }
    return valido;
  }
}





