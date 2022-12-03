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

let buscar = carrito.find(item => item.nombre === "Parlantes") //busca el producto que se llame parlantes


console.log(buscar );
