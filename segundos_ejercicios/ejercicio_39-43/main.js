const form = document.getElementById("miForm");

const datos = new FormData(form);

console.log(datos);
// ejercicio 40:
datos.append("edad", 17);

// ejercicio 41
console.log(datos.get("nombre"));

// ejercicio 42
datos.append("hobby", "leer");
datos.append("hobby", "programar");

console.log(datos.getAll("hobby"));

// ejercico 43
for (let [clave, valor] of datos) {
    console.log(clave, valor);
}