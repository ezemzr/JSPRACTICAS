// El método reduce() nos permite obtener un único valor tras iterar sobre el array. Funciona como un método que resume el array a un único valor de retorno. 

// dos parámetros:

//1)El primero es la función que ordena qué queremos resumir del array. Recibe un parámetro que funciona como acumulador, y el elemento del array que iteramos.

//2)El segundo es el valor inicial del acumulador. 

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

let res = carrito.reduce ((total, item)=> total + item.precio,0)

console.log("$usd "+ res);

////////////////////////////////
const numeros = [1, 2, 3, 4, 5, 6]
const total = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0)

console.log(total) // 21