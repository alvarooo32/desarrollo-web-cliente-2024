/**Ejercicio 10: Crea un script que filtre una lista de nombres y devuelva otra lista solo con
los que son amigos tuyos.
Como eres una persona muy “especial”, tú solo eres amigo/a de aquellas personas cuyo
nombre se componga exactamente de 4 letras.
Ejemplo:
Entrada={Luis", "Estela", "Ángel", "Enya", "Jose Antonio"}
Salida = {"Luis", "Enya"}
Entrada = {"Joaquín", "Manuel", "Carlos"}
Salida = {}
Suponemos que los array son correctos y tienen nombres.
Importante: hay que respetar el orden de los nombres en la salida */

const nombre = [
    "Juan",
    "Ana",
    "Sara",
    "David",
    "Pablo",
    "Luz",
    "Mark",
    "Irene",
    "Nina",
    "Alba",
];

function filtrarAmigos(nombre){
    let amigos = [];
    for(let i = 0; i < nombre.length; i++){
        if(nombre[i].length == 4){
            amigos.push(nombre[i]);
        }
    }
    return amigos;
}
function recogeNombre(){
    let nombresUsu = prompt("Introduce los nombrea separados por una coma:");
   
    let nombresNuevo = nombresUsu.split(",");
   
    nombresNuevo = filtrarAmigos(nombre);

    return nombresNuevo
}
console.log(recogeNombre());
console.log(filtrarAmigos(nombre));


let amigosJose = filtrarAmigos(nombre);

console.log(nombre);
console.log(amigosJose);
