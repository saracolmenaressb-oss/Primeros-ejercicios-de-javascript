const miPromesa=new Promise((resolve, reject)=>{
    let exito=true;
    if (exito==true) {
        console.log("Esperando..");
        setTimeout(()=>{
            resolve("este es el valor aceptado de la promesa")
        },2000);
    }else{
        reject("Hubo un error en la operacion");
    }
})
miPromesa
    .then(resultado => {
        console.log(resultado);
    })
    .catch(error => {
        console.error(error);
    })