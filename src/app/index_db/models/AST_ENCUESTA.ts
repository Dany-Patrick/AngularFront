
export  class AST_ENCUESTA {

    
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
  CAUSA_PARALIZACION?: number  | null;
  SITUACION_ACTUAL: string;
  NOMBRE_PROPIETARIO: string;
  NOMBRE_GERENTE: string;
  ANOS_EXPERIENCIA?: any  | null;
  C_ENCUESTADOR?: number | null;
  FECHA_ENCUESTA?: string | null;
  NOMBRE_ENCUESTADO: string;
  CARGO_ENCUESTADO?: number | null;
  OBS: string;
  PRODUCCION_ANUAL?: number  | null;
  UNIDAD_PROD_ANUAL?: number  | null;
  PRODUCCION_M3?: number  | null;
  PRODUCCION_ANUAL_SC?: number  | null;
  UNIDAD_PROD_ANUAL_SC?: number  | null;
  PRODUCCION_SC_M3?: number  | null;
  PRODUCCION_ANUAL_CC?: number  | null;
  UNIDAD_PROD_ANUAL_CC?: number  | null;
  PRODUCCION_CC_M3?: number  | null;
  PRODUCCION_TURNO?: number  | null;
  UNIDAD_PROD_TURNO?:number  | null;
  PRODUCCION_TURNO_M3?: number  | null;
  CAPACIDAD_MAXIMA_TURNO?: number  | null;
  UNIDAD_CAP_MAXIMA_TURNO?: number  | null;
  CAPACIDAD_MAXIMA_TURNO_M3?: number  | null;
  CAPACIDAD_ANUAL?: number  | null
  UNIDAD_CAP_ANUAL?: any   | null;
  CAPACIDAD_ANUAL_M3:number  | null;
  MESES_TRABAJADOS?: number  | null;
  DIAS_TRAB_MES?: number  | null;
  TURNOS_DIA?: number  | null;
  HORAS_TURNO : number  | null;
  PRODUCCION_ESTIMADA?: number  | null;
  UNIDAD_PROD_ESTIMADA?: number  | null;
  PRODUCCION_ESTIMADA_M3?: number  | null;
  PRODUCCION_ESTIMADA_SC?: number  | null;
  UNIDAD_PROD_ESTIMADA_SC?: number  | null;
  PRODUCCION_ESTIMADA_SC_M3?: number  | null;
  PRODUCCION_ESTIMADA_CC?: number  | null;
  UNIDAD_PROD_ESTIMADA_CC?: number  | null;
  PRODUCCION_ESTIMADA_CC_M3?: number  | null;
  VARIACION_PRODUCCION_ESTIMADA?: number  | null;
  VARIACION_PRODUCCION_ESTIMADA_CC?: number  | null;
  VARIACION_PRODUCCION_ESTIMADA_SC?: number  | null;
  CODIGO_ANTIGUO?: number  | null;
  VOLUMEN_M3?: number  | null;
  ESTRATO?: any  | null;
  USUARIO_INGRESO: number;
  EMAIL_ENCUESTADO: string;
  CELULAR_ENCUESTADO: string;
  ROTACION_OPERARIOS?: any  | null;
  NOMBRE_EMPRESA_TRAVES?: any  | null;
  FECHA_ACTUALIZACION?: any  | null;
  COMPLETITUD?: any  | null;
  CAUSA_DESAPARECIDO?: any  | null;
  ESTADO_ENCUESTA: string;

