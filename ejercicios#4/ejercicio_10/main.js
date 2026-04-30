function lanzarDado() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const numero = Math.floor(Math.random() * 6) + 1;

      if (numero === 1) {
        reject("Salió 1 → error crítico");
      } else {
        resolve(numero);
      }
    }, 1000);
  });
}
async function jugar() {
  try {
    for (let i = 0; i < 5; i++) {
      const resultado = await lanzarDado();
      console.log("Resultado:", resultado);
    }
    console.log("Juego completado");
  } catch (error) {
    console.log("Juego detenido:", error);
  }
}

jugar();