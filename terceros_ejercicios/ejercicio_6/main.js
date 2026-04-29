function obtenerUsuario(callback) {
    console.log("Consultando usuario...");

    setTimeout(() => {
        const usuario = {
            nombre: "Sara",
            edad: 18
        };

        callback(usuario); 
    }, 3000);
}
obtenerUsuario(function (datos) {
    console.log("Usuario recibido:");
    console.log(`Nombre: ${datos.nombre}`);
    console.log(`Edad: ${datos.edad}`);
});