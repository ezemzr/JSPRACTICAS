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