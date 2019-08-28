import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']

})
export class RowComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
