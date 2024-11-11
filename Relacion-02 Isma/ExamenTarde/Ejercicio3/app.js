function recogerNum(mensaje){
    let a = prompt(mensaje); //es lo mismo con el window que sin el, sin el mas corto
   
    while(isNaN(a) || a < 0 || a > 10){
        alert(`Has introducido valores no aceptados`);
        a = prompt(mensaje);
    }
    return (a);
}

let boton = document.getElementById("lanzar"); // meto en la variable el boton lanzar

boton.addEventListener("click", function(){ //cuando hago clic la funcion se ejecuta
    //pregunto el num de filas y columnas
    let filas = recogerNum("Dime el numero de filas que va a tener la tabla:");
    let columnas = recogerNum("Dime el numero de columnas que va a tener la tabla:");

    let tabla = document.getElementById("tabla"); // coge el elemento <div> con id tabla
    tabla.classList.add("tabla"); // al <div> le creo una class tabla

    let nuevaTabla = document.createElement('table'); // creo el elemwnto table
    let tablaBody = document.createElement('tbody');// creo el elemwnto tbody

    for (let i = 0; i < filas; i++) {
        let fila = document.createElement("tr"); // por cada fila añado un elemento <tr>

        for (let j = 0; j < columnas; j++) {
            let columna = document.createElement("td"); // por cada fila añado un elemento <tr>
            columna.textContent = (i + 1); //numero de fila en la que esta
            fila.appendChild(columna); // Se añade dentro del elemento numero de fila en la que esta
        }
        tablaBody.appendChild(fila); // Añade la celda creada a la fila actual
    }
    nuevaTabla.appendChild(tablaBody); // Añade <tbody>  a <table>
    tabla.appendChild(nuevaTabla); // Añade toda la tabla al contenedor
});