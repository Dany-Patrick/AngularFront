import { Component, OnInit, Output, EventEmitter}   from '@angular/core';
import { FormControl , FormGroup, ReactiveFormsModule, FormBuilder, Validators, NgForm} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Metodos_service } from 'src/app/index_db/metodos/metodos.service';
@Component({
  selector: 'app-form-a',
  templateUrl: './form-a.component.html',
  styleUrls: ['./form-a.component.css']
})
export class FormAComponent implements OnInit {
  myForm: FormGroup;
  forma:FormGroup;
  AST_ENCUESTA_List: any;
  seleccion_regional: any;
  seleccion_provincia: any;
  codigo_provincia: number;
  id_encuesta: any;
  latitud:  any  = "";
  longitud: any  = "";
  accuracy: any  = "";
  altitude: any  = "";
  utmx: any ;
  utmy: any ;
  huso: any ;
  letter: any ;
  M: any ;
  ZoneNumber: any ;
  a: any ;
  eccSquared: any ;
  status: any  = false;
  datumName: any  = "WGS 84";  //Elipsoide por defecto
  valor_provincia:any ="";
  valor_comuna:any ="";
  valido_1:any;
  valido_2:any;
  valido_3:any;
  valido_4:any;
  valido_5:any;
  valido_6:any;
  valido_7:any;
  valido_8:any;
  valido_9:any;
  valido_10:any;
  valido_11:any;
  valido_12:any;
  valido_13:any;
  valido_14:any;
  valido_15:any;
  valido_16:any;
  valido_17:any;
  valido_18:any;
  valido_19:any;
  valido_20:any;
  valido_21:any;
  valido_22:any;
  valido_23:any;
  valido_24:any;
  valido_25:any;
  valido_26:any;
  valido_27:any;
  valido_28:any;
  valido_29:any;
  valido_30:any;
  valido_31:any;
  valido_32:any;
  valido_33:any;
  valido_34:any;
  valido_35:any;
  valido_36:any;
  valido_37:any;
  valido_38:any;
  valido_39:any;
  valido_40:any;


  constructor(private ast_encuesta: Metodos_service,private rutaActiva: ActivatedRoute) {

    

   }


