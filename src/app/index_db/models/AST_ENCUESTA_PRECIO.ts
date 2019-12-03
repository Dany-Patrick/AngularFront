export class AST_ENCUESTA_PRECIO {
    ID_ENCUESTA: number;
    PRODUCTO: number;
    ESPECIE: number;
    PRECIO?: number | null;
    UNIDAD?: number | null;
    CH: string;
    PUESTO_EN?: number | null;

    constructor(
        ID_ENCUESTA: number,
        PRODUCTO: number,
    ESPECIE: number,
    PRECIO: number ,
    UNIDAD: number ,
    CH: string,
    PUESTO_EN: number 

        ) {



            this.ID_ENCUESTA= ID_ENCUESTA,
            this.ESPECIE= ESPECIE
            this.PRODUCTO= PRODUCTO,
            this.PRECIO= PRECIO ,
            this.UNIDAD= UNIDAD ,
            this.CH= CH,
            this.PUESTO_EN= PUESTO_EN 

}
}


