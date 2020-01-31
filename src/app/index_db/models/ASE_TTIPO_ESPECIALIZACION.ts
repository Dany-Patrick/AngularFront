export class ASE_TTIPO_ESPECIALIZACION{
    ESPECIALIZACION : number;
    DESCRIPCION : string;
    ORDEN?  :number | null;
    VIGENTE : number;



 
     constructor(
        ESPECIALIZACION: number,
        DESCRIPCION : string,
         ORDEN : number,
         VIGENTE : number
 
         ) {
 
             this.ESPECIALIZACION= ESPECIALIZACION;
             this.DESCRIPCION = DESCRIPCION;
             this.ORDEN  =ORDEN;  
             this.VIGENTE  =VIGENTE;     
 
 }
 }
 
 