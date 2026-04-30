const stock = new Promise((resolve, reject) => {
  const hayStock = Math.random() > 0.5;

  if (hayStock) {
    resolve("Compra exitosa");
  } else {
    reject("No hay stock");
  }
});

stock
  .then((data) => console.log(data))
  .catch((error) => console.log(error));