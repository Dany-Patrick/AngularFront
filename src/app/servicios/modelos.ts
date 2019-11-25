export interface ASTENCUESTAEQUIVALENCIA {
    ID_ENCUESTA: number;
    PRODUCTO: number;
    ESPECIE: number;
    DIAMPROM: any;
    FACTORSC: any;
    FACTORCC: any;
    UNIDAD: string;
    M3SSC: number;
    BDMT: number;
    GMT: number;
    M3STEREO: number;
    OTRAS: any;
}

export interface ASTENCUESTAINGRESOSECCION {
    ID_ENCUESTA: number;
    SECCION_A: boolean;
    SECCION_B: boolean;
    SECCION_C: boolean;
    SECCION_D: boolean;
    SECCION_E: boolean;
    SECCION_F: boolean;
    SECCION_G: boolean;
    SECCION_H: boolean;
    SECCION_I: boolean;
    SECCION_J: boolean;
    SECCION_K: any;
    SECCION_L: any;
    FECHA: any;
}

export interface ASTENCUESTAINVERSION {
    ID_ENCUESTA: number;
    TIPO_INVERSION: number;
    MONTO_INVERSION: number;
    MONEDA_INVERSION: number;
    MONTO_PROYECTADO: number;
    MONEDA_PROYECTADO: number;
}

export interface ASTENCUESTAMAQUINARIA {
    ID_ENCUESTA: number;
    TIPO_MAQUINA: number;
    CANTIDAD: number;
}

export interface ASTENCUESTAOBSERVACIONSECCION {
    ID_ENCUESTA: number;
    SECCION: string;
    OBS: string;
}

export interface ASTENCUESTAOCUPACION {
    ID_ENCUESTA: number;
    TIPO_PERSONAL: number;
    ESPECIALIZACION: number;
    PERMANENTE_HOMBRES: number;
    PERMANENTE_MUJERES: number;
    TEMPORAL_HOMBRES: number;
    TEMPORAL_MUJERES: number;
    MESES: number;
}

export interface ASTENCUESTAABASTECIMIENTOORIGEN {
    ID_ENCUESTA: number;
    PRODUCTO: number;
    ESPECIE: number;
    TIPO_ABASTECIMIENTO: number;
    REGION: number;
    PORCENTAJE: number;
    VOLUMEN_M3: number;
}

export interface ASTENCUESTAABASTECIMIENTO {
    AST_ENCUESTA_ABASTECIMIENTO_ORIGEN: ASTENCUESTAABASTECIMIENTOORIGEN[];
    ID_ENCUESTA: number;
    PRODUCTO: number;
    ESPECIE: number;
    TIPO_ABASTECIMIENTO: number;
    PORCENTAJE_CONSUMO_ANUAL: number;
    CONSUMO_ANUAL: number;
    UNIDAD_CONSUMO_ANUAL: number;
    CONSUMO_ANUAL_M3: number;
    PORCENTAJE_ORIGEN_PROPIO: number;
    PORCENTAJE_ORIGEN_TERCERO: number;
    CONSUMO_PROPIO_M3: number;
    CONSUMO_TERCEROS_M3: number;
}

export interface ASTENCUESTAPRECIO {
    ID_ENCUESTA: number;
    PRODUCTO: number;
    ESPECIE: number;
    PRECIO: number;
    UNIDAD: number;
    CH: string;
    PUESTO_EN: number;
}

export interface ASTENCUESTADESTINOPRODUCCION2 {
    ID_ENCUESTA: number;
    PRODUCTO: number;
    ESPECIE: number;
    DESTINO: number;
    PORCENTAJE: number;
    PRODUCCION_M3: number;
    ATRAVESDE: string;
}

export interface ASTENCUESTAPRODUCCIONESPECIE2 {
    AST_ENCUESTA_DESTINO_PRODUCCION_2: ASTENCUESTADESTINOPRODUCCION2[];
    ID_ENCUESTA: number;
    PRODUCTO: number;
    ESPECIE: number;
    PORCENTAJE: number;
    PRODUCCION_M3: number;
}

export interface ASTENCUESTASUBPRODUCTO {
    ID_ENCUESTA: number;
    TIPO_SUBPRODUCTO: number;
    ESPECIE: number;
    PORCENTAJE: number;
}

export interface ASTENCUESTAESPECIEC {
    AST_ENCUESTA_ABASTECIMIENTO: ASTENCUESTAABASTECIMIENTO[];
    AST_ENCUESTA_PRECIO: ASTENCUESTAPRECIO[];
    AST_ENCUESTA_PRODUCCION_ESPECIE_2: ASTENCUESTAPRODUCCIONESPECIE2[];
    AST_ENCUESTA_SUBPRODUCTO: ASTENCUESTASUBPRODUCTO[];
    ID_ENCUESTA: number;
    ESPECIE: number;
}

export interface ASTTTIPOSUBPRODUCTO {
    TIPO_SUBPRODUCTO: number;
    DESCRIPCION: string;
    ORDEN: number;
    VIGENTE: string;
}

export interface ASTENCUESTASUBPRODUCTODESTINO {
    AST_TTIPO_SUBPRODUCTO: ASTTTIPOSUBPRODUCTO;
    ID_ENCUESTA: number;
    TIPO_SUBPRODUCTO: number;
    DESTINO: number;
}

export interface ASTENCUESTACERTIFICACION {
    ID_ENCUESTA: number;
    ISO_9000: boolean;
    ISO_14001: boolean;
    ISO_OHSAS: boolean;
    CONOCE_PL: boolean;
    CNPL: boolean;
    CERTFOR: boolean;
    FSC: boolean;
}

export interface PEFEMPRESAASTILLAS {
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
    REGION1: number;
    PROVINCIA1: number;
    COMUNA1: number;
    ZONA: string;
    HUSO: number;
    UTMX: number;
    UTMY: number;
    CIUDAD: string;
}

export interface PEF_EMPRESA_UNIDAD_ASTILLAS {

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
    ANO_ULTIMO_CAMBIO: number;
    VIGENTE: string;
    REGION1: number;
    PROVINCIA1: number;
    COMUNA1: number;
    ZONA: string;
    HUSO: number;
    UTMX: number;
    UTMY: number;
    CIUDAD: string;
    REFERENCIA: any;
}
