let global = "Soy global";

if (true) {
  let local = "Soy local";
  console.log(global); // ✔ se puede usar
  console.log(local);  // ✔ se puede usar
}

console.log(global); // ✔ se puede usar
// console.log(local); da error