  ngOnInit() {

    this.forma = new FormGroup({
      "region": new FormControl("", Validators.required),
      "provincia": new FormControl("", Validators.required),
      "comuna": new FormControl("", Validators.required),
      "localidad": new FormControl(""),
      "huso": new FormControl("", Validators.required),
      "zona": new FormControl("", Validators.required),
      "utmx": new FormControl("", Validators.required),
      "utmy": new FormControl("", Validators.required),
      "rut_empresa": new FormControl("", Validators.required),
      "nombre_propietario": new FormControl(""),
      "razon_social": new FormControl("", Validators.required),
      "nombre_planta": new FormControl("", Validators.required),
      "ciudad_planta": new FormControl("", Validators.required),
      "direccion_planta": new FormControl("", Validators.required),
      "codigo_fono_1_planta": new FormControl(""),
      "num_fono_1_planta": new FormControl(""),
      "codigo_fono_2_planta": new FormControl(""),
      "num_fono_2_planta": new FormControl(""),
      "email_planta": new FormControl(""),
      "casilla_planta": new FormControl(""),
      "nombre_gerente": new FormControl("", Validators.required),
      "region_gerencia": new FormControl("", Validators.required),
      "provincia_gerencia": new FormControl("", Validators.required),
      "comuna_gerencia": new FormControl("", Validators.required),
      "direccion_gerencia": new FormControl("", Validators.required),
      "ciudad_gerencia": new FormControl("", Validators.required),
      "casilla_gerencia": new FormControl(""),
      "email_gerencia": new FormControl(""),
      "codigo_fono_1_gerencia": new FormControl(""),
      "num_fono_1_gerencia": new FormControl(""),
      "codigo_fono_2_gerencia": new FormControl(""),
      "num_fono_2_gerencia": new FormControl(""),
      "web": new FormControl(""),
      "nombre_encuestador": new FormControl("", Validators.required),
      "fecha": new FormControl("", Validators.required),
      "nombre_encuestado": new FormControl("", Validators.required),
      "cargo": new FormControl("", Validators.required),
      "email_encuestado": new FormControl(""),
      "codigo_fono_1_encuestado": new FormControl(""),
      "num_fono_1_encuestado": new FormControl(""),
      "switch_boton": new FormControl(false)
      
  })

    this.id_encuesta = this.rutaActiva.snapshot.params.id_encuesta;
//Función que se va a ejecutar al iniciar el componente principal
this.ast_encuesta.getAll().then((AST_ENCUESTA: any[]) => { //Obtiene la colección de datos local
  this.AST_ENCUESTA_List = AST_ENCUESTA; //Variable de interpolación con el html

  for(var i = 0; i < AST_ENCUESTA.length; i++)
  {
    if(AST_ENCUESTA[i].ID_ENCUESTA == this.id_encuesta)
    {
      this.codigo_provincia = AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.AREA1;
  
      this.forma.patchValue({region: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.REGION});
      this.forma.patchValue({provincia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PROVINCIA});
      this.forma.patchValue({comuna: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.COMUNA});
      this.forma.patchValue({localidad: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.LOCALIDAD});
      this.forma.patchValue({huso: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.HUSO});
      this.forma.patchValue({zona: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.ZONA.replace(/\s/g, "")});
      this.forma.patchValue({utmx: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.UTMX});
      this.forma.patchValue({utmy: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.UTMY});
      this.forma.patchValue({rut_empresa: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.RUT_EMPRESA});
      this.forma.patchValue({nombre_propietario: AST_ENCUESTA[i].NOMBRE_PROPIETARIO});
      this.forma.patchValue({razon_social: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.RAZON_SOCIAL});
      this.forma.patchValue({nombre_planta: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.NOMBRE_UNIDAD});
      this.forma.patchValue({ciudad_planta: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.CIUDAD});
      this.forma.patchValue({direccion_planta: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.DIRECCION});
      this.forma.patchValue({codigo_fono_1_planta: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.AREA1});
      this.forma.patchValue({num_fono_1_planta: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.FONO1});
      if( AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.AREA2 != "")
      {
        this.forma.patchValue({codigo_fono_2_planta: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.AREA2});
      }else{
        this.forma.patchValue({codigo_fono_2_planta: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.AREA1});
      }


      this.forma.patchValue({num_fono_2_planta: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.FONO2});
      this.forma.patchValue({email_planta: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.MAIL});
      this.forma.patchValue({casilla_planta: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.CASILLA});
      this.forma.patchValue({nombre_gerente: AST_ENCUESTA[i].NOMBRE_GERENTE});
      this.forma.patchValue({region_gerencia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.REGION      });
      this.forma.patchValue({provincia_gerencia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.PROVINCIA});
      this.forma.patchValue({comuna_gerencia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.COMUNA});
      this.forma.patchValue({direccion_gerencia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.DIRECCION});
      this.forma.patchValue({ciudad_gerencia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.CIUDAD});
      this.forma.patchValue({casilla_gerencia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.COMUNA});
      this.forma.patchValue({codigo_fono_1_gerencia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.AREA1});
      this.forma.patchValue({num_fono_1_gerencia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.FONO1});
      if( AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.AREA2 != "")
      {
        this.forma.patchValue({codigo_fono_2_gerencia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.AREA2});
      }else{
        this.forma.patchValue({codigo_fono_2_gerencia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.AREA1});
      }


      this.forma.patchValue({num_fono_2_gerencia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.FONO2});
      this.forma.patchValue({web: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.WEB});
      this.forma.patchValue({nombre_encuestador: AST_ENCUESTA[i].USUARIO_INGRESO});
      var str = AST_ENCUESTA[i].FECHA_ENCUESTA; 
      var fecha = str.split("T", 2); 

      this.forma.patchValue({fecha: fecha[0]});
      this.forma.patchValue({nombre_encuestado: AST_ENCUESTA[i].NOMBRE_ENCUESTADO      });
      this.forma.patchValue({cargo: AST_ENCUESTA[i].CARGO_ENCUESTADO      });
      this.forma.patchValue({email_encuestado: AST_ENCUESTA[i].EMAIL_ENCUESTADO      });
      this.forma.patchValue({codigo_fono_1_encuestado: AST_ENCUESTA[i].FONO1});
      this.forma.patchValue({num_fono_1_encuestado: AST_ENCUESTA[i].FONO1});
      this.forma.patchValue({email_gerencia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.MAIL});
      this.codigo_provincia = AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.AREA1;
      this.seleccion_regional = this.forma.get('region').value;
      this.seleccion_provincia = this.forma.get('provincia').value;
console.log(AST_ENCUESTA[i]);
    }
  }
})

this.getLocation();

  }

