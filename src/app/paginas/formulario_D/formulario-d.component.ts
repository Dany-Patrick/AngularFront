import { Component, OnInit, Output, EventEmitter, Input}   from '@angular/core';
import { FormControl , FormGroup, ReactiveFormsModule, FormBuilder, Validators, NgForm} from '@angular/forms';
import { Metodos_service } from 'src/app/index_db/metodos/metodos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario-d',
  templateUrl: './formulario-d.component.html',
  styleUrls: ['./formulario-d.component.css']
})
export class FormularioDComponent implements OnInit {

  forma:FormGroup;
  consumo_activo: string = "activo";
  origen_activo: string;
  regiones_activo: string;
  consumo_activo_2: string = "activo";
  origen_activo_2: string;
  regiones_activo_2: string;
  id_encuesta: any;
  AST_ENCUESTA_List: any;
  boton_1_activo = "inline-block";
  boton_2_activo = "";
  boton_3_activo = "";
  boton_5_activo = "inline-block";
  boton_6_activo = "";
  boton_7_activo = "";
  situacion:any;
  todos : any;
  lista:any = [];
  lista_2:any = [];
  especies:any = [];
  lista_productos_sc:any = [];
  lista_productos_cc:any = [];
  contador2:any = 0;
  contador3:any = 0;
  contador4:any = 0;
  control_1:any;
  control_2:any;
  constructor(private ast_encuesta: Metodos_service,private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    this.forma = new FormGroup({
  
      
    });

    this.ast_encuesta.get_especies().then((PEF_TESPECIE: any[]) => { //Obtiene la colección de datos local de las especies
    
      this.especies = new Array(PEF_TESPECIE.length);
  
        for(var i = 0; i < PEF_TESPECIE.length; i++)
        {
          this.especies[i] = [[PEF_TESPECIE[i].NOMBRE],[PEF_TESPECIE[i].ESPECIE]];
        }
    
        this.especies.sort();
      });

    this.id_encuesta = this.rutaActiva.snapshot.params.id_encuesta;
    //Función que se va a ejecutar al iniciar el componente principal
    this.ast_encuesta.getAll().then((AST_ENCUESTA: any[]) => { //Obtiene la colección de datos local
      this.AST_ENCUESTA_List = AST_ENCUESTA; //Variable de interpolación con el html
   
      for(var i = 0; i < AST_ENCUESTA.length; i++)
      {
        if(AST_ENCUESTA[i].ID_ENCUESTA == this.id_encuesta)
        {
          console.log(AST_ENCUESTA[i]);
          for(var a = 0; a < AST_ENCUESTA[i].AST_ENCUESTA_PRODUCCION_ESPECIE_2.length ; a++)
          {
       
          if(AST_ENCUESTA[i].AST_ENCUESTA_PRODUCCION_ESPECIE_2[a].PRODUCTO == "2530010" || AST_ENCUESTA[i].AST_ENCUESTA_PRODUCCION_ESPECIE_2[a].PRODUCTO == "2530012")
          {
            
        for(var c = 0; c < this.especies.length; c++)
        {
          
          if(this.especies[c][1] == AST_ENCUESTA[i].AST_ENCUESTA_PRODUCCION_ESPECIE_2[a].ESPECIE)
          {
            this.lista_productos_sc.push([AST_ENCUESTA[i].AST_ENCUESTA_PRODUCCION_ESPECIE_2[a].PRODUCTO,
              AST_ENCUESTA[i].AST_ENCUESTA_PRODUCCION_ESPECIE_2[a].ESPECIE,
              AST_ENCUESTA[i].AST_ENCUESTA_PRODUCCION_ESPECIE_2[a].PORCENTAJE,
              AST_ENCUESTA[i].AST_ENCUESTA_PRODUCCION_ESPECIE_2[a].PRODUCCION_M3,
              this.especies[c][0].toString()]
              );
          }
         
        }
    
       
            console.log( this.lista_productos_sc);
          }
          if( AST_ENCUESTA[i].AST_ENCUESTA_PRODUCCION_ESPECIE_2[a].PRODUCTO == "2530011")
          {
            for(var c = 0; c < this.especies.length; c++)
            {
              
              if(this.especies[c][1] == AST_ENCUESTA[i].AST_ENCUESTA_PRODUCCION_ESPECIE_2[a].ESPECIE)
              {
                this.lista_productos_cc.push([AST_ENCUESTA[i].AST_ENCUESTA_PRODUCCION_ESPECIE_2[a].PRODUCTO,
                  AST_ENCUESTA[i].AST_ENCUESTA_PRODUCCION_ESPECIE_2[a].ESPECIE,
                  AST_ENCUESTA[i].AST_ENCUESTA_PRODUCCION_ESPECIE_2[a].PORCENTAJE,
                  AST_ENCUESTA[i].AST_ENCUESTA_PRODUCCION_ESPECIE_2[a].PRODUCCION_M3,
                  this.especies[c][0].toString()]
                  );
              }
             
            }
          
            console.log( this.lista_productos_cc);
            
          }
        }
  }
}


});

   
  


    this.id_encuesta = this.rutaActiva.snapshot.params.id_encuesta;
    //Función que se va a ejecutar al iniciar el componente principal
    this.ast_encuesta.get_abastecimiento().then((AST_TABASTECIMIENTO: any[]) => { //Obtiene la colección de datos local
      this.lista = new Array(AST_TABASTECIMIENTO.length); //Variable de interpolación con el html
      for(var i = 0; i < AST_TABASTECIMIENTO.length; i++)
      {
     
        
          this.lista[i] = [[AST_TABASTECIMIENTO[i].DESCRIPCION],[AST_TABASTECIMIENTO[i].PRODUCTO]];
      
      }
      this.lista.sort();
      for(var d = 0; d < this.lista_productos_sc.length; d++)
{
  for(var a = 0; a < this.lista.length; a++)
  {
  this.forma.addControl("a_"+this.lista_productos_sc[d][1]+"_"+this.lista[a][1]+"_consumo_porcentaje_"+a, new FormControl(''));
  this.forma.addControl("a_"+this.lista_productos_sc[d][1]+"_"+this.lista[a][1]+"_consumo_"+a, new FormControl(''));
  this.forma.addControl("a_"+this.lista_productos_sc[d][1]+"_"+this.lista[a][1]+"_unidad_"+a, new FormControl(''));
  this.forma.addControl("a_"+this.lista_productos_sc[d][1]+"_"+this.lista[a][1]+"_total_"+a, new FormControl(''));
  this.forma.addControl("a_"+this.lista_productos_sc[d][1]+"_"+this.lista[a][1]+"_precio_"+a, new FormControl(''));
  this.forma.addControl("a_"+this.lista_productos_sc[d][1]+"_"+this.lista[a][1]+"_terceros_"+a, new FormControl(''));
  this.forma.addControl("a_"+this.lista_productos_sc[d][1]+"_"+this.lista[a][1]+"_region_iv_"+a, new FormControl(''));
  this.forma.addControl("a_"+this.lista_productos_sc[d][1]+"_"+this.lista[a][1]+"_region_vi_"+a, new FormControl(''));
  this.forma.addControl("a_"+this.lista_productos_sc[d][1]+"_"+this.lista[a][1]+"_region_viii_"+a, new FormControl(''));
  this.forma.addControl("a_"+this.lista_productos_sc[d][1]+"_"+this.lista[a][1]+"_region_ix_"+a, new FormControl(''));
  this.forma.addControl("a_"+this.lista_productos_sc[d][1]+"_"+this.lista[a][1]+"_region_x_"+a, new FormControl(''));
  this.forma.addControl("a_"+this.lista_productos_sc[d][1]+"_"+this.lista[a][1]+"_region_xi_"+a, new FormControl(''));
  this.forma.addControl("a_"+this.lista_productos_sc[d][1]+"_"+this.lista[a][1]+"_region_xii_"+a, new FormControl(''));
  this.forma.addControl("a_"+this.lista_productos_sc[d][1]+"_"+this.lista[a][1]+"_region_rm_"+a, new FormControl(''));
  this.forma.addControl("a_"+this.lista_productos_sc[d][1]+"_"+this.lista[a][1]+"_region_xiv_"+a, new FormControl(''));
  this.forma.addControl("a_"+this.lista_productos_sc[d][1]+"_"+this.lista[a][1]+"_region_total_"+a, new FormControl(''));
  }
  this.forma.addControl("a_"+this.lista_productos_sc[d][1]+"_total", new FormControl(''));
}
for(var d = 0; d < this.lista_productos_cc.length; d++)
{
  for(var a = 0; a < this.lista.length; a++)
  {
  this.forma.addControl("b_"+this.lista_productos_cc[d][1]+"_"+this.lista[a][1]+"_consumo_porcentaje_"+a, new FormControl(''));
  this.forma.addControl("b_"+this.lista_productos_cc[d][1]+"_"+this.lista[a][1]+"_consumo_"+a, new FormControl(''));
  this.forma.addControl("b_"+this.lista_productos_cc[d][1]+"_"+this.lista[a][1]+"_unidad_"+a, new FormControl(''));
  this.forma.addControl("b_"+this.lista_productos_cc[d][1]+"_"+this.lista[a][1]+"_total_"+a, new FormControl(''));
  this.forma.addControl("b_"+this.lista_productos_cc[d][1]+"_"+this.lista[a][1]+"_precio_"+a, new FormControl(''));
  this.forma.addControl("b_"+this.lista_productos_cc[d][1]+"_"+this.lista[a][1]+"_terceros_"+a, new FormControl(''));
  this.forma.addControl("b_"+this.lista_productos_cc[d][1]+"_"+this.lista[a][1]+"_region_iv_"+a, new FormControl(''));
  this.forma.addControl("b_"+this.lista_productos_cc[d][1]+"_"+this.lista[a][1]+"_region_vi_"+a, new FormControl(''));
  this.forma.addControl("b_"+this.lista_productos_cc[d][1]+"_"+this.lista[a][1]+"_region_viii_"+a, new FormControl(''));
  this.forma.addControl("b_"+this.lista_productos_cc[d][1]+"_"+this.lista[a][1]+"_region_ix_"+a, new FormControl(''));
  this.forma.addControl("b_"+this.lista_productos_cc[d][1]+"_"+this.lista[a][1]+"_region_x_"+a, new FormControl(''));
  this.forma.addControl("b_"+this.lista_productos_cc[d][1]+"_"+this.lista[a][1]+"_region_xi_"+a, new FormControl(''));
  this.forma.addControl("b_"+this.lista_productos_cc[d][1]+"_"+this.lista[a][1]+"_region_xii_"+a, new FormControl(''));
  this.forma.addControl("b_"+this.lista_productos_cc[d][1]+"_"+this.lista[a][1]+"_region_rm_"+a, new FormControl(''));
  this.forma.addControl("b_"+this.lista_productos_cc[d][1]+"_"+this.lista[a][1]+"_region_xiv_"+a, new FormControl(''));
  this.forma.addControl("b_"+this.lista_productos_cc[d][1]+"_"+this.lista[a][1]+"_region_total_"+a, new FormControl(''));
  }
  this.forma.addControl("b_"+this.lista_productos_cc[d][1]+"_total", new FormControl(''));
}
    });
  
  }


