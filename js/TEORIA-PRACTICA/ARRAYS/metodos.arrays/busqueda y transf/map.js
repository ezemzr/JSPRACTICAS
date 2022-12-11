//agarra un array y crea otro con las condiciones nuevas

let numeros = [1,2,3,4,5,6]
let dobles = numeros.map(doble => doble*2)
console.log(dobles);

/////////////////////////////////////////////////////////////////////

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

let html = carrito.map(item => "<li>"+item.nombre +"<li>")
console.log(html);

//ej 2

const cursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'AngularJS', precio: 22000},
    {nombre: 'Desarrollo Web', precio: 16000},
]

const nombres = cursos.map((el) => el.nombre)
console.log(nombres)
// [ 'Javascript', 'ReactJS', 'AngularJS', 'Desarrollo Web' ]



//Si quisiera aumentar el precio de todos los cursos en este ejemplo, puedo mapear y retornar una copia de los elementos con el precio modificado:
const actualizado = cursos.map((el) => {
    return {
        nombre: el.nombre,
        precio: el.precio * 1.25
    }
})

console.log(actualizado)
/* [
    { nombre: 'Javascript', precio: 18750 },
    { nombre: 'ReactJS', precio: 27500 },
    { nombre: 'AngularJS', precio: 27500 },
    { nombre: 'Desarrollo Web', precio: 20000 }
] */
