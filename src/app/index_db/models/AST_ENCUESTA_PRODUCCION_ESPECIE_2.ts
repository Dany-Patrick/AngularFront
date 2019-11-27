import { AST_ENCUESTA_DESTINO_PRODUCCION_2 } from './AST_ENCUESTA_DESTINO_PRODUCCION_2';

export class AST_ENCUESTA_PRODUCCION_ESPECIE_2 {
    ID_ENCUESTA: number;
    ESPECIE: number;
    AST_ENCUESTA_DESTINO_PRODUCCION_2: AST_ENCUESTA_DESTINO_PRODUCCION_2[];
    PRODUCTO: number;
    PORCENTAJE: number;
    PRODUCCION_M3: number;

    constructor(
        ID_ENCUESTA: number,
        ESPECIE: number,
        AST_ENCUESTA_DESTINO_PRODUCCION_2: AST_ENCUESTA_DESTINO_PRODUCCION_2[],
    PRODUCTO: number,
    PORCENTAJE: number,
    PRODUCCION_M3: number
        ) {



            this.ID_ENCUESTA= ID_ENCUESTA,
            this.ESPECIE= ESPECIE,
            this.AST_ENCUESTA_DESTINO_PRODUCCION_2= AST_ENCUESTA_DESTINO_PRODUCCION_2,
            this.PRODUCTO=PRODUCTO ,
            this.PORCENTAJE= PORCENTAJE,
            this.PRODUCCION_M3=PRODUCCION_M3

}
}


