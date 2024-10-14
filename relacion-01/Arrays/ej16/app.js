/**Ejercicio 16: Un restaurante nos ha encargado una aplicación para colocar a los clientes
en sus mesas. En una mesa se pueden sentar de 0 (mesa vacía) a 4 comensales (mesa
llena).
El funcionamiento es el siguiente:

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
//El usuario ha metido un valor de 10
Estado de las mesas: 3 2 0 2 4 1 0 2 1 1
El usuario pide una mesa para 2.
Por favor, Siéntese en la mesa 3
 */

//relleno el array
function creaRestaurante(){
    let tam = prompt("Introduce el numero de mesas del restaurante");
    let restaurante = [];
    for(let i = 0; i < tam; i++){
        restaurante.push(Math.floor(Math.random() * (4 - 0 + 1) + 0));
    }
    console.log("El estado de las mesas: " + restaurante);
    return restaurante;
}

function numeroComensales(){
    let num;
    do{
        num = parseInt(prompt("Introduce el numero de comensales: "));
    }while(isNaN(num));
    return num;
}

function añadir_comensales(num, restaurante){
    let acomodado = false;
    let lleno = true;
    
    for(let i = 0; i < restaurante.length; i++){
        if(restaurante[i] + num <= 4){
            if(num > 0){
                restaurante[i] += num;
            }
            console.log("Por favor, siéntese en la mesa " + (i + 1));
            acomodado = true;
            break;
        }
    }
    if(!acomodado){
        console.log("Lo siento, no queda sitio en el restaurante.");
    }

    for(let i = 0; i < restaurante.length; i++){
        if(restaurante[i] < 4){ 
            lleno = false;
            break;
        }
    }
    if(lleno){
        console.log("El restaurante está completamente lleno.");
    }
}

let vips = creaRestaurante();
let num;
do{
    num = Number(numeroComensales());
    if(num > 0 || num < 4){
        añadir_comensales(num, restaurante);
    }
    console.log(restaurante);
}while(num > 0); 