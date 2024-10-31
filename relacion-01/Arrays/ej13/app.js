/**Ejercicio 13: Usando el array de colores del ejercicio anterior, crea un script que solicite
8 palabras al usuario y las almacene en otro array.
Ordena ese array (el del usuario) de forma que, si aparecen colores del array de colores,
estos queden al principio del array y el resto de palabras al final. Muestralo por consola.
Ejemplo:
Array de palabras del usuario:
casa blue green orden brown bombilla bici pink */

let colores = ["red", "yellow", "green", "white", "blue", "brown", "pink", "black"];
let introduce = prompt('Introduce 8 palabras: ');
//"casa blue green orden brown bombilla bici pink";
        
let palabras = introduce.split(" ");
let resultado = [];

let coloresEncontrados = palabras.filter(palabra => colores.includes(palabra));
let otrasPalabras = palabras.filter(palabra => !colores.includes(palabra));

let arrayResultante = coloresEncontrados.concat(otrasPalabras);

console.log("Array original del usuario:", palabras);
console.log("Array resultante:", arrayResultante);