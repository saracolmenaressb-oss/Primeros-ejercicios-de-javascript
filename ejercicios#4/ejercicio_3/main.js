const datos = new Promise((resolve, reject) => {
  const exito = Math.random() > 0.5;

  setTimeout(() => {
    if (exito) {
      resolve({ nombre: "Sara", edad: 18 });
    } else {
      reject("Error al obtener datos");
    }
  }, 1500);
});

datos
  .then((usuario) => console.log("Usuario:", usuario))
  .catch((error) => console.log(error))
  .finally(() => console.log("Proceso finalizado"));