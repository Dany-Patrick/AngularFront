import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Metodos_service } from 'src/app/index_db/metodos/metodos.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario-g',
  templateUrl: './formulario-g.component.html',
  styleUrls: ['./formulario-g.component.css']
})
export class FormularioGComponent implements OnInit {
  forma:FormGroup;
  id_encuesta: any;
  lista:any = [];
  lista_2:any = [];
  constructor(private ast_encuesta: Metodos_service,private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    this.forma = new FormGroup({
      "pino_radiata_cc_mr": new FormControl(),
      "pino_radiata_cc_bmdt": new FormControl(),
      "pino_radiata_cc_mestreo": new FormControl(),
      "pino_radiata_cc_gmt": new FormControl(),
      "pino_radiata_sc_mr": new FormControl(),
      "pino_radiata_sc_bmdt": new FormControl(),
      "pino_radiata_sc_mestreo": new FormControl(),
      "pino_radiata_sc_gmt": new FormControl(),
      "eucalyptus_globulus_cc_mr": new FormControl(),
      "eucalyptus_globulus_cc_bmdt": new FormControl(),
      "eucalyptus_globulus_cc_mestreo": new FormControl(),
      "eucalyptus_globulus_cc_gmt": new FormControl(),
      "eucalyptus_globulus_sc_mr": new FormControl(),
      "eucalyptus_globulus_sc_bmdt": new FormControl(),
      "eucalyptus_globulus_sc_mestreo": new FormControl(),
      "eucalyptus_globulus_sc_gmt": new FormControl(),
      "eucalyptus_nitens_cc_mr": new FormControl(),
      "eucalyptus_nitens_cc_bmdt": new FormControl(),
      "eucalyptus_nitens_cc_mestreo": new FormControl(),
      "eucalyptus_nitens_cc_gmt": new FormControl(),
      "eucalyptus_nitens_sc_mr": new FormControl(),
      "eucalyptus_nitens_sc_bmdt": new FormControl(),
      "eucalyptus_nitens_sc_mestreo": new FormControl(),
      "eucalyptus_nitens_sc_gmt": new FormControl(),
      "otras_exoticas_mr": new FormControl(),
      "otras_exoticas_bmdt": new FormControl(),
      "otras_exoticas_mestreo": new FormControl(),
      "otras_exoticas_gmt": new FormControl(),
      
    });
    this.id_encuesta = this.rutaActiva.snapshot.params.id_encuesta;
    //Función que se va a ejecutar al iniciar el componente principal
    this.ast_encuesta.get_maquinaria().then((AST_TMAQUINARIA: any[]) => { //Obtiene la colección de datos local
      this.lista = new Array(AST_TMAQUINARIA.length); //Variable de interpolación con el html
      for(var i = 0; i < AST_TMAQUINARIA.length; i++)
      {
     
        
          this.lista[i] = [[AST_TMAQUINARIA[i].DESCRIPCION],[AST_TMAQUINARIA[i].TIPO_MAQUINA]];

          this.forma.addControl(AST_TMAQUINARIA[i].TIPO_MAQUINA+"_"+i, new FormControl(''));


      }
      this.lista.sort(function(a, b){return b-a});
     
    });
   

  }

  guardar()
  {
  
    
    if(this.forma.valid)
    {
      console.log(this.forma.value);
    }
  }

}
