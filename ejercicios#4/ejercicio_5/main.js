const archivo1 = new Promise((resolve) => {
  setTimeout(() => resolve("Archivo 1 cargado"), 1000);
});

const archivo2 = new Promise((resolve) => {
  setTimeout(() => resolve("Archivo 2 cargado"), 1500);
});

Promise.all([archivo1, archivo2])
  .then((res) => {
    console.log("Todos los archivos cargados:", res);
  })
  .catch((error) => {
    console.log("Error en la carga:", error);
  });