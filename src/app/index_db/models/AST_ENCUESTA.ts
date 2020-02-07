
  export class AST_ENCUESTA  {
    AST_ENCUESTA_EQUIVALENCIA: AST_ENCUESTA_EQUIVALENCIA[];
    AST_ENCUESTA_INGRESO_SECCION: AST_ENCUESTA_INGRESO_SECCION;
    AST_ENCUESTA_INVERSION: AST_ENCUESTA_INVERSION[];
    AST_ENCUESTA_MAQUINARIA: AST_ENCUESTA_MAQUINARIA[];
    AST_ENCUESTA_OBSERVACION_SECCION: AST_ENCUESTA_OBSERVACION_SECCION[];
    AST_ENCUESTA_OCUPACION: AST_ENCUESTA_OCUPACION[];
    AST_ENCUESTA_PERDIDA: any[]; //omgggggggggggggggg
    AST_ENCUESTA_SUBPRODUCTO_DESTINO: AST_ENCUESTA_SUBPRODUCTO_DESTINO[];
    AST_ENCUESTA_CERTIFICACION: AST_ENCUESTA_CERTIFICACION;
    PEF_EMPRESA_UNIDAD_ASTILLAS: PEF_EMPRESA_UNIDAD_ASTILLAS = new PEF_EMPRESA_UNIDAD_ASTILLAS();
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
  
    export class PEF_EMPRESA_ASTILLAS {
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
  
    export class PEF_EMPRESA_UNIDAD_ASTILLAS {
        PEF_EMPRESA_ASTILLAS: PEF_EMPRESA_ASTILLAS = new PEF_EMPRESA_ASTILLAS();
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
  

