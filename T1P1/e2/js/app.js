/**Ejercicio 2 (2,5 puntos): Realiza un script que pida (mediante prompt) X números al 
usuario (máximo 10, completando la finalización de incorporación de números 
cuando el usuario introduce un “.”) y a continuación, muestre un alert con el número 
de elementos que se encuentran por encima de la media y los elementos que superan 
el doble del valor de la media (ver ejemplo). 
Hay que controlar que los valores introducidos son correctos y, en caso de que una 
no lo sea, volver a pedirlo. 
Notas: 
 no está permitido el uso de arrays en este ejercicio. 
 Se interrumpirá la petición de números cuando el usuario introduzca un “.” 
 Puedes lanzar la ejecución del script mediante un botón. 
Ejemplo: 1,2,3,4,-5,6,7,8,-10,20. Media: 3,6 
Alert  Supera la media: 4, 6, 7, 8, 20. Supera el doble de la media: 8, 20   */


    for(let i=0; i<10; i++){
        let copia;
        let cadena = " ";
        let num = prompt("Introduce un numero: ");
        num = copia; //para guardar el numero anterior
        cadena = copia + "," + num;
    }
    
    if(cadena.split(",") < 5){
        alert("Esta por encima de la media: "+cadena)
    }else{
        alert("Esta por debajo de la media: "+cadena)
    }
    alert(num)
    