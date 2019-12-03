import { Component, OnInit ,Input} from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'menu-footer',
  templateUrl: './menu-footer.component.html',
  styleUrls: ['./menu-footer.component.css']
})
export class MenuFooterComponent implements OnInit {
 data: Object[];
  clase_td:string;
  formulario:string;
  id_encuesta: number;
  constructor(private apiService: ApiService,private rutaActiva: ActivatedRoute) { }

 
  ngOnInit() {
    this.getData();

  }

  getData() {
    this.apiService.getData().subscribe(((data: any[]) => {this.data = JSON.parse(JSON.stringify(data));}));
    this.id_encuesta = this.rutaActiva.snapshot.params.id_encuesta;
    }

}
