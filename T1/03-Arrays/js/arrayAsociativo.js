let pc1 = {
    nombre: "alvaroPC",
    procesador:"Intel Core i7",
    ram:"16GB",
    espacio:"1TB"
};

let pc2 = ["alvaroPC","Intel ore i7","16GB","1TB"];

//document.write(pc2[3])
console.log(pc2[3]);
console.log(pc1["procesador"]);

let nombre = pc1["nombre"];
let procesador = pc1["procesador"];
let ram = pc1[ "ram"];
let espacio = pc1["espacio"];

frase = "El nombre de mi pc es " + nombre;

console.log(frase);