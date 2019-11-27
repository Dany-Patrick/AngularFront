export class AST_ENCUESTA_INGRESO_SECCION {
    ID_ENCUESTA: number;
    SECCION_A: boolean;
    SECCION_B: boolean;
    SECCION_C?: boolean | null;
    SECCION_D?: boolean | null;
    SECCION_E?: boolean | null;
    SECCION_F?: boolean | null;
    SECCION_G?: boolean | null;
    SECCION_H?: boolean | null;
    SECCION_I?: boolean | null;
    SECCION_J: boolean;
    SECCION_K?: any | null;
    SECCION_L?: any | null;
    FECHA?: any | null;

    constructor(
        ID_ENCUESTA: number,
        SECCION_A: boolean,
        SECCION_B: boolean,
        SECCION_C: boolean  ,
        SECCION_D: boolean  ,
        SECCION_E: boolean  ,
        SECCION_F: boolean  ,
        SECCION_G: boolean  ,
        SECCION_H: boolean  ,
        SECCION_I: boolean  ,
        SECCION_J: boolean,
        SECCION_K: any  ,
        SECCION_L: any  ,
        FECHA: any

        ) {



            this.ID_ENCUESTA = ID_ENCUESTA,
            this.SECCION_A=SECCION_A,
            this.SECCION_B=SECCION_B,
            this.SECCION_C=SECCION_C,
            this.SECCION_D=SECCION_D,
            this.SECCION_E=SECCION_E,
            this.SECCION_F=SECCION_F,
            this.SECCION_G=SECCION_G,
            this.SECCION_H=SECCION_H,
            this.SECCION_I=SECCION_I,
            this.SECCION_J=SECCION_J,
            this.SECCION_K=SECCION_K,
            this.SECCION_L=SECCION_L,
            this.FECHA=FECHA

}
}


