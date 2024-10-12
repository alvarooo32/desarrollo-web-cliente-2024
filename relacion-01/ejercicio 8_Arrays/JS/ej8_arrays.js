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