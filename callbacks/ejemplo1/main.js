function realizarOperaciones(num1,num2,operacion){
    console.log(`Operacion: ${num1} y ${num2}`);
    operacionCallback(num1,num2);
}
function sumar(a,b) {
    console.log(`suma: ${a+b}`);
}
function resta(a,b) {
    console.log(`resta: ${a-b}`);
}
realizarOperaciones(5,2,sumar)