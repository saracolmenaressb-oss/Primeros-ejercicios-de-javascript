function descargarArchivo(callback) {
    console.log("Descargando archivo...");

    setTimeout(function () {
        console.log("Descarga completada");
        callback();
    }, 3000);
}
descargarArchivo(function () {
    console.log("Proceso finalizado");
});