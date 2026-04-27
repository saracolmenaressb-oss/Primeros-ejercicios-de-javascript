const persona = { nombre: "Sara" };
const info = { edad: 17 };

const combinado = { ...persona, ...info };

console.log(combinado);