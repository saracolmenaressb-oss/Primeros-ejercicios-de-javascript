const empleado = {
    nombre: "Lucy",
    apellido: "Fer",

    nombreCompleto() {
        console.log(this.nombre + " " + this.apellido);
    }
};

empleado.nombreCompleto();