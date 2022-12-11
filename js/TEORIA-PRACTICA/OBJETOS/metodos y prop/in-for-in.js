// El operador in devuelve true si la propiedad especificada existe en el objeto. 
// Mientras que el bucle for...in permite acceder a todas las propiedades del objeto, obteniendo una propiedad por cada iteración.

//IN

const persona1 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742"};

//devuelve true porque la clave "nombre" existe en el objeto persona1
console.log( "nombre" in persona1);
//devuelve false porque la clave "origen" no existe en el objeto persona1
console.log( "origen" in persona1);




//recorremos todas las propiedades del objeto con el ciclo for...in
for (const propiedad in persona1) {
    console.log(persona1[propiedad]);
}

///EJEMPLO

function Mascota(nombre,animal,color,sexy){
    this.nombre = nombre;
    this.animal = animal;
    this.color = color;
    this.sexy = sexy;
    this.ladrar = function(){
        return"wooow wooow"
    }
}

let mascota1 = new Mascota("aegon","perro","amarillo","obvio")

// console.log(mascota1.nombre);
// console.log(mascota1.ladrar());

console.log("nombre" in mascota1); //TRUE
console.log("abuelo" in mascota1); //FALSE

for(let propiedad in mascota1){
    console.log(mascota1[propiedad])
}