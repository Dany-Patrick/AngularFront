
  export class AST_ENCUESTA  {
    AST_ENCUESTA_EQUIVALENCIA: AST_ENCUESTA_EQUIVALENCIA[];
    AST_ENCUESTA_INGRESO_SECCION: AST_ENCUESTA_INGRESO_SECCION;
    AST_ENCUESTA_INVERSION: AST_ENCUESTA_INVERSION[];
    AST_ENCUESTA_MAQUINARIA: AST_ENCUESTA_MAQUINARIA[];
    AST_ENCUESTA_OBSERVACION_SECCION: AST_ENCUESTA_OBSERVACION_SECCION[];
    AST_ENCUESTA_OCUPACION: AST_ENCUESTA_OCUPACION[];
    AST_ENCUESTA_PERDIDA: any[];
    AST_ENCUESTA_SUBPRODUCTO_DESTINO: AST_ENCUESTA_SUBPRODUCTO_DESTINO[];
    AST_ENCUESTA_CERTIFICACION: AST_ENCUESTA_CERTIFICACION;
    PEF_EMPRESA_UNIDAD_ASTILLAS: PEF_EMPRESA_UNIDAD_ASTILLAS;
    AST_ENCUESTA_PRECIO: AST_ENCUESTA_PRECIO[];
    AST_ENCUESTA_PRODUCCION_ESPECIE_2: AST_ENCUESTA_PRODUCCION_ESPECIE_2[];
    AST_ENCUESTA_SUBPRODUCTO: AST_ENCUESTA_SUBPRODUCTO[];
    ID_ENCUESTA: number;
    ANO: number;
    RUT_EMPRESA: number;
    CODIGO_UNIDAD: number;
    REGION: number;
    PROVINCIA: number;
    COMUNA: number;
    SELECCION: string;
    TIPO_MOVILIDAD: string;
    TIPO_PLANTA: string;
    TIPO_EQUIPO: string;
    SITUACION: string;
    CAUSA_PARALIZACION?: number | null;
    SITUACION_ACTUAL: string;
    NOMBRE_PROPIETARIO: string;
    NOMBRE_GERENTE: string;
    ANOS_EXPERIENCIA?: any | null;
    C_ENCUESTADOR: number;
    FECHA_ENCUESTA: string;
    NOMBRE_ENCUESTADO: string;
    CARGO_ENCUESTADO: number;
    OBS: string;
    PRODUCCION_ANUAL?: number | null;
    UNIDAD_PROD_ANUAL?: number | null;
    PRODUCCION_M3?: number | null;
    PRODUCCION_ANUAL_SC?: number | null;
    UNIDAD_PROD_ANUAL_SC?: number | null;
    PRODUCCION_SC_M3?: number | null;
    PRODUCCION_ANUAL_CC?: number | null;
    UNIDAD_PROD_ANUAL_CC?: number | null;
    PRODUCCION_CC_M3?: number | null;
    PRODUCCION_TURNO?: number | null;
    UNIDAD_PROD_TURNO?: number | null;
    PRODUCCION_TURNO_M3?: number | null;
    CAPACIDAD_MAXIMA_TURNO?: number | null;
    UNIDAD_CAP_MAXIMA_TURNO?: number | null;
    CAPACIDAD_MAXIMA_TURNO_M3?: number | null;
    CAPACIDAD_ANUAL?: number | null;
    UNIDAD_CAP_ANUAL?: any | null;
    CAPACIDAD_ANUAL_M3: number;
    MESES_TRABAJADOS?: number | null;
    DIAS_TRAB_MES?: number | null;
    TURNOS_DIA?: number | null;
    HORAS_TURNO?: number | null;
    PRODUCCION_ESTIMADA?: number | null;
    UNIDAD_PROD_ESTIMADA?: number | null;
    PRODUCCION_ESTIMADA_M3?: number | null;
    PRODUCCION_ESTIMADA_SC?: number | null;
    UNIDAD_PROD_ESTIMADA_SC?: number | null;
    PRODUCCION_ESTIMADA_SC_M3?: number | null;
    PRODUCCION_ESTIMADA_CC?: number | null;
    UNIDAD_PROD_ESTIMADA_CC?: number | null;
    PRODUCCION_ESTIMADA_CC_M3?: number | null;
    VARIACION_PRODUCCION_ESTIMADA?: number | null;
    VARIACION_PRODUCCION_ESTIMADA_CC?: number | null;
    VARIACION_PRODUCCION_ESTIMADA_SC?: number | null;
    CODIGO_ANTIGUO?: number | null;
    VOLUMEN_M3?: number | null;
    ESTRATO?: any | null;
    USUARIO_INGRESO: number;
    EMAIL_ENCUESTADO: string;
    CELULAR_ENCUESTADO: string;
    ROTACION_OPERARIOS?: any | null;
    NOMBRE_EMPRESA_TRAVES?: any | null;
    FECHA_ACTUALIZACION?: string | null;
    COMPLETITUD?: number | null;
    CAUSA_DESAPARECIDO?: any | null;
    ESTADO_ENCUESTA: string;
    MESES_TRABAJADOS_DETALLE?: any | null;







 

      constructor(ID_ENCUESTA: number,
        ANO: number,
        RUT_EMPRESA: number,
        CODIGO_UNIDAD: number,
        REGION: number,
        PROVINCIA: number,
        COMUNA: number,
        SELECCION: string,
        TIPO_MOVILIDAD: string,
        TIPO_PLANTA: string,
        TIPO_EQUIPO: string,
        SITUACION: string,
        CAUSA_PARALIZACION: number ,
        SITUACION_ACTUAL: string,
        NOMBRE_PROPIETARIO: string,
        NOMBRE_GERENTE: string,
        ANOS_EXPERIENCIA: any ,
        C_ENCUESTADOR: number,
        FECHA_ENCUESTA: string,
        NOMBRE_ENCUESTADO: string,
        CARGO_ENCUESTADO: number,
        OBS: string,
        PRODUCCION_ANUAL: number ,
        UNIDAD_PROD_ANUAL: number  ,
        PRODUCCION_M3: number  ,
        PRODUCCION_ANUAL_SC: number  ,
        UNIDAD_PROD_ANUAL_SC: number  ,
        PRODUCCION_SC_M3: number  ,
        PRODUCCION_ANUAL_CC: number ,
        UNIDAD_PROD_ANUAL_CC: number  ,
        PRODUCCION_CC_M3: number  ,
        PRODUCCION_TURNO: number  ,
        UNIDAD_PROD_TURNO: number ,
        PRODUCCION_TURNO_M3: number  ,
        CAPACIDAD_MAXIMA_TURNO: number  ,
        UNIDAD_CAP_MAXIMA_TURNO: number  ,
        CAPACIDAD_MAXIMA_TURNO_M3: number  ,
        CAPACIDAD_ANUAL: number ,
        UNIDAD_CAP_ANUAL: any ,
        CAPACIDAD_ANUAL_M3: number,
        MESES_TRABAJADOS: number ,
        DIAS_TRAB_MES: number ,
        TURNOS_DIA: number ,
        HORAS_TURNO: number ,
        PRODUCCION_ESTIMADA: number,
        UNIDAD_PROD_ESTIMADA: number ,
        PRODUCCION_ESTIMADA_M3: number ,
        PRODUCCION_ESTIMADA_SC: number ,
        UNIDAD_PROD_ESTIMADA_SC: number ,
        PRODUCCION_ESTIMADA_SC_M3: number ,
        PRODUCCION_ESTIMADA_CC: number ,
        UNIDAD_PROD_ESTIMADA_CC: number ,
        PRODUCCION_ESTIMADA_CC_M3: number ,
        VARIACION_PRODUCCION_ESTIMADA: number ,
        VARIACION_PRODUCCION_ESTIMADA_CC: number ,
        VARIACION_PRODUCCION_ESTIMADA_SC: number ,
        CODIGO_ANTIGUO: number ,
        VOLUMEN_M3: number ,
        ESTRATO: any ,
        USUARIO_INGRESO: number,
        EMAIL_ENCUESTADO: string,
        CELULAR_ENCUESTADO: string,
        ROTACION_OPERARIOS: any ,
        NOMBRE_EMPRESA_TRAVES: any ,
        FECHA_ACTUALIZACION: any ,
        COMPLETITUD: any ,
        CAUSA_DESAPARECIDO: any ,
        ESTADO_ENCUESTA: string

        )
      {
        this.ID_ENCUESTA= ID_ENCUESTA,
        this.ANO= ANO,
        this.RUT_EMPRESA= RUT_EMPRESA,
        this.CODIGO_UNIDAD= CODIGO_UNIDAD,
        this.REGION= REGION,
        this.PROVINCIA= PROVINCIA,
        this.COMUNA= COMUNA,
        this.SELECCION= SELECCION,
        this.TIPO_MOVILIDAD= TIPO_MOVILIDAD,
        this.TIPO_PLANTA= TIPO_PLANTA,
        this.TIPO_EQUIPO= TIPO_EQUIPO,
        this.SITUACION= SITUACION,
        this.CAUSA_PARALIZACION= CAUSA_PARALIZACION ,
        this.SITUACION_ACTUAL= SITUACION_ACTUAL,
        this.NOMBRE_PROPIETARIO= NOMBRE_PROPIETARIO,
        this.NOMBRE_GERENTE= NOMBRE_GERENTE,
        this.ANOS_EXPERIENCIA= ANOS_EXPERIENCIA ,
        this.C_ENCUESTADOR= C_ENCUESTADOR,
        this.FECHA_ENCUESTA= FECHA_ENCUESTA,
        this.NOMBRE_ENCUESTADO= NOMBRE_ENCUESTADO,
        this.CARGO_ENCUESTADO= CARGO_ENCUESTADO,
        this.OBS= OBS,
        this.PRODUCCION_ANUAL= PRODUCCION_ANUAL ,
        this.UNIDAD_PROD_ANUAL= UNIDAD_PROD_ANUAL  ,
        this.PRODUCCION_M3= PRODUCCION_M3  ,
        this.PRODUCCION_ANUAL_SC= PRODUCCION_ANUAL_SC  ,
        this.UNIDAD_PROD_ANUAL_SC= UNIDAD_PROD_ANUAL_SC  ,
        this.PRODUCCION_SC_M3= PRODUCCION_SC_M3  ,
        this.PRODUCCION_ANUAL_CC= PRODUCCION_ANUAL_CC ,
        this.UNIDAD_PROD_ANUAL_CC= UNIDAD_PROD_ANUAL_CC  ,
        this.PRODUCCION_CC_M3= PRODUCCION_CC_M3  ,
        this.PRODUCCION_TURNO= PRODUCCION_TURNO  ,
        this.UNIDAD_PROD_TURNO= UNIDAD_PROD_TURNO ,
        this.PRODUCCION_TURNO_M3= PRODUCCION_TURNO_M3  ,
        this.CAPACIDAD_MAXIMA_TURNO= CAPACIDAD_MAXIMA_TURNO  ,
        this.UNIDAD_CAP_MAXIMA_TURNO= UNIDAD_CAP_MAXIMA_TURNO  ,
        this.CAPACIDAD_MAXIMA_TURNO_M3= CAPACIDAD_MAXIMA_TURNO_M3  ,
        this.CAPACIDAD_ANUAL= CAPACIDAD_ANUAL ,
        this.UNIDAD_CAP_ANUAL= UNIDAD_CAP_ANUAL ,
        this.CAPACIDAD_ANUAL_M3= CAPACIDAD_ANUAL_M3,
        this.MESES_TRABAJADOS= MESES_TRABAJADOS ,
        this.DIAS_TRAB_MES= DIAS_TRAB_MES ,
        this.TURNOS_DIA= TURNOS_DIA ,
        this.HORAS_TURNO= HORAS_TURNO ,
        this.PRODUCCION_ESTIMADA= PRODUCCION_ESTIMADA,
        this.UNIDAD_PROD_ESTIMADA= UNIDAD_PROD_ESTIMADA ,
        this.PRODUCCION_ESTIMADA_M3= PRODUCCION_ESTIMADA_M3 ,
        this.PRODUCCION_ESTIMADA_SC= PRODUCCION_ESTIMADA_SC ,
        this.UNIDAD_PROD_ESTIMADA_SC= UNIDAD_PROD_ESTIMADA_SC ,
        this.PRODUCCION_ESTIMADA_SC_M3= PRODUCCION_ESTIMADA_SC_M3 ,
        this.PRODUCCION_ESTIMADA_CC= PRODUCCION_ESTIMADA_CC ,
        this.UNIDAD_PROD_ESTIMADA_CC= UNIDAD_PROD_ESTIMADA_CC ,
        this.PRODUCCION_ESTIMADA_CC_M3= PRODUCCION_ESTIMADA_CC_M3 ,
        this.VARIACION_PRODUCCION_ESTIMADA= VARIACION_PRODUCCION_ESTIMADA ,
        this.VARIACION_PRODUCCION_ESTIMADA_CC= VARIACION_PRODUCCION_ESTIMADA_CC ,
        this.VARIACION_PRODUCCION_ESTIMADA_SC= VARIACION_PRODUCCION_ESTIMADA_SC ,
        this.CODIGO_ANTIGUO= CODIGO_ANTIGUO ,
        this.VOLUMEN_M3= VOLUMEN_M3 ,
        this.ESTRATO= ESTRATO ,
        this.USUARIO_INGRESO= USUARIO_INGRESO,
        this.EMAIL_ENCUESTADO= EMAIL_ENCUESTADO,
        this.CELULAR_ENCUESTADO= CELULAR_ENCUESTADO,
        this.ROTACION_OPERARIOS= ROTACION_OPERARIOS ,
        this.NOMBRE_EMPRESA_TRAVES= NOMBRE_EMPRESA_TRAVES ,
        this.FECHA_ACTUALIZACION= FECHA_ACTUALIZACION ,
        this.COMPLETITUD= COMPLETITUD ,
        this.CAUSA_DESAPARECIDO= CAUSA_DESAPARECIDO ,
        this.ESTADO_ENCUESTA= ESTADO_ENCUESTA
      }
  }


    export interface AST_ENCUESTA_EQUIVALENCIA {
        ID_ENCUESTA: number;
        PRODUCTO: number;
        ESPECIE: number;
        DIAMPROM?: any | null;
        FACTORSC?: any | null;
        FACTORCC?: any | null;
        UNIDAD: string;
        M3SSC: number;
        BDMT: number;
        GMT: number;
        M3STEREO: number;
        OTRAS?: any | null;
    }
  
    export interface AST_ENCUESTA_INGRESO_SECCION {
        ID_ENCUESTA: number;
        SECCION_A: boolean;
        SECCION_B: boolean;
        SECCION_C?: boolean;
        SECCION_D?: boolean;
        SECCION_E?: boolean;
        SECCION_F?: boolean;
        SECCION_G?: boolean;
        SECCION_H?: boolean;
        SECCION_I?: boolean;
        SECCION_J: boolean;
        SECCION_K?: any | null;
        SECCION_L?: any | null;
        FECHA?: any | null;
    }
  
    export interface AST_ENCUESTA_INVERSION {
        ID_ENCUESTA: number;
        TIPO_INVERSION: number;
        MONTO_INVERSION: number;
        MONEDA_INVERSION?: number | null;
        MONTO_PROYECTADO: number;
        MONEDA_PROYECTADO?: number | null;
    }
  
    export interface AST_ENCUESTA_MAQUINARIA {
        ID_ENCUESTA: number;
        TIPO_MAQUINA: number;
        CANTIDAD: number;
    }
  
    export interface AST_ENCUESTA_OBSERVACION_SECCION {
        ID_ENCUESTA: number;
        SECCION: string;
        OBS: string;
    }
  
    export interface AST_ENCUESTA_OCUPACION {
        ID_ENCUESTA: number;
        TIPO_PERSONAL: number;
        ESPECIALIZACION: number;
        PERMANENTE_HOMBRES: number;
        PERMANENTE_MUJERES: number;
        TEMPORAL_HOMBRES: number;
        TEMPORAL_MUJERES: number;
        MESES: number;
    }
  
    export interface AST_ENCUESTA_ABASTECIMIENTO_ORIGEN {
        ID_ENCUESTA: number;
        PRODUCTO: number;
        ESPECIE: number;
        TIPO_ABASTECIMIENTO: number;
        REGION: number;
        PORCENTAJE: number;
        VOLUMEN_M3: number;
    }
  
    export interface AST_ENCUESTA_ABASTECIMIENTO {
        AST_ENCUESTA_ABASTECIMIENTO_ORIGEN: AST_ENCUESTA_ABASTECIMIENTO_ORIGEN[];
        ID_ENCUESTA: number;
        PRODUCTO: number;
        ESPECIE: number;
        TIPO_ABASTECIMIENTO: number;
        PORCENTAJE_CONSUMO_ANUAL: number;
        CONSUMO_ANUAL: number;
        UNIDAD_CONSUMO_ANUAL?: number | null;
        CONSUMO_ANUAL_M3: number;
        PORCENTAJE_ORIGEN_PROPIO: number;
        PORCENTAJE_ORIGEN_TERCERO: number;
        CONSUMO_PROPIO_M3: number;
        CONSUMO_TERCEROS_M3: number;
    }
  
    export interface AST_ENCUESTA_PRECIO {
        ID_ENCUESTA: number;
        PRODUCTO: number;
        ESPECIE: number;
        PRECIO?: number | null;
        UNIDAD?: number | null;
        CH: string;
        PUESTO_EN?: number | null;
    }
  
    export interface AST_ENCUESTA_DESTINO_PRODUCCION_2 {
        ID_ENCUESTA: number;
        PRODUCTO: number;
        ESPECIE: number;
        DESTINO: number;
        PORCENTAJE: number;
        PRODUCCION_M3: number;
        ATRAVESDE: string;
    }
  
    export interface AST_ENCUESTA_PRODUCCION_ESPECIE_2 {
        AST_ENCUESTA_DESTINO_PRODUCCION_2: AST_ENCUESTA_DESTINO_PRODUCCION_2[];
        ID_ENCUESTA: number;
        PRODUCTO: number;
        ESPECIE: number;
        PORCENTAJE: number;
        PRODUCCION_M3: number;
    }
  
    export interface AST_ENCUESTA_SUBPRODUCTO {
        ID_ENCUESTA: number;
        TIPO_SUBPRODUCTO: number;
        ESPECIE: number;
        PORCENTAJE: number;
    }
  
    export interface AST_ENCUESTA_ESPECIE_C {
        AST_ENCUESTA_ABASTECIMIENTO: AST_ENCUESTA_ABASTECIMIENTO[];
        AST_ENCUESTA_PRECIO: AST_ENCUESTA_PRECIO[];
        AST_ENCUESTA_PRODUCCION_ESPECIE_2: AST_ENCUESTA_PRODUCCION_ESPECIE_2[];
        AST_ENCUESTA_SUBPRODUCTO: AST_ENCUESTA_SUBPRODUCTO[];
        ID_ENCUESTA: number;
        ESPECIE: number;
    }
  
    export interface AST_T_TIPO_SUBPRODUCTO {
        TIPO_SUBPRODUCTO: number;
        DESCRIPCION: string;
        ORDEN: number;
        VIGENTE: string;
    }
  
    export interface AST_ENCUESTA_SUBPRODUCTO_DESTINO {
        AST_TTIPO_SUBPRODUCTO: AST_T_TIPO_SUBPRODUCTO;
        ID_ENCUESTA: number;
        TIPO_SUBPRODUCTO: number;
        DESTINO: number;
    }
  
    export interface AST_ENCUESTA_CERTIFICACION {
        ID_ENCUESTA: number;
        ISO_9000: boolean;
        ISO_14001: boolean;
        ISO_OHSAS: boolean;
        CONOCE_PL: boolean;
        CNPL: boolean;
        CERTFOR: boolean;
        FSC: boolean;
    }
  
    export interface PEF_EMPRESA_ASTILLAS {
        RUT_EMPRESA: number;
        DIGITO: string;
        PERSONALIDAD_JURIDICA: string;
        RAZON_SOCIAL: string;
        NOMBRE_EMPRESA: string;
        DIRECCION: string;
        REGION: number;
        PROVINCIA: number;
        COMUNA: number;
        LOCALIDAD: string;
        CODIGO_POSTAL: string;
        AREA1: number;
        FONO1: string;
        AREA2: number;
        FONO2: string;
        FAX: string;
        CASILLA: string;
        WEB: string;
        MAIL: string;
        LATITUD: string;
        LONGITUD: string;
        RUBROS: string;
        VIGENTE: string;
        REGION1?: number | null;
        PROVINCIA1?: number | null;
        COMUNA1?: number | null;
        ZONA: string;
        HUSO: number;
        UTMX: number;
        UTMY: number;
        CIUDAD: string;
    }
  
    export interface PEF_EMPRESA_UNIDAD_ASTILLAS {
        PEF_EMPRESA_ASTILLAS: PEF_EMPRESA_ASTILLAS;
        CODIGO_UNIDAD: number;
        RUT_EMPRESA: number;
        DIGITO: string;
        TIPO_UNIDAD: string;
        NOMBRE_UNIDAD: string;
        DIRECCION: string;
        REGION: number;
        PROVINCIA: number;
        COMUNA: number;
        LOCALIDAD: string;
        CODIGO_POSTAL: number;
        AREA1?: number | null;
        FONO1: string;
        AREA2?: number | null;
        FONO2: string;
        FAX: string;
        CASILLA: string;
        WEB: string;
        MAIL: string;
        LATITUD: string;
        LONGITUD: string;
        ANO_ULTIMO_CAMBIO: number;
        VIGENTE: string;
        REGION1?: number | null;
        PROVINCIA1?: number | null;
        COMUNA1?: number | null;
        ZONA: string;
        HUSO: number;
        UTMX: number;
        UTMY: number;
        CIUDAD: string;
        REFERENCIA?: any | null;
    }
  

