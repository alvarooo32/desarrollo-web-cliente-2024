//Definicion de funciones

let func = new Function("a","b","return a * b");
let resultado = func(10,10);
console.log(resultado);



//funcion autoinvocadas
(function(){
    let msg = "hola!";
    console.log(msg);
})();