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

// .reduce
// .reducer ejecutará una función que retornará un acumulado como valor único.

// Antes de ver un ejemplo más práctico, veamos una implementación más simple para conocer las diferentes partes de un .reduce, supongamos que tenemos un arreglo de números y queremos saber su suma:

// const numeros = [1,2,3];
// const total = numeros.reduce((total, numero) => total + numero, 0);
// console.log(total);

// El ejemplo anterior mostrará un 6 en la consola, lo que hace .reduce en el ejemplo anterior es recorrer el arreglo de numeros e ir sumando todo en lo que se conoce como un acumulador; es por eso que se pasan 2 valores después de .reduce() el total – que es el acumulador – y el número – que es el numero actual – del arreglo llamado numeros que esta en la línea anterior. Finalmente podrás notar que hay un 0 poco antes de cerrar el paréntesis de .reduce, ese es el valor inicial, que en este caso comenzará en 0, si lo inicias en 5, podrás ver que el total será 11, ya que comenzará a sumar a partir de 5 y sumará 6 (los valores de 1 + 2 + 3 ).

// Ahora, supongamos que el departamento de ventas nos pregunta cuanto dinero podríamos generar si vendiéramos todos los automóviles, por supuesto puedes hacer la suma con los dedos o con una calculadora, pero un .reduce será más rápido y preciso.

// total de inventarios de los autos.
const totalInventarios = autos.reduce((total, auto) => total + auto.precio, 0);
console.log(totalInventarios); //910000