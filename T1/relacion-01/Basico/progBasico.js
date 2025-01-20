//EJ1|Ejercicio 1: Añadir a una página HTML un script que muestre un alert de la siguiente forma:
let buttom = document.getElementById('boton3');

buttom.onclick = function(){
    alert('Funcion en un archivo externo');
}



//EJ 4 A través de un prompt, pide el nombre al usuario y saludalo con un alert de
//la siguiente forma: “Bienvenid@ a mi página XXXXXX” (siendo XXXXXX el nombre que ha introducido el usuario).
let name = prompt('Introduce tu nombre');
alert('Bienvenid@ a mi pagina ' + name);

//EJ 5 Pedir dos valores numéricos con prompt y mostrar su suma, resta, multiplicación, división y resto
let num1 = parseFloat(prompt('Introduce el 1º numero'));
let num2 = parseFloat(prompt('Introduce el 2º numero'));

alert('La suma es ' + (num1+num2));
alert('La resta es ' + (num1 - num2));
alert('La multiplicación es ' + (num1 * num2));
alert('La división es ' + (num1 / num2));
