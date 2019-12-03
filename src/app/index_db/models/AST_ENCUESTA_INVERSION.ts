export class AST_ENCUESTA_INVERSION {
    ID_ENCUESTA: number;
    TIPO_INVERSION: number;
    MONTO_INVERSION: number;
    MONEDA_INVERSION?: number  | null;
    MONTO_PROYECTADO: number;
    MONEDA_PROYECTADO?: number | null;

    constructor(
        ID_ENCUESTA: number,
        TIPO_INVERSION: number,
        MONTO_INVERSION: number,
        MONEDA_INVERSION: number,
        MONTO_PROYECTADO: number,
        MONEDA_PROYECTADO: number

        ) {



            this.ID_ENCUESTA= ID_ENCUESTA,
            this.TIPO_INVERSION= TIPO_INVERSION,
            this.MONTO_INVERSION= MONTO_INVERSION,
            this.MONEDA_INVERSION= MONEDA_INVERSION,
            this.MONTO_PROYECTADO=MONTO_PROYECTADO,
            this.MONEDA_PROYECTADO= MONEDA_PROYECTADO

}
}


