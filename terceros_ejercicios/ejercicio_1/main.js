function pedidos(callback) {
    console.log("Pedido recibido");

    setTimeout(function () {
        console.log("Pedido en preparación");

        setTimeout(function () {
            console.log("Pedido enviado");
            callback(); 
        }, 3000);

    }, 2000);
}
pedidos(function () {
    console.log("Proceso terminado");
});
