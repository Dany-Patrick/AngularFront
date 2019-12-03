export class AST_ENCUESTA_OCUPACION {
    ID_ENCUESTA: number;
    TIPO_PERSONAL: number;
        ESPECIALIZACION: number;
        PERMANENTE_HOMBRES: number;
        PERMANENTE_MUJERES: number;
        TEMPORAL_HOMBRES: number;
        TEMPORAL_MUJERES: number;
        MESES: number;
    constructor(
        ID_ENCUESTA: number,
        TIPO_PERSONAL: number,
        ESPECIALIZACION: number,
        PERMANENTE_HOMBRES: number,
        PERMANENTE_MUJERES: number,
        TEMPORAL_HOMBRES: number,
        TEMPORAL_MUJERES: number,
        MESES: number

        ) {



            this.ID_ENCUESTA= ID_ENCUESTA,
          
            this.TIPO_PERSONAL= TIPO_PERSONAL,
            this.ESPECIALIZACION= ESPECIALIZACION,
            this.PERMANENTE_HOMBRES= PERMANENTE_HOMBRES,
            this.PERMANENTE_MUJERES= PERMANENTE_MUJERES,
            this.TEMPORAL_HOMBRES= TEMPORAL_HOMBRES,
            this.TEMPORAL_MUJERES= TEMPORAL_MUJERES,
            this.MESES= MESES

}
}


