console.log("Aplicación calculadora");


let botonSumar = document.getElementById("btn_sumar");
//Añadimos el listener al boton sumar
botonSumar.addEventListener("click", sumar); //cuando haga click en sumar se ejecutara la funcion sumar

function sumar() {
  let formu = document.getElementById("formulario"); // coge de la etiqueta form la id formulario
  console.log(formu);// muestra el formulario
  
  //Obtenemos los valores del formulario
  let opA = formu["opA"]; //a treves de su name opA
  let opB = formu["opB"];
  console.log(opA);
  console.log(opB);
  console.log("Operando A:" + opA.value);
  console.log("Operando B:" + opB.value);

  //Operacion
  let resultado = parseInt(opA.value) + Number(opB.value);

  //Control de errores
  let elemento = document.getElementById("resultado");;

  //Si el resultado no es un numero, cambiamos el msj de resultado
  if (isNaN(resultado)) {
    elemento.innerHTML = "Datos introducidos NO númericos";

    // Opción 1 Cambiar estilos
    //elemento.style.background = "red";
    //elemento.style.color= "white";

    // Opción 2
    // Eliminamos la clase y añadimos clase de alerta
    if (elemento.classList.contains("normal")) {/*No entiendo */
      elemento.classList.remove("normal");
    }
    elemento.classList.add("alerta");
  } else {
    elemento.innerHTML = `El resultado de la suma es: ${resultado}.`;

    // Opción 1
    // elemento.style.background = "green";
    // elemento.style.color = "white";

    // Opción 2
    // Eliminamos la clase y añadimos clase de alerta
    if (elemento.classList.contains("alerta")) {
      elemento.classList.remove("alerta");
    }
    elemento.classList.add("normal");
    // También tenemos replace(oldClass, newClass);

    let estilo = window.getComputedStyle(elemento); //no entiendo
    console.log("El background actual es: " + estilo.getPropertyValue("background"));
  
  }

  // Opción 2 para recorrer el array
  console.log("Recorro el array del formulario. Opción 1");
  for (let i = 0; i < formu.lenght; i++) {
    console.log(formu[i]);
    console.log(formu[i].value);
  }

  // Opción 3 para recorrer el array
  console.log("Recorro el array del formulario. Opción 2");
  let formulario = document.forms["formulario"];
  console.log(formulario);
  let texto="";
  for (let elemento of formulario) {
    console.log("Elemento: " + elemento);
    texto += elemento.value + "<br>";
  }
  console.log(texto);
  document.getElementById("resultado2").innerHTML = texto;
}