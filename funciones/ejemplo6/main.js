const persona={
    nombre:"sara",
    apellido:"Colmenares",
    edad:17,
    esCamper:true,
    notas:[8,7,9],
    direccion:{
        calle:"14",
        numero:"4-20",
        barrio: "portico"
    },
    caminar(){
        console.log("sara esta caminando")
    }
};
console.log(persona.edad);
console.log(persona.direccion.barrio)