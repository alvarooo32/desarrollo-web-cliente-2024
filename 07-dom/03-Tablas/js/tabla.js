let tabla = document.getElementById("generatabla");

tabla.addEventListener("click", creoTabla);

function creoTabla(){
    let tam = RecogerNum("Dime tamaño de la matriz");

    let seccionTabla = document.getElementById("seccionTabla");

    let nuevaTabla = documet.createElement("table");
    let tablaBody = document.createElement("tbody");

    nuevaTabla.style.width = "100%";
    nuevaTabla.setAttribute("border",1);

    for(let i=0; i<tam; i++){
        let fila = document.createElement("tr");

        for(let j=0; j<tam; j++){
            let celda = document.createElement("td");
            let textoCelda = document.createTextNode(`Fila : ${i+1}, Columna: ${j+1}`);

            celda.appendChild(textoCelda);

            //Añadir un manejador de eventos para cambiar el color al hacer cick 
            //en la celda oportuna
            celda.onclick = function(){
                cambiarColorCelda(this); //this para cambiar esta celda en concreto
            };
            fila.appendChild(celda);
            //añado la celda que acabo de cear a la fila que estoy construyendo
            
        }
        tablaBody.appendChild(fila);
    }
    nuevaTabla.appendChild(tablaBody);
    seccionTabla.appendChild(nuevaTabla);
}