  guardar()
  {

   
   
    this.valido_1 = this.forma.get('region').valid
    this.valido_2 = this.forma.get('provincia').valid
    this.valido_3 = this.forma.get('comuna').valid
    this.valido_4 = this.forma.get('localidad').valid
    this.valido_5 = this.forma.get('huso').valid
    this.valido_6 = this.forma.get('zona').valid
    this.valido_7 = this.forma.get('utmx').valid
    this.valido_8 = this.forma.get('utmy').valid
    this.valido_9 = this.forma.get('rut_empresa').valid
    this.valido_10 = this.forma.get('nombre_propietario').valid
    this.valido_11 = this.forma.get('razon_social').valid
    this.valido_12 = this.forma.get('nombre_planta').valid
    this.valido_13 = this.forma.get('ciudad_planta').valid
    this.valido_14 = this.forma.get('direccion_planta').valid
    this.valido_15 = this.forma.get('codigo_fono_1_planta').valid
    this.valido_16 = this.forma.get('num_fono_1_planta').valid
    this.valido_17 = this.forma.get('codigo_fono_2_planta').valid
    this.valido_18 = this.forma.get('num_fono_2_planta').valid
    this.valido_19 = this.forma.get('email_planta').valid
    this.valido_20 = this.forma.get('casilla_planta').valid
    this.valido_21 = this.forma.get('nombre_gerente').valid
    this.valido_22 = this.forma.get('region_gerencia').valid
    this.valido_23 = this.forma.get('provincia_gerencia').valid
    this.valido_24 = this.forma.get('comuna_gerencia').valid
    this.valido_25 = this.forma.get('direccion_gerencia').valid
    this.valido_26 = this.forma.get('ciudad_gerencia').valid
    this.valido_27 = this.forma.get('casilla_gerencia').valid
    this.valido_28 = this.forma.get('codigo_fono_1_gerencia').valid
    this.valido_29 = this.forma.get('num_fono_1_gerencia').valid
    this.valido_30 = this.forma.get('codigo_fono_2_gerencia').valid
    this.valido_31 = this.forma.get('num_fono_2_gerencia').valid
    this.valido_32= this.forma.get('email_gerencia').valid
    this.valido_33 = this.forma.get('web').valid
    this.valido_34 = this.forma.get('nombre_encuestador').valid
    this.valido_35 = this.forma.get('fecha').valid
    this.valido_36 = this.forma.get('nombre_encuestado').valid
    this.valido_37 = this.forma.get('cargo').valid
    this.valido_38= this.forma.get('email_encuestado').valid
    this.valido_39= this.forma.get('codigo_fono_1_encuestado').valid
    this.valido_40= this.forma.get('num_fono_1_encuestado').valid


      if(this.forma.valid)
      {
 
        console.log(this.forma.value);
      }


  }
         ///trae coordenadas
showPosition(position) {
  this.latitud =  position.coords.latitude ;
  this.longitud =  position.coords.longitude;
  this.accuracy =  position.coords.accuracy; //Precisión
  this.altitude =  position.coords.altitude ;

 }


  getLocation() { //Obtiene las coordenadas GPS
    if (navigator.geolocation) {// Verifica la compatiilidad
          navigator.geolocation.watchPosition((position) => this.showPosition(position));
    } else { 
      this.latitud =  "Geolocation no está soportada por el navegador.";
    }
   }


