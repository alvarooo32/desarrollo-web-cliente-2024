/**Ejercicio 8: Escriba una función que reciba dos arrays y devuelva un nuevo array con
los elementos que solo aparecen una vez en total (ya sea en el primer o en el segundo
array). El orden debe ser: primero los que están en el primer array y luego los que están
en el segundo.
Ejemplos:
[1, 2, 3, 3] y [3, 2, 1, 4, 5]) ==> [4, 5]
["Ray", "Jose", "Dani"] y ["Dani", "Jose", "Ivan"]) ==> ["Ray","Ivan"] */

function recogeNombres(){
  array = prompt("Inserta diferentes nombres separados por ','");
  arraySeparado = array.split(",");
  return arraySeparado;
}

array1 = recogeNombres();
array2 = recogeNombres();

function quitarIguales(array1, array2) {
  let arrayCorregido = [];

  for (let i = 0; i < array1.length; i++) {
    let encontrado = false;
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] == array2[j]) encontrado = true;
    }
    if (!encontrado) arrayCorregido.push(array1[i]);
  }

  for (let i = 0; i < array2.length; i++) {
    let encontrado = false;
    for (let j = 0; j < array1.length; j++) {
      if (array2[i] == array1[j]) encontrado = true;
    }
    if (!encontrado) arrayCorregido.push(array2[i]);
  }
  return arrayCorregido;
}

console.log(quitarIguales(array1, array2));