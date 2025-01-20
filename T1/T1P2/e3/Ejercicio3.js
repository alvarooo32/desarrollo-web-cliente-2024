let section = document.getElementById("seccionDinamica");
let botonAngregar = document.getElementById("btnAgregarDivImagen");
let botonResetear= document.getElementById("btnResetearSeccion");

let rutaImagen;
let titulo;
let enlace;

botonAngregar.addEventListener("click", function(){ // Cuando haga click en el boton se hara la funcion
    titulo = prompt("Ponle un titulo a tu imagen"); 
    //rutaImagen = prompt("Dime la ruta de tu imagen:"); //pregunto la ruta
    //enlace = prompt("Dime el enlace");

    let h1 = document.createElement("h1"); 
    let textoTitulo = document.createTextNode(titulo);   
    h1.appendChild(textoTitulo); // Añade el texto 

    let div = createElement("div"); // creo div

    let imagen = document.createElement("img"); //creo elemento imagen

    if (!rutaImagen){
        imagen.src = "./img/006-like.png"; //Si la ruta no coincide con la predeterminada
    }
    else{
      imagen.src = "./img/" + rutaImagen; // Añado la ruta que pregunte x el prompt
    //     //imagen.classList.add("foto"); // Añade una clase foto al elemento <img>
    }

    div.appendChild(imagen); // dentro de div meto img

    let a = document.createElement("a")
    a.setAttribute("href", enlace); 

    div.appendChild(h1);// dentro de div meto h1
 
    div.appendChild(a);// dentro de div meto a

    a.appendChild(enlace)


    section.appendChild(div); // Meto el div en el section
});


botonResetear.addEventListener("click", function(){ 
    let imagenes = section.querySelectorAll("img"); //seleciona todas las imagenes que hay en  el contenedor
    for (let i = 0; i < imagenes.length; i++) { 
        contenedor.removeChild(imagenes[i]);// elimina una a una cada imagen
    }
});