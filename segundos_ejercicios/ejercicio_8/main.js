const persona = {
    nombre: "Sara",
    apellido: "Colmenares",
    edad: 17
};

const json = JSON.stringify(persona, null, 2);

console.log(json);