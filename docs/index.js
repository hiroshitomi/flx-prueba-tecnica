/*
  Ejercicio 1: Reverse a String
  Escribe una función reverseString que tome una cadena como entrada y devuelva la cadena invertida.
*/


function reverseString(str) {
var cadenarevertida = "";
//Itero la cadena de manera inversa
for(var i = str.length-1; i>=0; i--)
{
  //Voy concatenando el valor a la cadena resultado
  cadenarevertida += str[i];
}
console.log(cadenarevertida); 
}

reverseString("holamundo")

/*
  Ejercicio 2: Check for Palindrome
  Escribe una función isPalindrome que tome una cadena como entrada 
  y devuelva true si la cadena es un palíndromo, y false en caso contrario.
*/
function isPalindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re,"");
    // var len = str.length;

    for (var i = 0; i < str.length/2; i++) {
      if (str[i] !== str[str.length - 1 - i]) {
          return false;
      }
    }
    return true;
   }

console.log(isPalindrome("racecar"))
/*
  Ejercicio 3: Find the Nearest Pair
  Dado un array de números enteros, 
  encuentra el par de elementos cuya diferencia es mínima. 
  En otras palabras, encuentra dos números en el array que 
  estén más cerca el uno del otro en términos de valor absoluto.

  Ejemplo:

  Entrada: [4, 2, 1, 7, 9, 10]
  Salida: [1, 2]
*/

function closestPair(array) {
    // Si el array tiene menos de 2 elementos, no hay posibilidad de comparar.
    if (array.length < 2) {
      return null;
    }
    // Ordenamos el array de menor a mayor
    array.sort((a, b) => a - b);
  
    let minimaDiferencia = Infinity;  // Inicializamos la menor diferencia con un valor muy alto
    let num1, num2;
  
    // Iteramos por el array comparando cada número con el siguiente
    for (let i = 0; i < array.length - 1; i++) {
      const diferencia = array[i + 1] - array[i];  // Diferencia entre números consecutivos
  
      if (diferencia < minimaDiferencia) {
        minimaDiferencia = diferencia;
        num1 = array[i];
        num2 = array[i + 1];
      }
    }
  
    return [num1, num2];  // Retornamos los dos números más cercanos
}

console.log( closestPair([1, 5, 9, 12, 15]))


/*
  Ejercicio 4: Calculadora - Programación Orientada a Objetos
  La calculadora debe ser capaz de realizar operaciones aritméticas básicas, 
  como suma, resta, multiplicación y división. 
  Además, debe mantener un registro del último resultado calculado 
  para que los usuarios puedan acceder a él si es necesario.

  La calculadora debe ser una clase llamada Calculator, que tenga los siguientes métodos:
  - add(a, b): Este método toma dos números como argumentos y devuelve la suma de los mismos. 
    Además, actualiza el último resultado calculado.

  - subtract(a, b): Este método toma dos números como argumentos y devuelve la resta del primero menos el segundo. 
    Además, actualiza el último resultado calculado.

  - multiply(a, b): Este método toma dos números como argumentos y devuelve el producto de los mismos. 
    Además, actualiza el último resultado calculado.

  - divide(a, b): Este método toma dos números como argumentos y devuelve el cociente del primero dividido por el segundo.
    Si el segundo número es cero, se debe lanzar un error indicando que la división por cero no está permitida. 
    Además, actualiza el último resultado calculado.

  - getLastResult(): Este método devuelve el último resultado calculado por la calculadora, simulando un historial.

  Además de estos métodos, debes agregar una función más compleja a la clase Calculator, 
  que calcule la potencia de un número. 
  Esta función debe ser asignada al prototipo de la clase y se llamará exponentiate(base, exponent). 
  Esta función toma dos argumentos: la base y el exponente, y devuelve la base elevada a la potencia del exponente. 
  La función debe manejar correctamente los casos donde el exponente es cero o negativo, lanzando un error en este último caso.
  Además, actualiza el último resultado calculado.

*/

class Calculator {
  constructor() {
    this.lastResult = 0;  // Propiedad para almacenar el último resultado
  }

  add(a, b) {
    this.lastResult = a + b;
    return this.lastResult;
  }

  subtract(a, b) {
    this.lastResult = a - b;
    return this.lastResult;
  }

  multiply(a, b) {
    this.lastResult = a * b;
    return this.lastResult;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error("No se puede dividir entre cero.");
    }
    this.lastResult = a / b;
    return this.lastResult;
  }

  // Método para obtener el último resultado calculado
  getLastResult() {
    return this.lastResult;
  }
}


module.exports = {
  closestPair,
  isPalindrome,
  reverseString,
  Calculator,
}