export class AST_ENCUESTA_SUB_PRODUCTO {
    ID_ENCUESTA: number;
    ESPECIE: number;
    TIPO_SUBPRODUCTO: number;
        PORCENTAJE: number;

    constructor(
        ID_ENCUESTA: number,
        ESPECIE: number,
        TIPO_SUBPRODUCTO: number,
        PORCENTAJE: number


        ) {



            this.ID_ENCUESTA= ID_ENCUESTA,
            this.ESPECIE= ESPECIE,
            this.TIPO_SUBPRODUCTO=TIPO_SUBPRODUCTO,
            this.PORCENTAJE=PORCENTAJE

}
}


