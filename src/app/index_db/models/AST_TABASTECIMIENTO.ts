export class AST_TABASTECIMIENTO{
    PRODUCTO : number;
    TIPO_ABASTECIMIENTO: number;
    DESCRIPCION : string;
    ORDEN : number;
    VIGENTE : number;


 
     constructor(
        PRODUCTO : number,
        TIPO_ABASTECIMIENTO: number,
        DESCRIPCION : string,
         ORDEN : number,
         VIGENTE : number
 
         ) {
 
             this.PRODUCTO= PRODUCTO;
             this.DESCRIPCION = DESCRIPCION;
             this.TIPO_ABASTECIMIENTO= TIPO_ABASTECIMIENTO;
             this.ORDEN  =ORDEN;  
             this.VIGENTE  =VIGENTE;     
 
 }
 }
 
 