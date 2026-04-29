function tareaLarga() {
    console.log("Iniciando tarea larga...");

    setTimeout(() => {
        console.log("Tarea larga terminada");
    }, 5000); // 5 segundos
}

// Ejecutamos
tareaLarga();

console.log("El programa sigue ejecutándose...");
console.log("Puedes hacer otras cosas mientras...");