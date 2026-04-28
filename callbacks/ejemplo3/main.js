function tareaNoBloqueante (callback) {
    console.log("Iniciando la funcion tarea No bloqueante");
    setTimeout(function(){
        console.log("Tarea no bloqueante completada")
        callback();
    },5000)
    console.log("Tarea despues del setTimeOut")
}

console.log("Inicio del  programa")
tareaNoBloqueante(function(){
    console.log("Aegumento de la funcion no bloqueante")
    console.log("continuando con el resto del programa")
})
console.log("fib del programa")