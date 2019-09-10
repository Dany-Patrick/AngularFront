import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-d',
  templateUrl: './formulario-d.component.html',
  styleUrls: ['./formulario-d.component.css']
})
export class FormularioDComponent implements OnInit {





  consumo_activo:string  = "activo";
  origen_activo:string ;
  regiones_activo:string ;
  consumo_activo_2:string  = "activo";
  origen_activo_2:string ;
  regiones_activo_2:string ;

  boton_1_activo= "inline-block";
  boton_2_activo= "";
  boton_3_activo= "";
  boton_5_activo= "inline-block";
  boton_6_activo= "";
  boton_7_activo= "";
  constructor() { }

  ngOnInit() {
    if(screen.width < 850)
    {
      this.boton_1_activo= "inline-block";
      this.boton_5_activo= "inline-block";
    }
  }

  
  cambiarFormulario(opcion)
  {
    this.activarBoton(opcion);
    if(screen.width < 850)
    {
      if(opcion == "consumo")
      {
        this.boton_1_activo= "inline-block";
        this.boton_2_activo= "";
        this.boton_3_activo= "";
      }else if(opcion == "origen")
      {
        this.boton_1_activo= "";
        this.boton_2_activo= "inline-block";
        this.boton_3_activo= "";
      }
      else if(opcion == "regiones")
      {
        this.boton_1_activo= "";
        this.boton_2_activo= "";
        this.boton_3_activo= "inline-block";
    
      }
    }
     
  }
  cambiarFormulario_2(opcion)
  {
    this.activarBoton_2(opcion);
    if(screen.width < 850)
    {
      if(opcion == "consumo")
      {
        this.boton_5_activo= "inline-block";
        this.boton_6_activo= "";
        this.boton_7_activo= "";
      }else if(opcion == "origen")
      {
        this.boton_5_activo= "";
        this.boton_6_activo= "inline-block";
        this.boton_7_activo= "";
      }
      else if(opcion == "regiones")
      {
        this.boton_5_activo= "";
        this.boton_6_activo= "";
        this.boton_7_activo= "inline-block";
    
      }
    }
     
  }
  activarBoton(opcion)
  {

      if(opcion == "consumo")
      {
        this.consumo_activo = "activo";
        this.origen_activo =  "";
        this.regiones_activo =  "";
      }else if(opcion == "origen")
      {
        this.consumo_activo =  "";
        this.origen_activo = "activo";
        this.regiones_activo =  "";
      }else if(opcion == "regiones")
      {
        this.consumo_activo =  "";
        this.origen_activo = "";
        this.regiones_activo =  "activo";
      }
  }
  activarBoton_2(opcion)
  {

      if(opcion == "consumo")
      {
        this.consumo_activo_2 = "activo";
        this.origen_activo_2 =  "";
        this.regiones_activo_2 =  "";
      }else if(opcion == "origen")
      {
        this.consumo_activo_2 =  "";
        this.origen_activo_2= "activo";
        this.regiones_activo_2 =  "";
      }else if(opcion == "regiones")
      {
        this.consumo_activo_2 =  "";
        this.origen_activo_2 = "";
        this.regiones_activo_2 =  "activo";
      }
  }
}
