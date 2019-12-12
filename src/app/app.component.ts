import { Component } from '@angular/core';
import { Metodos_service } from './index_db/metodos/metodos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularProyectFront';
  constructor(private ast_encuesta: Metodos_service) { }

  ngOnInit() {

    this.ast_encuesta.crear_tablas();
    this.ast_encuesta.crear_tabla_pef_tregion();
    this.ast_encuesta.crear_tabla_pef_tprovincia();
    this.ast_encuesta.crear_tabla_pef_tcomuna();
    this.ast_encuesta.crear_tabla_pef_tcargos();
    this.ast_encuesta.crear_tabla_ast_encuestador();
  }
 
}
