function procesoCliente() {
    console.log("Inicio del proceso");

    setTimeout(() => {
        console.log("Paso 1: Solicitud recibida");

        setTimeout(() => {
            console.log("Paso 2: Procesando datos");

            setTimeout(() => {
                console.log("Paso 3: Verificando información");

                setTimeout(() => {
                    console.log("Paso 4: Enviando respuesta");

                    setTimeout(() => {
                        console.log("Proceso finalizado");
                    }, 1000);

                }, 1000);

            }, 1000);

        }, 1000);

    }, 1000);
}

procesoCliente();