const cadenaJSON = '{"nombre":"Sara","apellido":"Colmenares","edad":17}';

const objeto = JSON.parse(cadenaJSON);

console.log(objeto);

console.log(typeof cadenaJSON); // string
console.log(typeof objeto);     // object