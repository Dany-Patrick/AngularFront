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
    this.ast_encuesta.crear_tabla_ase_desaparecido();
    this.ast_encuesta.crear_tabla_ase_paralizacion();
    this.ast_encuesta.crear_tabla_ast_seccion();
    this.ast_encuesta.crear_tabla_pef_tespecie();
    this.ast_encuesta.crear_tabla_ast_tunidad();
    this.ast_encuesta.crear_tabla_ast_tplaza();
    this.ast_encuesta.crear_tabla_ast_tdestino_produccion();
    this.ast_encuesta.crear_tabla_ast_tabastecimiento();
    this.ast_encuesta.crear_tabla_ast_tespecializacion();
    this.ast_encuesta.crear_tabla_ast_tmaquinaria();
    this.ast_encuesta.crear_tabla_ast_tmoneda();
    this.ast_encuesta.crear_tabla_ast_tresiduo();
  }
 
}
