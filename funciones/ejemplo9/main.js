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
        console.log(this.nombre+" esta caminando")
    }
};

const {nombre,edad,esCamper}=persona
console.log(nombre)

const numeros=[1,2,3,4,5]
const [primero,segundo,tercero]=numeros
console.log(segundo)