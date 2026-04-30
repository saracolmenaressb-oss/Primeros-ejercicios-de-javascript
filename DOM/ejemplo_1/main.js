const parrafoId=document.getElementById("parrafoid")
console.log(parrafoId);

const parrafosClases=document.getElementsByClassName("parrafo")
console.log(parrafosClases);

const etiquetasParrafo=document.getElementsByTagName("p")
console.log(etiquetasParrafo);

const busquedaEtiqueta=document.querySelector("a")
console.log(busquedaEtiqueta);

const atributoEnlace=document.querySelector("a").getAttribute("href")
console.log(atributoEnlace);

const nuevoHref=document.querySelector("a");
nuevoHref.setAttribute("href", "https://www.netflix.com/co/");

const elDiv=document.querySelector("miElemento");
const divAtributos=elDiv.getAttributeNames();
console.log(divAtributos);

elDiv.toggleAttribute("data-info");
console.log(divAtributos);
