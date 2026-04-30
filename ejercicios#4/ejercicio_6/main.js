function loginGoogle() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("Google falló"), 1000);
  });
}
function loginFacebook() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Facebook OK"), 2000);
  });
}
Promise.any([loginGoogle(), loginFacebook()])
  .then((resultado) => {
    console.log("Login exitoso:", resultado);
  })
  .catch((error) => {
    console.log("Todos fallaron");
  });