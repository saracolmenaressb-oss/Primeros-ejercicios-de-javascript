async function fetchData() {
    const response =await fetch("data.json")
    .then(response=>response.json())
    .catch(error=>{
        console.log("Error al obtener datos", error)
    })
    console.log(response);
}
console.log("Mostrar datos del json");
fetchData();