function leerArchivo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Contenido del archivo");
    }, 2000);
  });
}
async function main() {
  const contenido = await leerArchivo();
  console.log(contenido);
}

main();