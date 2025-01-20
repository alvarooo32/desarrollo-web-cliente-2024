/**Ejercicio 3: Crea un script que pida al usuario un numero entero positivo N mayor a 2.
Hay que controlar que el numero introducido sea correcto. Si no es así se volverá a pedir.
A continuación, debe crearse una matriz NxN rellena con los resultados de la tabla de
multiplicar de N (empezando en 1). Finalmente, muestra por consola la matriz “en forma
de matriz”
Ej: Para el número 3, el programa debe mostrar
03 06 09
12 15 18
21 24 27
Ejercicio 3: Concatenar dos arrays A y B de la siguiente forma: A0, B0, A1, B1, A2,
CFGS Desarrollo de Aplicaciones Web
MEDAC, Instituto Oficial de Formación Profesional
B2, ..., An, Bn. Los vectores pueden tener longitud distinta (requiere controlarlo) */

function recogeNombres(){
  array = prompt("Inserta diferentes nombres separados por ','");
  arraySeparado = array.split(",");
  return arraySeparado;
}

array1 = recogeNombres();
array2 = recogeNombres();

function concatenarArrays(array1, array2){
  concatenado = [];

  let maxLength = (array1.length > array2.length) ? array1.length : array2.length;
    for (i = 0; i < maxLength; i++) {
      if (i < array1.length) concatenado.push(array1[i]);
      if (i < array2.length) concatenado.push(array2[i]);
    }
  return concatenado;
}
console.log(concatenarArrays(array1,array2));