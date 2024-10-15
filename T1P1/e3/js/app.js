/**Ejercicio 3 (2,5 puntos): 
Desarrolla un script que pida (mediante prompt) al usuario un número entero, 
positivo comprendido entre 5 y 10 (incluidos) y a continuación cree un array del 
tamaño indicado por ese número (hay que controlar que el número introducido es 
correcto. Si no es así, hay que volver a pedirlo). 
Rellena ese array con números aleatorios enteros que resulten de multiplicar el 
número introducido por el número aleatorio resultante de lo siguiente: 
Math.floor(Math.random() * 100) –> números aleatorios de 0 a 99.  
 Muestra por consola cada celda del array separada por espacio. 
 Muestra por consola un mensaje indicando todos los valores que superan la 
media resultante de la suma de todos los elementos del array. 
Puedes lanzar la ejecución del script mediante un botón.  */

    function recogerNum(msj){
        let a = prompt(msj);
        while(isNaN(a) && a >= 5 && a <= 10){
        a = prompt("Error: introduce de nuevo el numero: ")
        }
        return a;
    }
    function random(max, min){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let tamaño = recogerNum("Introduce un numero del 1 al 5: ");
    let array =[];
    for(let i=0; i<tamaño; i++){
        array[i] = random(99,0)*tamaño+" ";
        if(array[i] > 5){
            console.log("El numero: "+array[i]+" esta por encima de la media")
        }else{
            console.log("El numero: "+array[i]+" esta por debajo de la media")
        }
    }
    
    console.log(array);
    