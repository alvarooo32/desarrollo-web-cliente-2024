
function init() {

    // 4. Crea un select con 3 opciones

    let select = document.createElement("select"); // Crea un elemento <select>

    let option1 = document.createElement("option"); // Crea un elemento <option>
    option1.setAttribute("value", "value1"); // Asigna la value1 al atributo "value" del <option>
    let option1Text = document.createTextNode("Opcion 1"); // Crea un texto Opcion 1
    option1.appendChild(option1Text); //Introduce el texto Option1 dentro del elemento <option>
    
    //Se repite dos veces mas
    let option2 = document.createElement("option");
    option2.setAttribute("value", "value2");
    let option2Text = document.createTextNode("Opcion 2");
    option2.appendChild(option2Text);

    let option3 = document.createElement("option");
    option3.setAttribute("value", "value3");
    let option3Text = document.createTextNode("Opcion 3");
    option3.appendChild(option3Text);

    //Añade los option dentro del elemento <select>
    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);

    let selectContenedor = document.getElementById("select-contenedor"); // Selecciona el elemento con el id "select-contenedor"
    selectContenedor.appendChild(select); //Se añade el select dentro del <div> con el atributo select-contenedor

    // 5. Crea un datalist con 3 opciones

    let input = document.createElement("input"); //crea un elemento <input>
    input.setAttribute("list", "lista"); // dentro del elemento <input> crea el atributo list con el nombre "lista"

    let datalist = document.createElement("datalist"); //crea un elemeto <datalist>
    datalist.setAttribute("id", "lista"); // dentro del elemento <datalist> creo el atributo id y le llamo lista

    let optionDL1 = document.createElement("option"); // creo el elemento <option>
    optionDL1.setAttribute("value", "opcion 1");// dentro del elemento <option> creo el atributo value y le llamo opcion 1
    
    let optionDL2 = document.createElement("option");
    optionDL2.setAttribute("value", "opcion 2");

    let optionDL3 = document.createElement("option");
    optionDL3.setAttribute("value", "opcion 3");

    //Añade en el elemento <datalist> los 3 elentos <opcion 1> <opcion 2> <opcion 3>
    datalist.appendChild(optionDL1); 
    datalist.appendChild(optionDL2);
    datalist.appendChild(optionDL3);

    let datalistContenedor = document.getElementById("datalist-contenedor"); // Selecciona el elemento con el id "select-contenedor"
    datalistContenedor.appendChild(input); // Añade en el <div id="datalist-contenedor"> el elemento input
    datalistContenedor.appendChild(datalist);// Añade en el <div id="datalist-contenedor"> el elemento <datalist> (el cual contiene los elementos <opcion 1> <opcion 2> <opcion 3>)

}

window.onload = init;




