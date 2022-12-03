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