function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

let botonGenerar = document.getElementById("botonGenerar");
let botonComparar = document.getElementById("botonComparar");
let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let divResultado = document.getElementById("resultado");

let numero1;
let numero2;

/*PRIMER APARTADO*/

// botonGenerar.addEventListener("click", function(){
//     numero1 = getRandomIntInclusive(0,50);
//     numero2 = getRandomIntInclusive(0,50);
//     div1.textContent = "";
//     div2.textContent = "";
//     divResultado.textContent = "";

//     div1.textContent = numero1;
//     div2.textContent = numero2;
//     botonGenerar.disabled = true;
//     botonComparar.disabled = false;
// });

// botonComparar.addEventListener("click", function(){
//     if (numero1 > numero2) divResultado.textContent = numero1;
//     else divResultado.textContent = numero2;
//     botonGenerar.disabled = false;
//     botonComparar.disabled = true;
// });

/*SEGUNDO APARTADO*/

botonGenerar.addEventListener("click", generarNumeros)

function generarNumeros() {
    generar = setInterval(() => { //Esta funcion anonima es para que se repita durante 1000 ms
        numero1 = getRandomIntInclusive(1,50);
        numero2 = getRandomIntInclusive(1,50);
        div1.textContent = ""; //No haria falta
        div2.textContent = "";
        divResultado.textContent = "";

        div1.textContent = numero1;
        div2.textContent = numero2;

        botonGenerar.disabled = true;
        botonComparar.disabled = false;
    }, 1000); //1000 ms = 1seg
}

botonComparar.addEventListener("click", function(){
    clearInterval(generar);
    if (numero1 > numero2) divResultado.textContent = numero1;
    else divResultado.textContent = numero2;
    botonGenerar.disabled = false;
    botonComparar.disabled = true;
});