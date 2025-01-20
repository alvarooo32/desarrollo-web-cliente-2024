/**Ejercicio 6: Escribe una función iterativa que dado un número entero n, retorne un
array con todos los números enteros en orden decreciente desde n a 1 */

function decrecientes(n) {
    let resultado = [];
    
    for (let i = n; i > 0; i--) {
        resultado.push(i); 
    }
    
    return resultado; 
}

console.log(decrecientes(5));
console.log(decrecientes(3)); 