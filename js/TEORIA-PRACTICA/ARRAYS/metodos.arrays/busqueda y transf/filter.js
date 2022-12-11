// El método filter() recibe, una función comparadora por parámetro, y retorna un nuevo array con todos los elementos que cumplan esa condición. 
// Si no hay coincidencias, retornará un array vacío.


let carrito = [
    {nombre: "Monitor 20 pulgadas", precio: 500},
    {nombre:"Television 50 pulgadas",precio:700},
    {nombre:"Tablet",precio:300},
    {nombre:"Audifonos",precio:200},
    {nombre:"Teclado",precio:50},
    {nombre:"Celular",precio:500},
    {nombre:"Laptop",precio:800},
    {nombre:"Parlantes",precio:300},
];

//basicamente es un metodo de busqueda con una condicion

let filtro = carrito.filter(item => item.precio > 400) //todos los productos que el precio sea menor a 400

let filtro1 = carrito.filter(item => item.nombre === "Celular") // producto que se llame celular

let filtro2 = carrito.filter(item => item.nombre !== "Celular") // cualquier producto que no se llame celular

console.log(filtro);
console.log(filtro1);
console.log(filtro2);

//ejemplo 2
const cursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'AngularJS', precio: 22000},
    {nombre: 'Desarrollo Web', precio: 16000},
]

const resultado = cursos.filter((el) => el.nombre.includes('JS'))
const resultado2 = cursos.filter((el) => el.precio < 14000)

console.log(resultado)
/* [
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'Angular', precio: 22000}
] */

console.log(resultado2) // []