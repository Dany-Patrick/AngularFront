export class AST_ENCUESTA_DESTINO_PRODUCCION_2 {
    ID_ENCUESTA: number;
    ESPECIE: number;
    PRODUCTO: number;
    DESTINO: number;
    PORCENTAJE: number;
    PRODUCCION_M3: number;
    ATRAVESDE: string;


    constructor(
        ID_ENCUESTA: number,
        ESPECIE: number,
    PRODUCTO: number,
    DESTINO: number,
    PORCENTAJE: number,
    PRODUCCION_M3: number,
    ATRAVESDE: string
        ) {



            this.ID_ENCUESTA= ID_ENCUESTA,
            this.ESPECIE= ESPECIE,
            this.PRODUCTO=PRODUCTO ;
            this.DESTINO=DESTINO ;
            this.PORCENTAJE= PORCENTAJE;
            this.PRODUCCION_M3=PRODUCCION_M3 ;
            this.ATRAVESDE= ATRAVESDE;

}
}


