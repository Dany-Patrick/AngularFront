import Dexie from 'dexie';

export class DexieService extends Dexie {
  // Declara genera una instancia de base de datos llamada Ng2DexieExample
  constructor() {
    super('app_db_Astillas');
    this.version(1).stores({
      //Nombre de la base de datos con una key autoincrementable ++ID
      AST_ENCUESTA: 'ID_ENCUESTA',
      PEF_TREGION: 'ORDEN',
      PEF_TPROVINCIA: '++ID',
      PEF_TCOMUNA: '++ID',
      PEF_TCARGOS: '++ID',
      AST_ENCUESTADOR: 'C_ENCUESTADOR',
      ASE_TCAUSA_DESAPARECIDO: 'CAUSA_DESAPARECIDO',
      ASE_TCAUSA_PARALIZACION: 'CAUSA_PARALIZACION',
      AST_ENCUESTA_SECCION: '++ID',
      PEF_TESPECIE: '++ID',
      AST_TUNIDAD: '++ID',
      AST_TPLAZA: 'PLAZA',
      AST_TDESTINO_PRODUCCION: 'DESTINO',
      AST_TABASTECIMIENTO: '++ID',
      ASE_TTIPO_ESPECIALIZACION: '++ID',
      AST_TMAQUINARIA: '++ID',
      ASE_TTIPO_MONEDA: '++ID',
      ASE_TDESTINO_RESIDUO: '++ID , DESCRIPCION'
    });
  }
}