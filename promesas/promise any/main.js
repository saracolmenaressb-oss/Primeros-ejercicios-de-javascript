const myPromise =new Promise((resolve,reject)=>{
    setTimeout(()=>reject("Promesa 1 completada"),800)
});
const myPromise2 =new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("Promesa 1 rechazada"),600)
});
const myPromise3 =new Promise((resolve,reject)=>{
    setTimeout(()=>reject("Promesa 3 rechazada"),200)
});
Promise.any([myPromise,myPromise2])
.then((res)=>{
    console.log("Por lo menos una fue aceptada",res)
})
.catch((error)=>{
    console.log("Todas fueron rechazadas",error)
})
.finally(()=>{
    console.log("Proceso finalizado con o sin error")
})