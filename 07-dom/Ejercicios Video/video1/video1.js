function init() {
    // 1. Crea tres párrafos
    let contenedor = document.getElementById("resultado"); // Selecciona el elemento con el id "resultado"

    let p1 = document.createElement("p"); // Crea un elemento <p>
    let p1Texto = document.createTextNode("Parrafo 1"); // Crea un texto
    p1.appendChild(p1Texto); // Añade el texto al párrafo <p>

    let p2 = document.createElement("p");
    let p2Texto = document.createTextNode("Parrafo 2");
    p2.appendChild(p2Texto);

    let p3 = document.createElement("p");
    let p3Texto = document.createTextNode("Parrafo 3");
    p3.appendChild(p3Texto);

    // Añade los párrafos al contenedor
    contenedor.appendChild(p1);
    contenedor.appendChild(p2);
    contenedor.appendChild(p3);

    // 2. Crea un enlace
    let enlace = document.createElement("a"); // Crea el elemento <a>
    enlace.setAttribute("href", "http://discoduroderoer.es"); // Asigna la URL "http://discoduroderoer.es" al atributo "href" del enlace
    let enlaceTexto = document.createTextNode("Enlace"); // Crea el texto del enlace
    enlace.appendChild(enlaceTexto); // Añade el texto al enlace
    contenedor.appendChild(enlace); // Añade el enlace al contenedor

    // 3. Crea una lista desordenada
    let lista = document.createElement("ul"); // Crea el elemento <ul>

    for (let i = 0; i < 3; i++) {
        let li = document.createElement("li"); // Crea un elemento <li>
        let liTexto = document.createTextNode("Elemento " + i); // Crea un texto para el elemento de lista
        li.appendChild(liTexto); // Añade el texto al <li>
        lista.appendChild(li); // Añade el <li> a la lista <ul>
    }

    contenedor.appendChild(lista); // Añade la lista al contenedor
}

window.onload = init; // Se ejecutará cuando toda la página haya terminado de cargarse
