let autos = ["BMW", "Audi", "Volvo"];

console.log(autos);
console.log(typeof autos);

let item = new Array(1, 6);
console.log(item);
let items = new Array(6);
console.log(items);

//let pets = new Array('perro', 'gato', 'periquito');
let pets = ["perro", "gato", "periquito"];
console.log(pets);
console.log(pets.length);
console.log(pets[0]);

//Iterar en el Array
let len = pets.length;
for (i = 0; i < len; i++) {
  console.log(pets[i]);
}
pets.push("rana");
pets.push("loro");
console.log(pets[i]);
console.log(pets);
pets[2] = "leon";
pets[8] = "zebra";
console.log(pets);

items[2] = "toro";
console.log(items);

console.log(pets.pop()); //Saca el ultimo elemento
console.log(pets.pop());
console.log(pets);
console.log(pets.shift());
console.log(pets);


function log(msj) {
  console.log(msj);
}

const months = ['Jan', 'March', 'April', 'June'];
/** array.splice(inicio, eliminarConteo, item1, item2, ...)
    inicio: Índice donde comienza la modificación.
    eliminarConteo: Número de elementos a eliminar (opcional).
    item1, item2, ...: Elementos a añadir (opcionales).*/

months.splice(1, 0, 'Feb'); // Param 1 posicion. Param 2: 0 insertado en la posicion 1
console.log(months);
months.splice(1, 1, 'May'); //Param 1 posicion. Param 2: reemplaza en la posicion 1
console.log(months);

months.splice(5,0, 'July', 'Agost', 'Sept');//Param 1 posicion. Param 2: 0 insertado en la posicion 
console.log(months);

let eliminados = months.splice(3); //eliminas todo lo q hay mas haya del 4
console.log(eliminados);
console.log(months);

//Ordenacion
console.log(months.reverse()); //le da la vuelta
console.log(months.sort()); //ordena alfanumericamente

//Matrices
let matriz = [];
//let i = prompt("Dime el tamaño de la columna: ");

// for(let j = 0; j < i; j++){
//   matriz[j] = new Array(i);
// }

//Ordenaxion de arrays
console.log(months.reverse());
console.log(months.sort());//ordena el array alfanumericamente


//Partes de una palabra, frase, vectores,...delimitados por un separador
let cadena = 'Javascript es un lenguaje de programacion';
let vector = '12,34,45,6,7,9';

let palabras = cadena.split(' ');
let numeros = vector.split(',');

console.log(palabras);
console.log(numeros);

//busqueda de posicion
let posicion = months.indexOf('Jan');
console.log(posicion);

months.push('Apr');
months.push('Jun');

//slice
console.log(months.slice(2));//te da una copia desde esa plaza hasta el final
console.log();
console.log(months.slice(-1));

