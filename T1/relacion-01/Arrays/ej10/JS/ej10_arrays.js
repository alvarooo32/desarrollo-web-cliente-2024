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
Importante: hay que respetar el orden de los nombres en la salida. */

// Lista de nombres de ejemplo
const nombres = [
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

function filtrarAmigos(nombres) {
  let nombresFiltrados = [];
  
  for (let i = 0; i < nombres.length; i++) {
    if (nombres[i].length == 4) {
      nombresFiltrados.push(nombres[i]);
    }
  }
  return nombresFiltrados;
}

//EJERCICIO CON EL SPLIT

function recogeNombres(){
  nombresUsu = prompt("Inserta diferentes nombres separados por ','");

  nombresNuevo = nombresUsu.split(",");

  nombresNuevo = filtrarAmigos(nombresNuevo);

  return nombresNuevo;
}

console.log(recogeNombres());
console.log(filtrarAmigos(nombres));