import { Component, OnInit ,Input} from '@angular/core';
import { ItemService } from 'src/app/paginas/lista_de_formularios/item_formulario/item-service.service';

@Component({
  selector: 'menu-footer',
  templateUrl: './menu-footer.component.html',
  styleUrls: ['./menu-footer.component.css']
})
export class MenuFooterComponent implements OnInit {
 data: Object[];
  clase_td:string;
  formulario:string;
  constructor(private apiService: ItemService) { }

 
  ngOnInit() {
    this.getData();

    this.getVerFormularioActual();
  }

  getData() {
    this.apiService.getData().subscribe(((data: any[]) => {this.data = JSON.parse(JSON.stringify(data));}));
    

  
    }
    getVerFormularioActual()
    {
        //obtiene la ruta actual para validar que formulario vemos
      var str = window.location.hash;
      var splitted = str.split("_", 2); 
      this.formulario = splitted[1];

    }
}
