import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../servicios/api.service';
@Component({
  selector: 'app-row-list',
  templateUrl: './row-list.component.html',
  styleUrls: ['./row-list.component.css']
})

export class RowListComponent implements OnInit {
  data: Object[];
  orderId:any;
  id_encuesta : number;
  constructor( private httpClient:HttpClient, private router: Router ,private apiService: ApiService,private rutaActiva: ActivatedRoute) {  }

  ngOnInit() {
    this.getData();

 
  }

  getData() {
    this.apiService.getData().subscribe(((data: any[]) => {this.data = JSON.parse(JSON.stringify(data));}));
    this.id_encuesta = this.rutaActiva.snapshot.params.id_encuesta;
    }

  }