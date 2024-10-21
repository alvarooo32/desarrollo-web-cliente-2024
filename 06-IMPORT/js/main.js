//importamos
import{saludar, despedida} from "./saludos";

//utilizar las funciones
console.log(saludar("Jose Miguel"));
console.log(despedida("Jose"));

//otra manera de importar
import * as miExport from "./saludos.js" //para importarlo todo
//utilizar las funciones
console.log(miExport.saludar("Jose"));
console.log(miExport.despedida("Jose Alvarez"));

