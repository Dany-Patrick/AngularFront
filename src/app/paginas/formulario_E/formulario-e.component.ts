import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Metodos_service } from 'src/app/index_db/metodos/metodos.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario-e',
  templateUrl: './formulario-e.component.html',
  styleUrls: ['./formulario-e.component.css']
})
export class FormularioEComponent implements OnInit {
  opcion_a:string = "permanente";
  opcion_b:string = "permanente";
  permanente_a:string  = "activo";
  temporal_a:string ;
  permanente_b:string  = "activo";
  temporal_b:string ;
  forma:FormGroup;
  id_encuesta: any;
  lista:any = [];
  lista_2:any = [];
  boton_1_activo = "inline-block";
  boton_2_activo = "";
  boton_3_activo = "inline-block";
  boton_4_activo = "";

  constructor(private ast_encuesta: Metodos_service,private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    this.forma = new FormGroup({
  
      
    });

    if (screen.width < 864) {
      this.opcion_a = "permanente";
      this.opcion_b = "permanente";
    }
    this.id_encuesta = this.rutaActiva.snapshot.params.id_encuesta;
    //Función que se va a ejecutar al iniciar el componente principal
    this.ast_encuesta.get_tipo_especializacion().then((AST_TIPO_TESPECIALIZACION: any[]) => { //Obtiene la colección de datos local
      this.lista = new Array(AST_TIPO_TESPECIALIZACION.length); //Variable de interpolación con el html
      for(var i = 0; i < AST_TIPO_TESPECIALIZACION.length; i++)
      {
     
        
          this.lista[i] = [[AST_TIPO_TESPECIALIZACION[i].DESCRIPCION],[AST_TIPO_TESPECIALIZACION[i].ESPECIALIZACION]];
      
      }
      this.lista.sort();
      for(var d = 0; d < this.lista.length; d++)
      {
        this.forma.addControl("a_p_hombres_"+d, new FormControl(''));
        this.forma.addControl("a_p_mujeres_"+d, new FormControl(''));
        this.forma.addControl("a_t_hombres_"+d, new FormControl(''));
        this.forma.addControl("a_t_mujeres_"+d, new FormControl(''));
        this.forma.addControl("a_t_meses_"+d, new FormControl(''));
        this.forma.addControl("b_p_hombres_"+d, new FormControl(''));
        this.forma.addControl("b_p_mujeres_"+d, new FormControl(''));
        this.forma.addControl("b_t_hombres_"+d, new FormControl(''));
        this.forma.addControl("b_t_mujeres_"+d, new FormControl(''));
        this.forma.addControl("b_t_meses_"+d, new FormControl(''));
      }
 
    });


  }
 

  cambiarFormulario_a(opcion)
  {  
    
    if (screen.width < 864) {
      if (opcion == "permanente") {
        this.boton_1_activo = "inline-block";
        this.boton_2_activo = "";
    
      } else if (opcion == "temporal") {
        this.boton_1_activo = "";
        this.boton_2_activo = "inline-block";
  
      }
    }
      if(opcion == "permanente")
      {
        this.permanente_a = "activo";
        this.temporal_a =  "";
      }else if(opcion == "temporal")
      {
        this.temporal_a =  "activo";
        this.permanente_a = "";
      }
    }
  


  cambiarFormulario_b(opcion)
  { 
    if (screen.width < 864) {
      if (opcion == "permanente") {
        this.boton_3_activo = "inline-block";
        this.boton_4_activo = "";
    
      } else if (opcion == "temporal") {
        this.boton_3_activo = "";
        this.boton_4_activo = "inline-block";
  
      }
    }
      if(opcion == "permanente")
      {
        this.permanente_b = "activo";
        this.temporal_b =  "";
      }else if(opcion == "temporal")
      {
        this.temporal_b =  "activo";
        this.permanente_b = "";
      }
    
}
guardar()
{

  
  if(this.forma.valid)
  {
    console.log(this.forma.value);
  }
}
}
