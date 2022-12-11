//Instanciar un objeto Date nos genera la fecha y tiempo actual:
console.log( new Date() )
// Fri Dec 17 2021 11:35:08 GMT-0300 (hora estándar de Argentina)

// //Constructor
// El constructor de la clase Date nos permite crear objetos date con fechas diferentes. 
// Puede recibir parámetros en el orden año, mes, día, hora, minutos, segundos, milisegundos (todos tipo number).


//La convención con la que trabaja Javascript para construir fechas cuenta los meses a partir del 0 (0 = enero, 11 = diciembre) y los días a partir del 1:
console.log(new Date(2020, 1, 15))
// Sat Feb 15 2020 00:00:00 GMT-0300 (hora estándar de Argentina)

const casiNavidad = new Date(2021, 11, 25, 23, 59, 59)
console.log(casiNavidad)
// Sat Dec 25 2021 23:59:59 GMT-0300 (hora estándar de Argentina)


///El constructor de la clase Date nos permite crear objetos date con fechas diferentes. Puede recibir parámetros en el orden año, mes, día, hora, minutos, segundos, milisegundos (todos tipo number).
const casiNavidadd = new Date("December 25, 2021 23:59:59")
console.log(casiNavidad)
// Sat Dec 25 2021 23:59:59 GMT-0300 (hora estándar de Argentina)


//Obtener un valor singular de la fecha

Date.getMonth()
//nos retornará el number que representa el mes (entre 0 y 11).

Date.getFullYear()
//nos devolverá el number que representa el año creado

Date.getDay()
//nos retornará el number que representa el día creado (1 = lunes, 7 = domingo)


const hoyy = new Date("December 17, 2021")

console.log(hoy.getFullYear()) // 2021
console.log(hoy.getMonth()) // 11  (diciembre)
console.log(hoy.getDay()) // 5  (viernes)





ejemplo:
const hoy = new Date("December 17, 2021")

console.log( hoy.toDateString() ) // Fri Dec 17 2021
console.log( hoy.toLocaleString() ) // 17/12/2021 00:00:00
console.log( hoy.toLocaleDateString() ) // 17/12/2021
console.log( hoy.toTimeString() ) // 00:00:00 GMT-0300 (hora estándar de Argentina)