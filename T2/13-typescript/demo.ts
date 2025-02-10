//ctrl + shift + b para guardar
//ctrl + ñ para cambiar al termianl desde el code runner
//tsc demo.ts --w (Para que se compile al momento)
let mensaje1:string = "Hola mundo";
console.log(mensaje1);
let numero:number = 140;
console.log(numero);
let esViernes:boolean = false;
console.log(esViernes);
let real:number = 1.43;
let binario:number = 0b101;
console.log(typeof binario);
let suma:number = real + binario + numero;
console.log(suma); 
let comparacion:boolean;
comparacion=real>2;
console.log(comparacion);
let octal:number=0o45;
console.log(octal);
let cadena1:string = "Hola";
let cadena2:string = 'Hola';
let cadena3:string = `El numero es ${suma}`;
let unioncadenas:string = cadena1+cadena2;
console.log(typeof cadena1);
console.log(typeof cadena2);
console.log(unioncadenas);
let arreglo1:number[]=[1,2,3,4];
let arreglo2:Array<number>=[5,6,7,8];
console.log(typeof arreglo1);
console.log(typeof arreglo2);
let arreglocadena: string[]=["TS", "JS", "PHP"];
arreglocadena.push("23");
let tupla:[string,number,boolean]=["Carmina",30,true]; //Arrays con distintos tipos de datos
console.log(tupla[0]);
enum semaforo{"Rojo"=3,"Naranja", "Verde"};
semaforo.Naranja;
console.log(semaforo);
let valor= semaforo.Rojo;
let nose:any;
nose="Hola";
nose=30;
nose=null;
interface Persona{
    nombre:string,
    apellido:string,
    edad:number,
    estado:boolean
}
let personaCarmina:Persona={
    nombre:"Carmina", 
    apellido:"Cervera",
    edad:52,
    estado:true
}
console.log(personaCarmina);
console.log(personaCarmina.edad);
// switch(valor){
//     case 3:
//         console.log("no pases");
//         break;
//     case 4:
//         console.log("Ten precaucion");
//         break;
//     case 5:
//         console.log("Puedes pasar");
//         break;
// }
