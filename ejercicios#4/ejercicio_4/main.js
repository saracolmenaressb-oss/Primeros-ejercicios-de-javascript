const promesa1 = new Promise((resolve) => {
  setTimeout(() => resolve("Servidor 1"), 1000);
});

const promesa2 = new Promise((resolve) => {
  setTimeout(() => resolve("Servidor 2"), 2000);
});

Promise.race([promesa1, promesa2])
  .then((res) => {
    console.log("El más rápido fue:", res);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