   convertLatLngToUtm() //Latitud y Longitud decimal a UTM
  {
 
    this.setEllipsoid(this.datumName);// Se establece elipsoide por defecto
   var precision = this.accuracy;
   var latitude = this.latitud;
   var longitude = this.longitud;

      if (this.status)
      {
         alert('No hay un elipsoide establecido: ' + this.datumName);
      }
  
      latitude = parseFloat(latitude);
      longitude = parseFloat(longitude);
  
      var LongTemp = longitude;
      var LatRad = this.toRadians(latitude);
      var LongRad = this.toRadians(LongTemp);
  
      if (LongTemp >= 8 && LongTemp <= 13 && latitude > 54.5 && latitude < 58) {
          this.ZoneNumber = 32;
      } else if (latitude >= 56.0 && latitude < 64.0 && LongTemp >= 3.0 && LongTemp < 12.0) {
        this.ZoneNumber = 32;
      } else {
        this.ZoneNumber = ((LongTemp + 180) / 6) + 1;
  
          if (latitude >= 72.0 && latitude < 84.0) {
              if (LongTemp >= 0.0 && LongTemp < 9.0) {
                this.ZoneNumber = 31;
              } else if (LongTemp >= 9.0 && LongTemp < 21.0) {
                this.ZoneNumber = 33;
              } else if (LongTemp >= 21.0 && LongTemp < 33.0) {
                this.ZoneNumber = 35;
              } else if (LongTemp >= 33.0 && LongTemp < 42.0) {
                this.ZoneNumber = 37;
              }
          }
      }
      this.ZoneNumber = parseInt(this.ZoneNumber);
  
      var LongOrigin = (this.ZoneNumber - 1) * 6 - 180 + 3;  //+3 puts origin in middle of zone
      var LongOriginRad = this.toRadians(LongOrigin);
  
      var UTMZone = this.getUtmLetterDesignator(latitude);
  
      var eccPrimeSquared = (this.eccSquared) / (1 - this.eccSquared);
  
      var N = this.a / Math.sqrt(1 - this.eccSquared * Math.sin(LatRad) * Math.sin(LatRad));
      var T = Math.tan(LatRad) * Math.tan(LatRad);
      var C = eccPrimeSquared * Math.cos(LatRad) * Math.cos(LatRad);
      var A = Math.cos(LatRad) * (LongRad - LongOriginRad);
  
       this.M = this.a * ((1 - this.eccSquared  / 4 - 3 * this.eccSquared  * this.eccSquared / 64 - 5 
          * this.eccSquared * this.eccSquared * this.eccSquared / 256)  * LatRad
          - (3 * this.eccSquared / 8 + 3 * this.eccSquared * this.eccSquared / 32 + 45 * this.eccSquared 
          * this.eccSquared * this.eccSquared / 1024)  * Math.sin(2 * LatRad)
          + (15 * this.eccSquared * this.eccSquared / 256 + 45 * this.eccSquared * this.eccSquared * this.eccSquared / 1024)
          * Math.sin(4 * LatRad)
          - (35 * this.eccSquared * this.eccSquared * this.eccSquared / 3072) * Math.sin(6 * LatRad));
  
      var texto =   0.9996 * N * (A + (1 - T + C) * A * A * A / 6 + (5 - 18 * T + T * T + 72 * C - 58 * eccPrimeSquared)
                     * A * A * A * A * A / 120) + 500000.0  ;

      var UTMEasting = parseFloat(texto.toString());
  
      var texto2 = 0.9996 * (this.M + N * Math.tan(LatRad) * (A * A / 2 + (5 - T + 9 * C + 4 * C * C)
                   * A * A * A * A / 24  + (61 - 58 * T + T * T + 600 * C - 330 * eccPrimeSquared)
                   * A * A * A * A * A * A / 720));

      var UTMNorthing = parseFloat(texto2.toString());
  
      if (latitude < 0)
      {
          UTMNorthing += 10000000.0;

          /*
          Se establecen valores a las variables de interpolación html
          */
      UTMNorthing = this.precisionRound(UTMNorthing,precision);
      UTMEasting = this.precisionRound(UTMEasting,precision);
      this.utmx = UTMEasting;
      this.utmy = UTMNorthing;
      this.huso = parseInt(this.ZoneNumber);
      this.letter = UTMZone;

      }
      
      this.forma.patchValue({huso: this.huso});
      this.forma.patchValue({zona: this.letter});
      this.forma.patchValue({utmx: parseInt(this.utmx, 10)});
      this.forma.patchValue({utmy:  parseInt(this.utmy, 10)});

    
  
  };

