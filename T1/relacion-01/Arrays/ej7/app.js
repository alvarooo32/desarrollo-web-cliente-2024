/**Ejercicio 7: Quitar los elementos repetidos de un array.
var miArray=new Array();
miArray[0]=200;
miArray[1]=40;
miArray[2]=400;
miArray[3]=40;
miArray[4]=40 */ 

function eliminarRepetidos(miarray){
    let resultado = [];
    for(let i = 0; i< miarray.length; i++){
        if (resultado.indexOf(miarray[i]) === -1) {
            //indexOf verifico si el elemento ya existe en el array
            //si te devuelve -1 es q no esta repe asi que lo añado con el push
            resultado.push(miarray[i]); 
        }
    }
    return resultado;
}

let numeros = [1,2,3,1,4,5,4,2,3,7,6,4];
console.log(eliminarRepetidos(numeros));