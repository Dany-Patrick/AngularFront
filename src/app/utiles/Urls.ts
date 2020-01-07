export class Urls {    
    
    static baseUrlTipo ="https://desastilla.infor.cl/astillas/api/AST/Tipo/" ;
    static baseUrl ="https://desastilla.infor.cl/astillas/api/Encuestas/" ;
  
    static rutas = {
        AST_ENCUESTA :`${Urls.baseUrl}ObtenerEncuesta`,
        PEF_TREGION :`${Urls.baseUrlTipo}Region`,
        PEF_TPROVINCIA :`${Urls.baseUrlTipo}Provincia`,
        PEF_TCOMUNA :`${Urls.baseUrlTipo}Comuna`,
        PEF_TCARGOS : `${Urls.baseUrlTipo}Cargos`,
        AST_ENCUESTADOR : `${Urls.baseUrlTipo}Encuestador`,        
        ASE_TCAUSA_PARALIZACION :`${Urls.baseUrlTipo}Causa_paralizacion`,
        ASE_TCAUSA_DESAPARECIDO :`${Urls.baseUrlTipo}Causa_desaparecido`,
        AST_ENCUESTA_SECCION :`${Urls.baseUrlTipo}Seccion`,
        PEF_TESPECIE :`${Urls.baseUrlTipo}Especie`
    };
  }