  cambiarFormulario(opcion) {
    this.activarBoton(opcion);
    if (screen.width < 850) {
      if (opcion == "consumo") {
        this.boton_1_activo = "inline-block";
        this.boton_2_activo = "";
        this.boton_3_activo = "";
      } else if (opcion == "origen") {
        this.boton_1_activo = "";
        this.boton_2_activo = "inline-block";
        this.boton_3_activo = "";
      }
      else if (opcion == "regiones") {
        this.boton_1_activo = "";
        this.boton_2_activo = "";
        this.boton_3_activo = "inline-block";

      }
    }

  }
  cambiarFormulario_2(opcion) {
    this.activarBoton_2(opcion);
    if (screen.width < 850) {
      if (opcion == "consumo") {
        this.boton_5_activo = "inline-block";
        this.boton_6_activo = "";
        this.boton_7_activo = "";
      } else if (opcion == "origen") {
        this.boton_5_activo = "";
        this.boton_6_activo = "inline-block";
        this.boton_7_activo = "";
      }
      else if (opcion == "regiones") {
        this.boton_5_activo = "";
        this.boton_6_activo = "";
        this.boton_7_activo = "inline-block";

      }
    }

  }
  activarBoton(opcion) {

    if (opcion == "consumo") {
      this.consumo_activo = "activo";
      this.origen_activo = "";
      this.regiones_activo = "";
    } else if (opcion == "origen") {
      this.consumo_activo = "";
      this.origen_activo = "activo";
      this.regiones_activo = "";
    } else if (opcion == "regiones") {
      this.consumo_activo = "";
      this.origen_activo = "";
      this.regiones_activo = "activo";
    }
  }
  activarBoton_2(opcion) {

    if (opcion == "consumo") {
      this.consumo_activo_2 = "activo";
      this.origen_activo_2 = "";
      this.regiones_activo_2 = "";
    } else if (opcion == "origen") {
      this.consumo_activo_2 = "";
      this.origen_activo_2 = "activo";
      this.regiones_activo_2 = "";
    } else if (opcion == "regiones") {
      this.consumo_activo_2 = "";
      this.origen_activo_2 = "";
      this.regiones_activo_2 = "activo";
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