    constructor(
        ID_ENCUESTA: number,
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
        CAUSA_PARALIZACION: number,
        SITUACION_ACTUAL: string,
        NOMBRE_PROPIETARIO: string,
        NOMBRE_GERENTE: string,
        ANOS_EXPERIENCIA: any,
        C_ENCUESTADOR: number,
        FECHA_ENCUESTA: string,
        NOMBRE_ENCUESTADO: string,
        CARGO_ENCUESTADO: number,
        OBS: string,
        PRODUCCION_ANUAL: number,
        UNIDAD_PROD_ANUAL: number,
        PRODUCCION_M3: number,
        PRODUCCION_ANUAL_SC: number,
        UNIDAD_PROD_ANUAL_SC: number,
        PRODUCCION_SC_M3: number,
        PRODUCCION_ANUAL_CC: number,
        UNIDAD_PROD_ANUAL_CC: number,
        PRODUCCION_CC_M3: number,
        PRODUCCION_TURNO: number,
        UNIDAD_PROD_TURNO: number,
        PRODUCCION_TURNO_M3: number,
        CAPACIDAD_MAXIMA_TURNO: number,
        UNIDAD_CAP_MAXIMA_TURNO: number,
        CAPACIDAD_MAXIMA_TURNO_M3: number,
        CAPACIDAD_ANUAL: number,
        UNIDAD_CAP_ANUAL: any,
        CAPACIDAD_ANUAL_M3: number,
        MESES_TRABAJADOS: number,
        DIAS_TRAB_MES: number,
        TURNOS_DIA: number,
        HORAS_TURNO: number,
        PRODUCCION_ESTIMADA: number,
        UNIDAD_PROD_ESTIMADA: number,
        PRODUCCION_ESTIMADA_M3: number,
        PRODUCCION_ESTIMADA_SC: number,
        UNIDAD_PROD_ESTIMADA_SC: number,
        PRODUCCION_ESTIMADA_SC_M3: number,
        PRODUCCION_ESTIMADA_CC: number,
        UNIDAD_PROD_ESTIMADA_CC: number,
        PRODUCCION_ESTIMADA_CC_M3: number,
        VARIACION_PRODUCCION_ESTIMADA: number,
        VARIACION_PRODUCCION_ESTIMADA_CC: number,
        VARIACION_PRODUCCION_ESTIMADA_SC: number,
        CODIGO_ANTIGUO: number,
        VOLUMEN_M3: number,
        ESTRATO: any,
        USUARIO_INGRESO: number,
        EMAIL_ENCUESTADO: string,
        CELULAR_ENCUESTADO: string,
        ROTACION_OPERARIOS: any,
        NOMBRE_EMPRESA_TRAVES: any,
        FECHA_ACTUALIZACION: any,
        COMPLETITUD: any,
        CAUSA_DESAPARECIDO: any,
        ESTADO_ENCUESTA: string
   
        ) {



            this.ID_ENCUESTA= ID_ENCUESTA,
            this.ANO= ANO,
            this.RUT_EMPRESA=RUT_EMPRESA,
            this.CODIGO_UNIDAD= CODIGO_UNIDAD,
            this.REGION= REGION,
            this.PROVINCIA= PROVINCIA,
            this.COMUNA= COMUNA,
            this.SELECCION= SELECCION,
            this.TIPO_MOVILIDAD= TIPO_MOVILIDAD,
            this.TIPO_PLANTA=TIPO_PLANTA,
            this.TIPO_EQUIPO=TIPO_EQUIPO,
            this.SITUACION= SITUACION,
            this.CAUSA_PARALIZACION= CAUSA_PARALIZACION,
            this.SITUACION_ACTUAL= SITUACION_ACTUAL,
            this.NOMBRE_PROPIETARIO= NOMBRE_PROPIETARIO,
            this.NOMBRE_GERENTE= NOMBRE_GERENTE,
            this.ANOS_EXPERIENCIA =ANOS_EXPERIENCIA,
            this.C_ENCUESTADOR = C_ENCUESTADOR,
            this.FECHA_ENCUESTA = FECHA_ENCUESTA,
            this.NOMBRE_ENCUESTADO= NOMBRE_ENCUESTADO,
            this.CARGO_ENCUESTADO= CARGO_ENCUESTADO,
            this.OBS= OBS,
            this.PRODUCCION_ANUAL= PRODUCCION_ANUAL,
            this.UNIDAD_PROD_ANUAL= UNIDAD_PROD_ANUAL,
            this.PRODUCCION_M3= PRODUCCION_M3,
            this.PRODUCCION_ANUAL_SC= PRODUCCION_ANUAL_SC,
            this.UNIDAD_PROD_ANUAL_SC= UNIDAD_PROD_ANUAL_SC,
            this.PRODUCCION_SC_M3= PRODUCCION_SC_M3,
            this.PRODUCCION_ANUAL_CC= PRODUCCION_ANUAL_CC,
            this.UNIDAD_PROD_ANUAL_CC= UNIDAD_PROD_ANUAL_CC,
            this.PRODUCCION_CC_M3= PRODUCCION_CC_M3,
            this.PRODUCCION_TURNO=PRODUCCION_TURNO,
            this.UNIDAD_PROD_TURNO= UNIDAD_PROD_TURNO,
            this.PRODUCCION_TURNO_M3= PRODUCCION_TURNO_M3,
            this.CAPACIDAD_MAXIMA_TURNO= CAPACIDAD_MAXIMA_TURNO,
            this.UNIDAD_CAP_MAXIMA_TURNO= UNIDAD_CAP_MAXIMA_TURNO,
            this.CAPACIDAD_MAXIMA_TURNO_M3= CAPACIDAD_MAXIMA_TURNO_M3,
            this.CAPACIDAD_ANUAL= CAPACIDAD_ANUAL,
            this.UNIDAD_CAP_ANUAL= UNIDAD_CAP_ANUAL,
            this.CAPACIDAD_ANUAL_M3= CAPACIDAD_ANUAL_M3,
            this.MESES_TRABAJADOS= MESES_TRABAJADOS,
            this.DIAS_TRAB_MES= DIAS_TRAB_MES,
            this.TURNOS_DIA= TURNOS_DIA,
            this.HORAS_TURNO= HORAS_TURNO,
            this.PRODUCCION_ESTIMADA= PRODUCCION_ESTIMADA,
            this.UNIDAD_PROD_ESTIMADA= UNIDAD_PROD_ESTIMADA,
            this.PRODUCCION_ESTIMADA_M3= PRODUCCION_ESTIMADA_M3,
            this.PRODUCCION_ESTIMADA_SC= PRODUCCION_ESTIMADA_SC,
            this.UNIDAD_PROD_ESTIMADA_SC= UNIDAD_PROD_ESTIMADA_SC,
            this.PRODUCCION_ESTIMADA_SC_M3=PRODUCCION_ESTIMADA_SC_M3,
            this.PRODUCCION_ESTIMADA_CC= PRODUCCION_ESTIMADA_CC,
            this.UNIDAD_PROD_ESTIMADA_CC= UNIDAD_PROD_ESTIMADA_CC,
            this.PRODUCCION_ESTIMADA_CC_M3= PRODUCCION_ESTIMADA_CC_M3,
            this.VARIACION_PRODUCCION_ESTIMADA= VARIACION_PRODUCCION_ESTIMADA,
            this.VARIACION_PRODUCCION_ESTIMADA_CC= VARIACION_PRODUCCION_ESTIMADA_CC,
            this.VARIACION_PRODUCCION_ESTIMADA_SC= VARIACION_PRODUCCION_ESTIMADA_SC,
            this.CODIGO_ANTIGUO= CODIGO_ANTIGUO,
            this.VOLUMEN_M3= VOLUMEN_M3,
            this.ESTRATO= ESTRATO,
            this.USUARIO_INGRESO=USUARIO_INGRESO,
            this.EMAIL_ENCUESTADO= EMAIL_ENCUESTADO,
            this.CELULAR_ENCUESTADO= CELULAR_ENCUESTADO,
            this.ROTACION_OPERARIOS= ROTACION_OPERARIOS,
            this.NOMBRE_EMPRESA_TRAVES= NOMBRE_EMPRESA_TRAVES,
            this.FECHA_ACTUALIZACION= FECHA_ACTUALIZACION,
            this.COMPLETITUD= COMPLETITUD,
            this.CAUSA_DESAPARECIDO= CAUSA_DESAPARECIDO,
            this.ESTADO_ENCUESTA= ESTADO_ENCUESTA
       
    }
}
