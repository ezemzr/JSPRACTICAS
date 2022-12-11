// Los métodos de los objetos también son técnicamente funciones, sólo que se limitan a poder ser ejecutados solo desde el mismo objeto.


//Funciones: Generalmente retornar un valor y son de acceso global.
function f1(){
    return this;
}

//Métodos: Se requiere un objeto y puede no retornar un valor.
function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
}

/////////////

let cadena = "HOLA CODER";

//Propiedad de objeto String: Largo de la cadena.
console.log(cadena.length);

//Método de objeto String: Pasar a minúscula.
console.log(cadena.toLowerCase());

//Método de objeto String: Pasar a mayúscula.
console.log(cadena.toUpperCase());

//Métodos personalizados
//referenciando funciones por su nombre o definiendo funciones anónimas asociadas a una propiedad de la función constructora

//LLAMADO
// Llamar a un método es similar a acceder a una propiedad, pero se agrega () al final del nombre del método, posiblemente con argumentos.
function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad   = edad;
    this.calle  = calle;
    this.hablar = function(){ console.log("HOLA SOY "+ this.nombre)}
}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");
persona1.hablar();
persona2.hablar();