//creación de arrays


let fruits = ['Manzana', 'Naranja', 'Pera'];
let students = ['Dianyela', 'Esther'];
console.log('students', students);
console.log('fruits', fruits);

let colors = new Array('Negro','Rojo','Azul')
console.log('colors', colors);

//STACKS Y QUEUES

fruits.push('Mango');
console.log('newStack',fruits);

fruits.pop();
console.log('pop', fruits);


colors.unshift('Rosa');
console.log('queue', colors);

colors.shift();
console.log('shift', colors);


// MAP

let numbers = [4, 9, 16, 25];
let x = numbers.map(Math.sqrt)

console.log('numbers', numbers);
console.log('x',x)

//FOREACH
//EJecuta una función o sentencia por cada unos de los elementos)
numbers.forEach(item => console.log(item));

numbers.forEach(number => number*2);



// FIND
const secondNumbers = [4, 9, 16, 25]
const found = secondNumbers.find(element => element < 10);

console.log('found', found);


//EJERCICI0

//Dado el arreglo de películas encontrar:
//Todas las peliculas del año 1997
//Las peliculas del director Martin Scorsese
// Imprimirlos en tarjetas en el DOM


//Ejemplo:
//movies.find(movie=>movie.title==="Pulp Fiction")