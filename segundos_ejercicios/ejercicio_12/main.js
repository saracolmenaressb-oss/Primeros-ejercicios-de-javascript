const persona = {
    nombre: "Sara",
    direccion: {
        ciudad: "Cúcuta",
        codigoPostal: "540001"
    }
};

const { direccion: { ciudad, codigoPostal } } = persona;

console.log(ciudad);
console.log(codigoPostal);