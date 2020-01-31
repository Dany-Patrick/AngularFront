import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Metodos_service } from 'src/app/index_db/metodos/metodos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario-h',
  templateUrl: './formulario-h.component.html',
  styleUrls: ['./formulario-h.component.css']
})
export class FormularioHComponent implements OnInit {
  forma:FormGroup;
  id_encuesta: any;
  AST_ENCUESTA_List: any;
  lista:any = [];
  lista_2:any = [];
  especies:any = [];

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
         
           
              
          for(var c = 0; c < this.especies.length; c++)
          {
          
            if(this.especies[c][1] == AST_ENCUESTA[i].AST_ENCUESTA_PRODUCCION_ESPECIE_2[a].ESPECIE)
            {
              
            

                this.lista.push([AST_ENCUESTA[i].AST_ENCUESTA_PRODUCCION_ESPECIE_2[a].PRODUCTO,
                  AST_ENCUESTA[i].AST_ENCUESTA_PRODUCCION_ESPECIE_2[a].ESPECIE,
                  AST_ENCUESTA[i].AST_ENCUESTA_PRODUCCION_ESPECIE_2[a].PORCENTAJE,
                  AST_ENCUESTA[i].AST_ENCUESTA_PRODUCCION_ESPECIE_2[a].PRODUCCION_M3,
                  this.especies[c][0].toString()]
                  );
          }
              }
                
                   
                  
            }}
            
        
            }
        
    

  
  this.lista.push(["DESTINO","DESTINO","DESTINO","DESTINO","DESTINO",]);

  for(var f = 0; f < this.lista.length; f++)
  {var contador = 0;
    for(var h = 0; h < this.lista.length; h++)
    {

      if(this.lista[f][4] == this.lista[h][4])
      { contador++

       
      } 
           
    }

    if(contador == 2)
    {
      this.lista.splice(f,1);
    
    }


    
    this.forma.addControl(this.lista[f][1]+"_aserrin_"+f, new FormControl(''));
    this.forma.addControl(this.lista[f][1]+"_corteza_"+f, new FormControl(''));
    this.forma.addControl(this.lista[f][1]+"_desclasificacion_"+f, new FormControl(''));
    this.forma.addControl(this.lista[f][1]+"_otros_"+f, new FormControl(''));
    this.forma.addControl(this.lista[f][1]+"_destino_"+f, new FormControl(''));

  
  }
  
  
 

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