   getUtmLetterDesignator  (latitude) { //Obtiene la letra de la zona
      latitude = parseFloat(latitude);
      if ((84 >= latitude) && (latitude >= 72))
          return 'X';
      else if ((72 > latitude) && (latitude >= 64))
          return 'W';
      else if ((64 > latitude) && (latitude >= 56))
          return 'V';   
      else if ((56 > latitude) && (latitude >= 48))
          return 'U';
      else if ((48 > latitude) && (latitude >= 40))
          return 'T';
      else if ((40 > latitude) && (latitude >= 32))
          return 'S';
      else if ((32 > latitude) && (latitude >= 24))
          return 'R';
      else if ((24 > latitude) && (latitude >= 16))
          return 'Q';
      else if ((16 > latitude) && (latitude >= 8))
          return 'P';
      else if ((8 > latitude) && (latitude >= 0))
          return 'N';
      else if ((0 > latitude) && (latitude >= -8))
          return 'M';
      else if ((-8 > latitude) && (latitude >= -16))
          return 'L';
      else if ((-16 > latitude) && (latitude >= -24))
          return 'K';
      else if ((-24 > latitude) && (latitude >= -32))
          return 'J';
      else if ((-32 > latitude) && (latitude >= -40))
          return 'H';
      else if ((-40 > latitude) && (latitude >= -48))
          return 'G';
      else if ((-48 > latitude) && (latitude >= -56))
          return 'F';
      else if ((-56 > latitude) && (latitude >= -64))
          return 'E';
      else if ((-64 > latitude) && (latitude >= -72))
          return 'D';
      else if ((-72 > latitude) && (latitude >= -80))
          return 'C';
      else
          return 'Z'; 
  };
  
