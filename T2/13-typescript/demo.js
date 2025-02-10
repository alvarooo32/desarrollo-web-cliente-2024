//ctrl + shift + b para guardar
//ctrl + ñ para cambiar al termianl desde el code runner
//tsc demo.ts --w (Para que se compile al momento)
var mensaje1 = "Hola mundo";
console.log(mensaje1);
var numero = 140;
console.log(numero);
var esViernes = false;
console.log(esViernes);
var real = 1.43;
var binario = 5;
console.log(typeof binario);
var suma = real + binario + numero;
console.log(suma);
var comparacion;
comparacion = real > 2;
console.log(comparacion);
var octal = 37;
console.log(octal);
var cadena1 = "Hola";
var cadena2 = 'Hola';
var cadena3 = "El numero es ".concat(suma);
var unioncadenas = cadena1 + cadena2;
console.log(typeof cadena1);
console.log(typeof cadena2);
console.log(unioncadenas);
var arreglo1 = [1, 2, 3, 4];
var arreglo2 = [5, 6, 7, 8];
console.log(typeof arreglo1);
console.log(typeof arreglo2);
var arreglocadena = ["TS", "JS", "PHP"];
arreglocadena.push("23");
var tupla = ["Carmina", 30, true]; //Arrays con distintos tipos de datos
console.log(tupla[0]);
var semaforo;
(function (semaforo) {
    semaforo[semaforo["Rojo"] = 3] = "Rojo";
    semaforo[semaforo["Naranja"] = 4] = "Naranja";
    semaforo[semaforo["Verde"] = 5] = "Verde";
})(semaforo || (semaforo = {}));
;
semaforo.Naranja;
console.log(semaforo);
var valor = semaforo.Rojo;
var nose;
nose = "Hola";
nose = 30;
nose = null;
var personaCarmina = {
    nombre: "Carmina",
    apellido: "Cervera",
    edad: 52,
    estado: true
};
console.log(personaCarmina);
console.log(personaCarmina.edad);
// switch(valor){
//     case 3:
//         console.log("no pases");
//         break;
//     case 4:
//         console.log("Ten precaucion");
//         break;
//     case 5:
//         console.log("Puedes pasar");
//         break;
// }
