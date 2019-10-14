import { Component, OnInit ,Input} from '@angular/core';
import { ItemService } from 'src/app/servicios/item-service.service';

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

  }

  getData() {
    this.apiService.getData().subscribe(((data: any[]) => {this.data = JSON.parse(JSON.stringify(data));}));
    

  
    }

}
