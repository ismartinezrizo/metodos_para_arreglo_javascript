const autos = [
    { marca: 'BMW', modelo: 'Serie 3', year: 2012, precio: 30000, puertas: 4, color: 'Blanco', transmision: 'automatico' },
    { marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico' },
    { marca: 'Ford', modelo: 'Mustang', year: 2015, precio: 20000, puertas: 2, color: 'Blanco', transmision: 'automatico' },
    { marca: 'Audi', modelo: 'A6', year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico' },
    { marca: 'BMW', modelo: 'Serie 5', year: 2016, precio: 70000, puertas: 4, color: 'Rojo', transmision: 'automatico' },
    { marca: 'Mercedes Benz', modelo: 'Clase C', year: 2015, precio: 25000, puertas: 4, color: 'Blanco', transmision: 'automatico' },
    { marca: 'Chevrolet', modelo: 'Camaro', year: 2018, precio: 60000, puertas: 2, color: 'Rojo', transmision: 'manual' },
    { marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual' },
    { marca: 'Dodge', modelo: 'Challenger', year: 2017, precio: 40000, puertas: 4, color: 'Blanco', transmision: 'automatico' },
    { marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual' },
    { marca: 'Dodge', modelo: 'Challenger', year: 2012, precio: 25000, puertas: 2, color: 'Rojo', transmision: 'manual' },
    { marca: 'Mercedes Benz', modelo: 'Clase C', year: 2018, precio: 45000, puertas: 4, color: 'Azul', transmision: 'automatico' },
    { marca: 'BMW', modelo: 'Serie 5', year: 2019, precio: 90000, puertas: 4, color: 'Blanco', transmision: 'automatico' },
    { marca: 'Ford', modelo: 'Mustang', year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual' },
    { marca: 'Dodge', modelo: 'Challenger', year: 2015, precio: 35000, puertas: 2, color: 'Azul', transmision: 'automatico' },
    { marca: 'BMW', modelo: 'Serie 3', year: 2018, precio: 50000, puertas: 4, color: 'Blanco', transmision: 'automatico' },
    { marca: 'BMW', modelo: 'Serie 5', year: 2017, precio: 80000, puertas: 4, color: 'Negro', transmision: 'automatico' },
    { marca: 'Mercedes Benz', modelo: 'Clase C', year: 2018, precio: 40000, puertas: 4, color: 'Blanco', transmision: 'automatico' },
    { marca: 'Audi', modelo: 'A4', year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico' }
];


// .some
// .some verificará si un elemento existe o no en el arreglo, a diferencia de los otros métodos que te retornan un arreglo nuevo o el valor, en este caso solo te dirá si existe o no un elemento que cumpla la condición o implementación.

// Supongamos que un cliente llama buscando un auto de la marca Ferrari, en nuestra base de datos no tenemos ninguno pero podremos comprobarlo con un .some

const existeFerrari = autos.some(auto => auto.marca === "Ferrari");
console.log(existeFerrari);

// Si revisamos el resultado del código anterior notarás que la consola solo imprime false, debido a que no hubo un registro que cumpliera con esa condición.

// Como vimos anteriormente en nuestra base de datos tenemos 5 autos BMW, si hacemos una búsqueda por esta marca:

const existeBMW = autos.some(auto => auto.marca === "BMW");
console.log(existeBMW);

// Notarás que el resultado es true, .some no retornará un arreglo nuevo con los elementos, tampoco te dirá en que posición se encuentra el elemento, solo revisará si existe o no en tu arreglo.