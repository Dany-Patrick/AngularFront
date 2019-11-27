

export class AST_ENCUESTA_ABASTECIMIENTO  {
    ID_ENCUESTA: number;
    PRODUCTO: number;
    ESPECIE: number;
    TIPO_ABASTECIMIENTO: number;
    PORCENTAJE_CONSUMO_ANUAL: number;
    CONSUMO_ANUAL: number;
    UNIDAD_CONSUMO_ANUAL?: number | null;
    CONSUMO_ANUAL_M3?: number | null;
    PORCENTAJE_ORIGEN_PROPIO?: number | null;
    PORCENTAJE_ORIGEN_TERCERO?: number | null;
    CONSUMO_PROPIO_M3?: number | null;
    CONSUMO_TERCEROS_M3?: number | null;

    constructor(
        ID_ENCUESTA: number,
        PRODUCTO: number,
        ESPECIE: number,
        TIPO_ABASTECIMIENTO: number,
        PORCENTAJE_CONSUMO_ANUAL: number,
        CONSUMO_ANUAL: number,
        UNIDAD_CONSUMO_ANUAL: number,
        CONSUMO_ANUAL_M3: number,
        PORCENTAJE_ORIGEN_PROPIO: number,
        PORCENTAJE_ORIGEN_TERCERO: number,
        CONSUMO_PROPIO_M3: number,
        CONSUMO_TERCEROS_M3: number
        ) {



            this.ID_ENCUESTA= ID_ENCUESTA,
            this.PRODUCTO=PRODUCTO,
            this.ESPECIE= ESPECIE,
            this.TIPO_ABASTECIMIENTO= TIPO_ABASTECIMIENTO,
            this.PORCENTAJE_CONSUMO_ANUAL= PORCENTAJE_CONSUMO_ANUAL,
            this.CONSUMO_ANUAL= CONSUMO_ANUAL,
            this.UNIDAD_CONSUMO_ANUAL= UNIDAD_CONSUMO_ANUAL,
            this.CONSUMO_ANUAL_M3= CONSUMO_ANUAL_M3,
            this.PORCENTAJE_ORIGEN_PROPIO= PORCENTAJE_ORIGEN_PROPIO,
            this.PORCENTAJE_ORIGEN_TERCERO=PORCENTAJE_ORIGEN_TERCERO,
            this.CONSUMO_PROPIO_M3= CONSUMO_PROPIO_M3,
            this.CONSUMO_TERCEROS_M3= CONSUMO_TERCEROS_M3
          
    }
}
