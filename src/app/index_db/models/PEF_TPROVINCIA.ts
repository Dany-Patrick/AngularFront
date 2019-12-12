export class PEF_TPROVINCIA {
    REGION: number;
    PROVINCIA: number;
    NOMBRE: string;
    REGION_PRE?: string | null;;
    NOMBRE_PRE?: string | null;;
    CODIGO_AREA?: number | null;;
    

    constructor(
        REGION: number,
        PROVINCIA: number,
        NOMBRE: string,
        REGION_PRE: string ,
        NOMBRE_PRE: string,
        CODIGO_AREA: number

        ) {



            this.REGION= REGION,
            this.PROVINCIA= PROVINCIA,
            this.NOMBRE= NOMBRE,
            this.REGION_PRE= REGION_PRE,
            this.NOMBRE_PRE= NOMBRE_PRE,
            this.CODIGO_AREA= CODIGO_AREA
     

}
}


