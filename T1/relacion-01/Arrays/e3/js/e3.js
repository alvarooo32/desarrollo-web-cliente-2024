/**
 *Ejercicio 3: Concatenar dos arrays A y B de la siguiente forma: 
 A0, B0, A1, B1, A2 B2, ..., An, Bn. Los vectores pueden tener longitud distinta (requiere controlarlo).

 *  */ 

function concatenarArrays(A, B) {
    const array1 = [];
    const maxLength = Math.max(A.length, B.length);
  
    for (let i = 0; i < maxLength; i++) {
      if (i < A.length) resultado.push(A[i]);
      if (i < B.length) resultado.push(B[i]);
    }
  
    return resultado;
  }
  