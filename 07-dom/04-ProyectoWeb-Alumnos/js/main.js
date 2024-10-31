console.log("javascript");

let creaAnuncio = document.getElementById("icluyeAnuncio");

creaAnuncio.addEventListener("click", incluirAnuncio);

function incluirAnuncio(){
    //Pedir al usuario la direccion de la imagen y el enlace
    let pathImg = prompt("Direccion de la imagen","./img/foto1.jpg");
    let urlEnlace = prompt("URL del enlace","https://www.marca.es");

    //Crear un div
    let nuevoHijo =document.createElement("div");

    //Creo el enlace
    let enlace = document.createElement("a");
    enlace.href = urlEnlace;
    enlace.textContent = prompt("Dime el texto del enlace: ");

    //Crea la imagen
    let imagen = document.createElement("img");
    imagen.src = pathImg;
    imagen.alt = "Imagen alternativo";
    imagen.style.width = "100px";
    imagen.style.height = "100px";

    //Agregar a nuestro hijo
    nuevoHijo.appendChild(imagen);
    nuevoHijo.appendChild(enlace);
}