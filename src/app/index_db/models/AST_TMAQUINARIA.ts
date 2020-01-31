export class AST_TMAQUINARIA {
    TIPO_MAQUINA: number;
    SIGLA_MAQUINA?  :string | null
    DESCRIPCION: string;
    ORDEN: number;
    VIGENTE: string;
  


    constructor(
        TIPO_MAQUINA: number,
       
        DESCRIPCION : string,
        ORDEN: number,
        VIGENTE  :string,
        SIGLA_MAQUINA?  :string | null,


        ) {



         
            this.TIPO_MAQUINA= TIPO_MAQUINA;
            this.SIGLA_MAQUINA = SIGLA_MAQUINA;
            this.ORDEN= ORDEN;
            this.VIGENTE= VIGENTE;
            this.DESCRIPCION  =DESCRIPCION;
    
     

}
}


