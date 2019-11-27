export class AST_ENCUESTA_EQUIVALENCIA {
    ID_ENCUESTA: number;
    PRODUCTO: number;
    ESPECIE: number;
    DIAMPROM?: any  | null;
    FACTORSC?: any  | null;
    FACTORCC?: any  | null;
    UNIDAD: string;
    M3SSC: number;
    BDMT: number;
    GMT: number;
    M3STEREO: number;
    OTRAS?: any  | null;

    constructor(
        ID_ENCUESTA: number,
        PRODUCTO: number,
        ESPECIE: number,
        DIAMPROM: any,
        FACTORSC: any,
        FACTORCC: any,
        UNIDAD: string,
        M3SSC: number,
        BDMT: number,
        GMT: number,
        M3STEREO: number,
        OTRAS: any

        ) {



            this.ID_ENCUESTA= ID_ENCUESTA,
            this.PRODUCTO= PRODUCTO;
            this.ESPECIE= ESPECIE;
            this.DIAMPROM= DIAMPROM;
            this.FACTORSC= FACTORSC;
            this.FACTORCC= FACTORCC;
            this.UNIDAD= UNIDAD;
            this.M3SSC= M3SSC;
            this.BDMT= BDMT;
            this.GMT= GMT;
            this.M3STEREO= M3STEREO;
            this.OTRAS= OTRAS;

}
}


