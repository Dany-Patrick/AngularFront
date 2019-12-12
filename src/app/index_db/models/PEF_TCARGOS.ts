export class PEF_TCARGOS {
    CARGO: number;
    DESCRIPCION: string;
    CARGO_BDSIIF?: number | null;
    VIGENTE:string;
 
    


    constructor(
        CARGO: number,
        DESCRIPCION: string,
        CARGO_BDSIIF: number,
        VIGENTE:string

        ) {



            this.CARGO= CARGO,
            this.DESCRIPCION= DESCRIPCION,
            this.CARGO_BDSIIF= CARGO_BDSIIF,
            this.VIGENTE= VIGENTE

}
}


