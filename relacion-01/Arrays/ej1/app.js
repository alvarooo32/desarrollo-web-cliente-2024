/**
 * Ejercicio 1: Crea una función que reciba un array de valores enteros (positivos y
negativos), y devuelva otro array con la suma parcial de cada elemento del array que se
pasa como parámetro.
Nota: La suma parcial de un elemento del array será la suma de ese elemento y todos los anteriores a él.
Ej: Para el array [1,2,3,4,5,6], el array resultante será [1,3,6,10,15,21]
 */

let array_original = [1,2,3,4,5,6];

function recibir_array(array_original){
    let array_modificado = [];
    let sumatorio = 0;
    for(let i = 0; i < array_original.length; i++){
        sumatorio += array_original[i];
        array_modificado.push(sumatorio);
    }

    return array_modificado;
}

array_modificado = recibir_array(array_original);

console.log(array_modificado);
