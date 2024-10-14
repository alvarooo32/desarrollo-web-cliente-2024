/**
Ejercicio 2: Crea una función llamada countBy la cual recibirá dos números enteros
positivos: X e Y. Esta función debe devolver lo siguiente:
• Si alguno de los números es negativo devolverá un array vacío.
• Si no, devolverá con array con los Y primeros múltiplos de X empezando por el
1 (incluido)
 */

function countBy(x, y){

    let multiplos = [];

    if(x < 0 || y < 0){
        return [];
    } 
    for (let i = 1; i <= y; i++) {
        multiplos.push(x * i);
    }

    return multiplos;
}

console.log(countBy(3, 5)); 
console.log(countBy(-3, 5)); 
console.log(countBy(3, -5));