function cuadrado(numero){
    return resultado=numero*numero
}
console.log(cuadrado(5));
const numeros=[1,2,3,4,5]
const nuevosNumeros=numeros.map(cuadrado);
console.log(nuevosNumeros);