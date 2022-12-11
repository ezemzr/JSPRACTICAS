// Para ordenar números, basta con restar uno al otro, y el orden indica si será ordenado de forma ascendente o descendente:


const numeros = [ 40, 1, 5, 200 ];

numeros.sort((a, b) => a - b);  // [ 1, 5, 40, 200 ]
numeros.sort((a, b) => b - a);  // [ 200, 40, 5, 1 ]