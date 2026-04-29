const myPromise =new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("Promesa 1 completada"),1000)
});
const myPromise2 =new Promise((resolve,reject)=>{
    setTimeout(()=>reject("Promesa 1 rechazada"),500)
});
Promise.all([myPromise,myPromise2])
.then((res)=>{
    console.log("Todas las promesas aceptadas",res)
})
.catch((error)=>{
    console.log("Por lo menos una fue rechazada",error)
})
