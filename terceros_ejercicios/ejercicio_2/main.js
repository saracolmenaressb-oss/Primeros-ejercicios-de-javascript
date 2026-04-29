function realizarOperaciones(num1, num2, operacion) {
    console.log(`Operando ${num1} y ${num2}...`);

    setTimeout(function () {
        operacion(num1, num2); 
    }, 2000); 
}
function sumar(a,b) {
    console.log(`suma: ${a+b}`);
}
function resta(a,b) {
    console.log(`resta: ${a-b}`);
}
function multiplicar(a,b) {
    console.log(`multiplicacion: ${a*b}`);
}
realizarOperaciones(2,6,multiplicar)
realizarOperaciones(2,6,sumar)