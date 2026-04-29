function atencionCliente(callback) {
    console.log("Usuario realiza la solicitud");

    setTimeout(() => {
        console.log("Solicitud procesada");

        setTimeout(() => {
            console.log("Se está evaluando su solicitud");

            setTimeout(() => {
                console.log("Respuesta enviada al cliente");
                callback(); 
            }, 2000);

        }, 3000);

    }, 2000);
}
atencionCliente(function () {
    console.log("Solicitud aceptada");
});