//alert("Hola mundo")

//"use stricts";

//Activamos Quokka con ctrl+shift+p (Asi sabemos si alguna linea no funciona)

console.log("Hola Mundo");

nombre = "Alvaro Saborido";
console.log(nombre);
//alert(nombre);

var nombre;
let a = 3;
let b = "2";
let c = a + b;
console.log(c);
console.log(typeof a);
console.log(typeof b);
let ok = true;
console.log(typeof ok);
console.log(a + nombre);

nombre = "Pepe";
console.log(a + nombre);
console.log(typeof nombre);

if (b > a) {
  console.log("");
} else {
  console.log("");
}

// Quokka ctrl + shift + p

let objeto1 = Symbol(1); //Es como crear una pegatina única con una descripción no existen dos iguales misma funcion que un ID.
console.log(typeof objeto1); //typeof te dice qué tipo de cosa es una variable.
console.log(objeto1);

let objeto2 = Symbol(2);
console.log(typeof objeto2);
console.log(objeto2);

let horaDia = 23;
let mensaje = "";

if (horaDia >= 6 && horaDia < 12) {
  mensaje = "Buenos días.";
} else if (horaDia >= 12 && horaDia < 18) {
  mensaje = "Buenas tardes.";
} else if ((horaDia >= 18 && horaDia <= 24) || (horaDia >= 1 && horaDia < 6)) {
  mensaje = "Buenas noches.";
} else {
  mensaje = "Franja horaria incorrecta.";
}

console.log("Son las " + horaDia + " horas, " + mensaje);

let z = 2;
let y = "2";

if (z == y) {
  console.log("son iguales");
}
if (z === y) {
  console.log("no son iguales");
} else {
  console.log("no son iguales");
}

/*
Operador ternario
-El operador tenario de JS es un operador condicional que tiene tres operabndos
-Se usa para tomar una decision basdada en una expresion que se evalua como true o falso
-Es una forma abreviada de la sentneciaif else que crea codigo mas limpio, facil de entender
y facil de escribir
*/

let resultado = z === y ? 1 : 2;
console.log(resultado);

let miNumero = "18";
console.log(miNumero);

if (isNaN(miNumero)) {
  console.log("no es un numero");
}
miNumero = Number(miNumero);
console.log(miNumero);

let miString = String(miNumero);
console.log(miNumero);

let contador = 0;
while (contador < 3) {
  console.log(contador);
  contador++;
}
let cont = 0;

do {
  console.log(cont++);
} while (cont < 4);

for (let conta = 0; conta < 5; conta++) {
  console.log(conta);
}

let mes = 11;
let estacion = "desconocida";

switch (mes) {
  case 12 || 1 || 2:
    estacion = "Invierno";
    break;
  case 3 || 4 || 5:
    estacion = "Primavera";
  case 6 || 7 || 8:
    estacion = "Verano";
  case 9 || 10 || 11:
    estacion = "Otoño";
  default:
    estacion = "Valor Incorrecto";
}
console.log(estacion);

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log("c1" + i + "c2" + j);
    continue;
    if (j == 2) {
      //break;
      j = 4;
      i = 3;
    }
  }
}
const objeto3 = { nombre: "Alvaro", apellido: "Saborido", edad: "20" };
console.log(typeof objeto3);

let marcaCoches = ["BMW", "Audi", "Renault", "Ford"];
console.log(typeof marcaCoches);

for (i = 0; i < marcaCoches.length; i++) {
  console.log(marcaCoches[i]);
}

//Definir clase
class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }
  toString() {
    return `${this.nombre} ${this.apellido}, edad: ${this.edad}`;
  }
}
console.log(Persona);
console.log(typeof Persona);

//Probar l aclase Persona
let persona1 = new Persona("Juan", "Perez", 23);
console.log(persona1);
let nombre2 = persona1.toString();
console.log(nombre2);

let persona2 = new Persona(objeto3.nombre, objeto3.apellido, objeto3.edad);
console.log(persona2.toString());

//Funciones
var aa = 4;
var bb = 5;

function miFuncion(xx, yy) {
  let aa = 7;
  let bb = 10;
  console.log("Suma: " + (xx + yy));
  console.log(`Suma: "+${aa + bb}`);
  return xx + yy;
}

let result = miFuncion(7, 8);
console.log(result);

console.log(typeof miFuncion);

// function Sumar() {
//     let a = prompt("Introduce un número (a): ");
//     while(isNaN(a)){
//         a = prompt("Error: introduce un número (a): ");
//     }

//     let b = window.prompt("Introduce un número (b): ");
//     while(isNaN(b)){
//         b = prompt("Error: introduce un número (b): ");
//     }

//     let resultado = Number(a) + Number(b);

//     alert(`La suma total es: ${resultado}`);
// }
// Sumar();

// Vamos a realizar una Calculadora.
// Solicitamos número A, número B y operación (+, -. * y /)

function recogerNum() {
  let num1 = prompt("Introduce el primer numero: ");
  while (isNaN(num1)) {
    num1 = prompt("Error: introduce un número bien el primer numero : ");
  }

  let num2 = prompt("Introduce el segundo numero: ");
  while (isNaN(num2)) {
    num2 = prompt("Error: introducebien el segundo numero: ");
  }
  return num1,num2
}

function Suma() {
  recogerNum();
  let suma = num1 + num2;
  alert("el resultado es: ", suma);
}

function Resta() {
  recogerNum();
  let resta = num1 - num2;
  alert("el resultado es: ", resta);
}
function Multiplicacion() {
  recogerNum();
  let multiplicaion = num1 * num2;
  alert("el resultado es: ", multiplicaion);
}
function Division() {
  recogerNum();
  let division = num1 / num2;
  alert("el resultado es: ", division);
}

function Calculadora() {
  let operacion;
  valido = false;

  do {
    operacion = prompt("Elige Opcion: 1 suma / 2 resta / 3 multiplicaion / 4 division");
    switch (operacion) {
      case "1":
        Suma();
        valido = true;
        break;
      case "2":
        Resta();
        valido = true;
        break;
      case "3":
        Multiplicacion();
        valido = true;
        break;
      case "4":
        Division();
        valido = true;
        break;
    }
  } while (nombre == false);
}
Calculadora();
