let btnGenerarTabla = document.getElementById("btnGenerarTabla");

btnGenerarTabla.addEventListener("click", function(){
    let tam = prompt("Cual es el tamaño de la tabla");

    let seccionTabla = document.getElementById("seccionTabla");

    let nuevaTabla = document.createElement("table");
    nuevaTabla.classList.add("miTabla");
    nuevaTabla.id = "miTabla";
    let tablaBody = document.createElement("tbody");

    let img = createElement("img");
    

    for (let i = 0; i < tam; i++) {
      let fila = document.createElement("tr");

      for (let j = 0; j < tam; j++) {
        let celda = document.createElement("td");

        // opción 1
        let textoCelda = document.createTextNode(`Fila : ${i+1}, Columna: ${j+1}`);
        celda.appendChild(textoCelda);

        
        fila.appendChild(celda);
        // añado la celda que acabo de crear a la fila que estoy construyendo
      }
      tablaBody.appendChild(fila);
    }
    nuevaTabla.appendChild(tablaBody);
    seccionTabla.appendChild(nuevaTabla);
  
});
