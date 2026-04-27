const person = {
  name: "tommy shelby",
  age: 30,
  address: {
    street: "wall Street",
    city: "New York",
  }
};
const copia = Object.assign({}, person);
console.log(copia);
