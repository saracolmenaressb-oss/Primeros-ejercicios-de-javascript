function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function proceso() {
    console.log("Inicio");

    await esperar(1000);
    console.log("Paso 1");

    await esperar(1000);
    console.log("Paso 2");

    await esperar(1000);
    console.log("Paso 3");

    console.log("Final");
}

proceso();