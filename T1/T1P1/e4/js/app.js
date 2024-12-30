//A
function CrearRellenarMatriz(n){
    let array = new Array(n);
    
    //Inicializamos
    for(let i = 0; i < n; i++){
    array[i] = new Array(n);
    }

    let resultado = "";

    //Rellenar valores
  for (let i = 0; i < n; i++){
    for (let j = 0; j < n; j++){
      array [i][j] =  Math.floor(Math.random() * (99 - 1 + 1)) + 1;
      if(array[i][j] < 10){
        resultado += "0"+ array[i][j]+" ";
    }else{
        resultado += array[i][j]+" ";
    }
    }
    console.log(array[i]);//muestro el array 
    console.log(resultado);//muestro el array con un 0 delante para los numero menores de 10
  }
}


  
let n = prompt("Dime el tamaño de filas: ");
while (n <= 2 && n >= 5){
    n = prompt("Dime el tamaño de filas: ");
}
  
CrearRellenarMatriz(n);


