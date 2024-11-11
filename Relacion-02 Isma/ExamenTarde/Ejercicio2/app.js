contenedor = document.getElementById("contenedor");
botonAniadir = document.getElementById("botonAniadir");
botonLimpiar = document.getElementById("botonLimpiar");

let rutaImagen;
let imagen;

botonAniadir.addEventListener("click", function(){ // Cuando haga click en el boton se hara la funcion
    rutaImagen = prompt("Dime la ruta de tu imagen:"); //pregunto la ruta
    imagen = document.createElement("img"); //creo elemento imagen

    if (!rutaImagen) imagen.src = "./img/bloodborne.jpg"; //Si la ruta no coincide con la predeterminada
    else imagen.src = "./img/" + rutaImagen; // Añado la ruta que pregunte x el prompt
    imagen.classList.add("foto"); // Añade una clase foto al elemento <img>

    contenedor.appendChild(imagen); // Meto la imagen en el div contenedor
    botonLimpiar.disabled = false; //Mientras no haya terminado esta funcion no podra limpiar
});


botonLimpiar.addEventListener("click", function(){ 
    let imagenes = contenedor.querySelectorAll("img"); //seleciona todas las imagenes que hay en  el contenedor
    for (let i = 0; i < imagenes.length; i++) { 
        contenedor.removeChild(imagenes[i]);// elimina una a una cada imagen
    }
    botonLimpiar.disabled = true; // Una vez que borras no podras borrar mas pq no habra imagenes
});