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

for (let i = 0; i < autos.length; i++) {
    console.log(autos[i]);
    // obtener todos los autos del year 2018
    if (autos[i].year === 2018) {
        console.log(autos[i].marca, autos[i].year);
    }
}

// autos 2018 y de 4 puertas
for (let i = 0; i < autos.length; i++) {
    if (autos[i].year === 2018 && autos[i].puertas === 4) {
        console.log(`Modelo: ${autos[i].modelo} | Año: ${autos[i].year} | Puertas: ${autos[i].puertas}`);
    }
}