  setEllipsoid (name)//Establece el elipsoide
  {
      switch (name) {
          case 'Airy':
          this.a = 6377563;
          this.eccSquared = 0.00667054;
          break;
          case 'Australian National':
          this.a = 6378160;
          this.eccSquared = 0.006694542;
          break;
          case 'Bessel 1841':
          this.a = 6377397;
          this.eccSquared = 0.006674372;
          break;
          case 'Bessel 1841 Nambia':
          this.a = 6377484;
          this.eccSquared = 0.006674372;
          break;
          case 'Clarke 1866':
          this.a = 6378206;
          this.eccSquared = 0.006768658;
          break;
          case 'Clarke 1880':
          this.a = 6378249;
          this.eccSquared = 0.006803511;
          break;
          case 'Everest':
          this.a = 6377276;
          this.eccSquared = 0.006637847;
          break;
          case 'Fischer 1960 Mercury':
          this.a = 6378166;
          this.eccSquared = 0.006693422;
          break;
          case 'Fischer 1968':
          this.a = 6378150;
          this.eccSquared = 0.006693422;
          break;
          case 'GRS 1967':
          this.a = 6378160;
          this.eccSquared = 0.006694605;
          break;
          case 'GRS 1980':
          this.a = 6378137;
          this.eccSquared = 0.00669438;
          break;
          case 'Helmert 1906':
          this.a = 6378200;
          this.eccSquared = 0.006693422;
          break;
          case 'Hough':
          this.a = 6378270;
          this.eccSquared = 0.00672267;
          break;
          case 'International':
          this.a = 6378388;
          this.eccSquared = 0.00672267;
          break;
          case 'Krassovsky':
          this.a = 6378245;
          this.eccSquared = 0.006693422;
          break;
          case 'Modified Airy':
          this.a = 6377340;
          this.eccSquared = 0.00667054;
          break;
          case 'Modified Everest':
          this.a = 6377304;
          this.eccSquared = 0.006637847;
          break;
          case 'Modified Fischer 1960':
          this.a = 6378155;
          this.eccSquared = 0.006693422;
          break;
          case 'South American 1969':
          this.a = 6378160;
          this.eccSquared = 0.006694542;
          break;
          case 'WGS 60':
          this.a = 6378165;
          this.eccSquared = 0.006693422;
          break;
          case 'WGS 66':
          this.a = 6378145;
          this.eccSquared = 0.006694542;
          break;
          case 'WGS 72':
          this.a = 6378135;
          this.eccSquared = 0.006694318;
          break;
          case 'ED50':
          this.a = 6378388;
          this.eccSquared = 0.00672267;
              break; // International Ellipsoid
              case 'WGS 84':
          case 'EUREF89': // Max deviation from WGS 84 is 40 cm/km see http://ocq.dk/euref89 (in danish)
          case 'ETRS89': // Same as EUREF89 
          this.a = 6378137;
          this.eccSquared = 0.00669438;
          break;
          default:
          this.status = true;
              //   new Error('No ecclipsoid data associated with unknown datum: '.name); 
          }
      };
       toDegrees (rad) { 
          return rad / Math.PI * 180;
      };
      toRadians (deg) {  
          return deg * Math.PI / 180;
      };
      precisionRound(number, precision) {
        var factor = Math.pow(10, precision);
        return Math.round(number * factor) / factor;
    }
    copiar_datos()
    {



      if(this.forma.get('switch_boton').value == true)
      {
        this.forma.patchValue({codigo_fono_1_gerencia: this.forma.get('codigo_fono_1_planta').value});
        this.forma.patchValue({num_fono_1_gerencia: this.forma.get('num_fono_1_planta').value});
        this.forma.patchValue({codigo_fono_2_gerencia: this.forma.get('codigo_fono_2_planta').value});
        this.forma.patchValue({num_fono_2_gerencia: this.forma.get('num_fono_2_planta').value});
        this.forma.patchValue({region_gerencia: this.forma.get('region').value});
        this.forma.patchValue({provincia_gerencia: this.forma.get('provincia').value});
        this.forma.patchValue({comuna_gerencia: this.forma.get('comuna').value});
        this.forma.patchValue({direccion_gerencia: this.forma.get('direccion_planta').value});
        this.forma.patchValue({ciudad_gerencia: this.forma.get('ciudad_planta').value});
        this.forma.patchValue({email_gerencia: this.forma.get('email_planta').value});

      }else{
        this.ast_encuesta.getAll().then((AST_ENCUESTA: any[]) => { //Obtiene la colección de datos local
          this.AST_ENCUESTA_List = AST_ENCUESTA; //Variable de interpolación con el html
        
          for(var i = 0; i < AST_ENCUESTA.length; i++)
          {
            if(AST_ENCUESTA[i].ID_ENCUESTA == this.id_encuesta)
            {
              this.forma.patchValue({region_gerencia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.REGION      });
              this.forma.patchValue({provincia_gerencia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.PROVINCIA});
              this.forma.patchValue({comuna_gerencia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.COMUNA});
              this.forma.patchValue({codigo_fono_1_gerencia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.AREA1});
              this.forma.patchValue({num_fono_1_gerencia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.FONO1});
              if( AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.AREA2 != "")
              {
                this.forma.patchValue({codigo_fono_2_gerencia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.AREA2});
              }else{
                this.forma.patchValue({codigo_fono_2_gerencia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.AREA1});
              }
        
        
              this.forma.patchValue({num_fono_2_gerencia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.FONO2});
              this.forma.patchValue({direccion_gerencia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.DIRECCION});
              this.forma.patchValue({ciudad_gerencia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.CIUDAD});
              this.forma.patchValue({email_gerencia: AST_ENCUESTA[i].PEF_EMPRESA_UNIDAD_ASTILLAS.PEF_EMPRESA_ASTILLAS.MAIL});
            }
          }
        });
          
      }

       
   
    }
    cambio()
    {

      this.seleccion_regional = this.forma.get('region').value;
    
        this.forma.patchValue({provincia: null});
        this.forma.patchValue({comuna: null});
        this.valor_provincia = null;
        this.valor_comuna = null;
     
    }
    cambio_2()
    {

      this.seleccion_provincia = this.forma.get('provincia').value;
      this.forma.patchValue({comuna: null});
      this.valor_comuna = null;

    }
  }