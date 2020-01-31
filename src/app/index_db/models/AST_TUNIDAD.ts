export class AST_TUNIDAD {
    UNIDAD: number;
    DESCRIPCION : string;
    SIGLA: string;
    PRODUCTO: number;
   FACTOR_PIR?  :number | null;
    FACTOR_EUC?  :number | null;
    FACTOR_GLOBULUS?  :number | null;
    FACTOR_NITENS?  :number | null;
    FACTOR_EXO?  :number | null;
    FACTOR_NAT?  :number | null;
    FACTOR_TROZA_PIR?  :number | null;
    FACTOR_TROZA_EUC?  :number | null;
    FACTOR_TROZA_EXO? :number | null;
    FACTOR_TROZA_NAT?  :number | null;


    constructor(
        UNIDAD: number,
        DESCRIPCION : string,
        SIGLA: string,
        PRODUCTO: number,
       FACTOR_PIR?  :number | null,
        FACTOR_EUC?  :number | null,
        FACTOR_GLOBULUS?  :number | null,
        FACTOR_NITENS?  :number | null,
        FACTOR_EXO?  :number | null,
        FACTOR_NAT?  :number | null,
        FACTOR_TROZA_PIR?  :number | null,
        FACTOR_TROZA_EUC?  :number | null,
        FACTOR_TROZA_EXO? :number | null,
        FACTOR_TROZA_NAT?  :number | null

        ) {



         
            this.UNIDAD= UNIDAD;
            this.DESCRIPCION = DESCRIPCION;
            this.SIGLA= SIGLA;
            this.PRODUCTO= PRODUCTO;
            this.FACTOR_PIR  =FACTOR_PIR;
            this.FACTOR_EUC=FACTOR_EUC ;
            this.FACTOR_GLOBULUS=FACTOR_GLOBULUS ;
            this.FACTOR_NITENS= FACTOR_NITENS;
            this.FACTOR_EXO=FACTOR_EXO ;
            this.FACTOR_NAT=FACTOR_NAT;
            this.FACTOR_TROZA_PIR=FACTOR_TROZA_PIR ;
            this.FACTOR_TROZA_EUC =FACTOR_TROZA_EUC;
            this.FACTOR_TROZA_EXO =FACTOR_TROZA_EXO;
            this.FACTOR_TROZA_NAT = FACTOR_TROZA_NAT ;
     

}
}


