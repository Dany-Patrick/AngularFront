import Dexie from 'dexie';

export class DexieService extends Dexie {
  // Declara genera una instancia de base de datos llamada Ng2DexieExample
  constructor() {
    super('app_db_Astillas');
    this.version(1).stores({
      //Nombre de la base de datos con una key autoincrementable
      AST_ENCUESTA: 'ID_ENCUESTA',
      AST_ENCUESTA_ESPECIE_C: 'ID_ENCUESTA',
      AST_ENCUESTA_ABASTECIMIENTO: 'ID_ENCUESTA'

    });
  }
}