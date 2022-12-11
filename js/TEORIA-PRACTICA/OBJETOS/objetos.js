const persona1 = { 
    nombre: "Homero", 
    edad: 39, 
    calle: "Av. Siempreviva 742" 
}
//Obteniendo valores del objeto
console.log(persona1.nombre)
console.log(persona1.edad)
console.log(persona1.calle)
// o:
console.log(persona1["nombre"])
console.log(persona1["edad"])
console.log(persona1["calle"])

//Asignar valores a las propiedades
persona1["nombre"] = "Marge"
persona1.edad = 36

