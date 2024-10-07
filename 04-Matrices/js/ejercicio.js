//EJ CLASE - 7/10/24
//Solicito filas y numeros
function RecogerNum(msj){
    let a = prompt(msj);
    while(isNaN(a)){
      a = prompt("Error: introduce de nuevo un numero): ")
    }
    return a;
  }



//Solicito un valor numerico x fila en el q cada vez se multiplique por 3 
//si el numero es de solo una cifra se le pone un 0 delante 

function CreaYPintaMatriz(fila, columna){
    let matriz = new Array(columna);
    
    //Inicializamos matriz
    for(let i = 0; i < columna; i++){
      matriz[i] = new Array(fila);
    }
  
    //Rellenar valores
    let resultado = "";
    for (let i = 0; i < columna; i++){
        let n = RecogerNum("Introduce un numero");
        for (let j = 0; j < fila; j++){
            matriz[i][j] = n * (j+1);
            if(matriz[i][j] < 10){
                resultado += "0"+ matriz[i][j]+" ";
            }else{
                resultado += matriz[i][j]+" ";
            }
      }
      console.log(resultado);
      resultado = "";
    }
  }

let nfilas = RecogerNum("Introduce el numero de filas");
let ncolumnas = RecogerNum("Introduce el numero de columnas");

CreaYPintaMatriz(nfilas, ncolumnas);
