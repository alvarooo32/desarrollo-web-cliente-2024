/**Ejercicio 1 (1 punto).  Desarrolla un script que, al pulsar el botón correspondiente, pida 
al usuario una opción de conversión de monedas (1 para cambio a pesetas y 2 para 
cambio a dólares). A continuación de solicitar la opción debe solicitar el importe 
numérico a convertir y debe mostrar mediante un alert el resultado oportuno. 
Controla que la cantidad a convertir sea mayor a 0 y sea numérica. Si no es así, vuelve 
a pedir esa cantidad. 
Nota: el cambio de euros a pesetas (1eur = 166 pesetas), cambio de euros a dólares 
(1eur = 1,09 dólares)  */


    function recogerNum(msj){
        let a = prompt(msj);
        while(isNaN(a)){
        a = prompt("Error: introduce de nuevo el tipo de conversion: ")
        }
        return a;
    }

    function euroPeseta(cantidad){
        if(cantidad > 0){
            cantidad *= 166;
        }else{
            alert("No puedes convertir una cantidad inferior a 0")
        }
        return cantidad;
    }

    function euroDolares(cantidad){
        if(cantidad > 0){
            cantidad *= 1.09;
        }else{
            alert("No puedes convertir una cantidad inferior a 0")
        }
        return cantidad;
    }

    let opcion = recogerNum("¿Que tipo de conversion quieres hacer? 1.el cambio de euros a pesetas 2. cambio de euros a dólares ");

    do{
        if(opcion == 1){
            let cantidad1 = recogerNum("Introduce la cantidad que quieres convertir");
            euroPeseta(cantidad1);
            alert("cambio de euros a pesetas: "+cantidad1+"pesetas");
        }else if(opcion == 2){
            let cantidad2 = recogerNum("Introduce la cantidad que quieres convertir");
            euroDolares(cantidad2);
            alert("cambio de euros a dólares: "+cantidad2+"dolares");
        }else{
            alert("Introduzca bien el tipo de conversion")
        }
    }while(option != 1 || option != 2);
    
  
