//Destructuring arrays
//1.- Dado el objeto empleados, extrae la empleada Ana completa.

const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];

const [, ana] = empleados;
// console.log(ana);

//2. Dado el objeto empleados, extrae el email del empleado Luis --> Luis@gmail.com

const [{ name, email: emailLuis }] = empleados;
// console.log(emailLuis);

//3. Usa destructuración para cambiar los valores de a y b;
let a = 5;
let b = 3;

[a, b] = [b, a];

//4. Dado el objeto HIGH_TEMPERATURES
const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
};

//Cambiar las siguientes líneas para guardar mediante destructuración 
// los valores de temperaturas en las variables maximaHoy y maximaManana
// const maximaHoy = HIGH_TEMPERATURES.today;
// const maximaManana = HIGH_TEMPERATURES.tomorrow;

const { today: maximaHoy, tomorrow: maximaManana } = HIGH_TEMPERATURES;
// console.log(maximaHoy);
// console.log(maximaManana);

//Spread/Rest
//5. Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números 
// y devuelva la suma de todos los demás argumentos.
const sumEveryOther = (...arg) => arg.reduce((acum, cur) => acum + cur, 0);
// console.log(sumEveryOther(6, 8, 2, 3, 1)); //20
// console.log(sumEveryOther(11, 3, 12)); //26

//6. Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos 
// (incluyendo números y strings y retorne la suma solo de los números).
const addOnlyNums = (...arg) => arg.filter(elem => (typeof elem === 'number')).reduce((acum, cur) => acum + cur, 0);
// console.log(addOnlyNums(1, "perro", 2, 4)); //7

//7. Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos 
// y devuelva un número que indique cuántos argumentos ha recibido.

const countTheArgs = (...arg) => arg.length;

// console.log(countTheArgs("gato", "perro")); //2
// console.log(countTheArgs("gato", "perro", "pollo", "oso")); //4

//8. Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos 
// y devuelva solo un array que combine los dos (usando spread operator).

const combineTwoArrays = (array1, array2) => [...array1, ...array2];

// console.log(combineTwoArrays([1, 2, 3], ['hola', 'mundo', true]))

//9. Escriba una función llamada onlyUniques que acepte cualquier número de argumentos 
// y devuelva un array de elementos únicos, sin repetidos.
const onlyUniques = (...arg) => [...new Set(arg)];

// console.log(onlyUniques(1, 1, 2, 2, 3, 6, 7, 8)); //[1, 2, 3, 6, 7, 8]
// console.log(onlyUniques("gato", "pollo", "cerdo", "cerdo")); //["gato", "pollo", "cerdo"]

//10. Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos 
// y los combine todos en un solo array.

const combineAllArrays = (...array) => array.flat();

// console.log(combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1])); // [3, 6, 7, 8, 2, 7, 3, 1]
// console.log(combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1])); // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]

//11.  Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y 
// devuelva la suma de todos los valores cuadrados.

const sumAndSquare = (...args) => [...args].reduce((acum, cur) => acum + Math.pow(cur, 2), 0);

// console.log(sumAndSquare(1, 2, 3));