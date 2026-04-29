function cancion(callback) {
    console.log("Reproduciendo canción...");

    setTimeout(function () {
        console.log("Canción terminada");
        callback();
    }, 3000); // 3 segundos
}
cancion(function () {
    console.log("Siguiente canción...");
});