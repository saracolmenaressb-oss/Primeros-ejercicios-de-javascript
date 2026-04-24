const frutas= ["manzanas", "peras", "uva", "fresas"]

frutas.forEach(function(fruta){
    console.log(fruta)
})

const palabrasEnMayusculas=frutas.map(function(palabra){
    return palabra.toUpperCase(); 
})
console.log(palabrasEnMayusculas);