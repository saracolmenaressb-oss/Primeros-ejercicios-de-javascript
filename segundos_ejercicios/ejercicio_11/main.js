const persona = {
    nombre: "Sara"
};

const { nombre, edad = 18 } = persona;

console.log(nombre);
console.log(edad);