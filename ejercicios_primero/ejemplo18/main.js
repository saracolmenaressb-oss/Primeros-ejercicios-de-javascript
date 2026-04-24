console.log("variable");
var nombre = "Sara";

if (true) {
  var nombre = "Ana";
}

console.log(nombre);

console.log("let");
let edad = 17;

if (true) {
  let edad = 20;
  console.log(edad);
}
console.log(edad);

// let sí respeta el bloque y crea una variable distinta dentro del if

console.log("const");
const pais = "Colombia";
console.log(pais);
// si se trata de cambiar ocurre un TypeError, porque NO se puede reasignar, tiene scope de bloque pero es más segura