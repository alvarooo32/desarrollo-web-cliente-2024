let ul = document.getElementById("listaDinamica");
let botonAgregar = document.getElementById("btnAgregar");
let botonBorrar = document.getElementById("btnBorrar");


let nombre;
let enlace;

botonAgregar.addEventListener("click", function(){ // Cuando haga click en el boton se hara la funcion
    nombre = prompt("Introduce el nombre");
    enlace = prompt("Introduce aqui el enlace");

    let li = document.createElement("li"); // Crea un elemento <li>
    let a = document.createElement("a"); //Creo un elemento <a>

    let aNombre = document.createTextNode(nombre)
    a.setAttribute("href", enlace);

    li.appendChild(a);
    a.appendChild(aNombre); // Añade el texto al <li>
    

    ul.appendChild(li); //añado dentro de ul el elemento <li>
    
});


botonBorrar.addEventListener("click", function(){ 
    let enlaces = ul.querySelectorAll("li"); //seleciona todas los enlaces
    for (let i = 0; i < enlaces.length; i++) { 
        ul.removeChild(enlaces[i]);// elimina una a una cada imagen
    }
});

