async function main() {
  try {
    const datos = await obtenerDatos();
    console.log(datos);
  } catch (error) {
    console.log("Ocurrió un error:", error);
  }
}

main();