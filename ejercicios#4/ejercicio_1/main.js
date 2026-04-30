const entrega = new Promise((resolve, reject) => {
  const exito = Math.random() > 0.5;

  setTimeout(() => {
    if (exito) {
      resolve("Pedido entregado");
    } else {
      reject("Pedido no entregado");
    }
  }, 2000);
});

entrega
  .then((data) => console.log(data))
  .catch((error) => console.log(error));