export class AST_ENCUESTA_ABASTECIMIENTO_ORIGEN  {
    ID_ENCUESTA: number;
    PRODUCTO: number;
    ESPECIE: number;
    TIPO_ABASTECIMIENTO: number;
    REGION: number;
    PORCENTAJE: number;
    VOLUMEN_M3: number;


    constructor(
        ID_ENCUESTA: number,
        PRODUCTO: number,
        ESPECIE: number,
        TIPO_ABASTECIMIENTO: number,
        REGION: number,
        PORCENTAJE: number,
        VOLUMEN_M3: number

        ) {



            this.ID_ENCUESTA= ID_ENCUESTA;
            this.PRODUCTO=PRODUCTO;
            this.ESPECIE=ESPECIE;
            this. TIPO_ABASTECIMIENTO=TIPO_ABASTECIMIENTO;
            this.REGION=REGION;
            this.PORCENTAJE=PORCENTAJE;
            this.VOLUMEN_M3=VOLUMEN_M3;

}
}


