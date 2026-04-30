// antes: con then:
traerDatos().then((data) => {
  console.log(data);
});
// ahora con wait:
async function main() {
  const data = await traerDatos();
  console.log(data);
}

main();