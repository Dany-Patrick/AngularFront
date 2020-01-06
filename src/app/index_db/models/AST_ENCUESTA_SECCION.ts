export class AST_ENCUESTA_SECCION {
    SECCION : string;
    SUBSECCION : string;
    NIVEL : string;
    SUBNIVEL : string;
    DESCRIPCION : string;
    OPCIONAL : string;
    

    constructor(
        SECCION: string,
        SUBSECCION: string,
        NIVEL: string,
        SUBNIVEL: string,
        DESCRIPCION: string,
        OPCIONAL: string

        ) {



            this.SECCION= SECCION,
            this.SUBSECCION= SUBSECCION,
            this.NIVEL= NIVEL,
            this.SUBNIVEL= SUBNIVEL,
            this.DESCRIPCION= DESCRIPCION,
            this.OPCIONAL= OPCIONAL
     

}
}


