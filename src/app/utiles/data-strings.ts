export class DataStrings {    
  mensaje : string;
  titulo :string; 
  
  static errorActualizaFormA(error : string) {return {titulo: 'Error', mensaje: `Problemas al acutalizar formulario A ${error}`};}
  static errorGeolocacion() {return {titulo: 'Error', mensaje: "Geolocation no está soportada por el navegador."};}
  static errorObtenerCoordenadas() {return {titulo: 'Error', mensaje: "Problemas al obtener las Coordenadas geográficas."};}
  static errorObtenerCoordenadasUTM() {return {titulo: 'Error', mensaje: "Problemas al convertir las Coordenadas geográficas a UTM. Verifique que la geolocación se encuentre activada."};}
  static errorGeolocacionPermisos(){return {titulo:'Error', mensaje: "La geolocación se encuentra bloqueada por el usuario." };}
}