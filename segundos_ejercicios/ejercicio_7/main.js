const persona = {
  nombre: "Alice",
  edad: 19,
  contraseña: "sara1740"
};

function clave(key, value) {
  return key === "contraseña" ? "********" : value;
}

console.log(JSON.stringify(persona, clave, 4));
