/*Ejercicio 8: Escriba una función que reciba dos arrays y devuelva un nuevo array con
los elementos que solo aparecen una vez en total (ya sea en el primer o en el segundo
array). El orden debe ser: primero los que están en el primer array y luego los que están
en el segundo.
Ejemplos:
[1, 2, 3, 3] y [3, 2, 1, 4, 5]) ==> [4, 5]
["Ray", "Jose", "Dani"] y ["Dani", "Jose", "Ivan"]) ==> ["Ray","Ivan"} 
 */
function copiaUnicos(array1, array2){
    let arrayFinal = [];

    //Agregar elementos unicos de array1 que no esten repetidos en array1 ni esten en array2
    for(let i=0; i<array1.length; i++){
        if(array2.indexOf(array1[i]) === -1 && !repetidos(array1, array1[i])){ //indexOf => Verifica si un elemento existe en una cadena o array.
            arrayFinal.push(array1[i]);
        }
    }
    //agregar elementos unicos de array2 que no esten repetidos en el array 2 ni esten en el array1
    for(let i=0; i<array2.length; i++){
        //if(array1.indexOf(array2[i]) === -1 && !repetidos(array2, array2[i])){
            //if(array1.indexOf(array2[i]) === -1 && esUnico(array2, array2[i])){
            if(!array.includes(array[1]) && !repetidos(array2, array2[i])){
                arrayFinal.push(array2[i]); //.push => agraga elementos al array
            }
        //}
        return arrayFinal;
    }
    //let resultado = copiaUnicos([77,"ciao",8,"ciao",42],[77,42,9]);
    //console.log(resultado);//Salida: [9,9];
}
esUnico([77,"ciao",8,"ciao",42],"ciao") //devuelve false pq se repite ciao
function esUnico(array, elem){
    return array.indexOf(elem) === array.lastIndexOf(elem);
}
function repetidos(array, elem){
    let cont = 0;
    for (let i = 0; i<array.length; i++){
        if(array[i] === elem){
            cont++;
        }
        if(cont == 1){
            return false;
        }else{
            return true;
        }
    }
}
let resultado = copiaUnicos([77,"ciao",8,"ciao",42],[77,42,9]);
console.log(resultado);//Salida: [9,9]