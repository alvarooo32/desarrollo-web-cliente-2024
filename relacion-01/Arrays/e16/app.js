/*
Ejercicio 16: Un restaurante nos ha encargado una aplicación para colocar a los clientes
en sus mesas. En una mesa se pueden sentar de 0 (mesa vacía) a 4 comensales (mesa
llena).
El funcionamiento es el siguiente:
Cuando llega un cliente se le pregunta cuántos son. Como el programa no está preparado
para colocar a grupos mayores a 4, si un cliente solicita una mesa con más comensales
(pej, 6), el programa dará el mensaje “Lo siento, no admitimos grupos de 6, haga grupos
de 4 personas como máximo e intente de nuevo” y volverá a preguntar.
Para cada grupo nuevo que llega, se busca siempre la primera mesa libre (con 0 personas).
Si no quedan mesas libres, se busca una donde haya hueco para todo el grupo (por
ejemplo, si el grupo es de dos personas, se podrá colocar en mesas donde haya una o dos
personas).
Cada vez que se sientan nuevos clientes se debe mostrar el estado de las mesas.
Los grupos no se pueden romper, aunque haya huecos sueltos suficientes.
A tener en cuenta:
• El programa comienza pidiendo el número de mesas que tiene el restaurante.
• Inicialmente, las mesas se cargan con valores aleatorios entre 0 y 4 y mostrará por
pantalla como quedan las mesas inicialmente.
• El programa seguirá pidiendo comensales hasta que se introduzca un valor
negativo.
Ejemplo de ejecución:
/El usuario ha metido un valor de 10
Estado de las mesas: 3 2 0 2 4 1 0 2 1 1
El usuario pide una mesa para 2.
Por favor, Siéntese en la mesa 3
Estado de las mesas: 3 2 2 2 4 1 0 2 1 1
El usuario pide una mesa para 4
Por favor, Siéntese en la mesa 7
Estado de las mesas: 3 2 2 2 4 1 4 2 1 1
El usuario pide una mesa para 3
Por favor, Siéntese en la mesa 6
Estado de las mesas: 3 2 2 2 4 4 4 2 1 1
El usuario pide una mesa para 4
Lo siento, no queda sitio en el restaurante.
Estado de las mesas: 3 2 2 2 4 1 4 2 1 1
*/

//pregunta cuantas mesas tiene el restaurante
let nMesas = prompt("¿cuantas mesas tiene el restaurante? ");
let nClientes = 0;
do{
    nClientes = prompt ("¿cuantos comensales sois? ")
}while(nClientes > 4);


function mesas(nMesas){
    let llenarMesas = Math.floor(Math.random() * (4 - 0 + 1) + 0); //Math.floor para que no salgan decimales //Maximo 4 minimo 0
    for (i = 0; i < nMesas.lenght; i++){
        let array =[clientes];
    }
}