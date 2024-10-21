//incluimos y definimos las funciones a exportar

function saludar(nombre){
    return `Hola, ${nombre}`;
}
function despedida(nombre){
    return `Hasta luego, ${nombre}`;
}
export function despedidas(nombre){
    return `Hasta luego, ${nombre}`;
}
//Exporto las funciones
export{saludar, despedida};
//export * from
//export * from saludos "./saludos.js";