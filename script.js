function Ciudad(nombre, estilo, stock){
    this.nombre = nombre;
    this.estilo = estilo;
    this.stock = stock;
} 

/* con stock me refiero a si hay eventos en esa ciudad o no, es la forma que encontré de hacerlo. Si no hay, se le pone un 0 y entonces no aparece, Y si hay eventos en esa ciudad se le pone un 1 o cualquier numero mayor a 0 para que aparezca en la lista */

let ciudadA = new Ciudad("Buenos Aires", "progressive", 1)
let ciudadB = new Ciudad("Rosario", "techno", 1)
let ciudadC = new Ciudad("Cordoba", "tech-house", 1)
let ciudadD = new Ciudad("Mendoza", "progressive", 1)

let listaCiudades = [ ciudadA, ciudadB, ciudadC, ciudadD ]

let listaCiudadesconStock = listaCiudades.filter((ciudad) => ciudad.stock > 0)

let listaNombres = listaCiudadesconStock.map((ciudad) => ciudad.nombre)

let catalogo = document.getElementById("catalogo") 

function render(lista){
    catalogo.innerHTML = ""

    for(const ciudad of lista){

        let card = document.createElement("div")

        card.className = "card"

        card.innerHTML = `<h2>${ciudad.nombre}</h2>`

        catalogo.append(card)
    }
}

render(listaCiudadesconStock)

let estiloElegido = ''

let estilo = document.getElementById("estilo")
estilo.addEventListener("change", ()=>{estiloElegido = estilo.value})

let botonFiltrado = document.getElementById("filtrar")
botonFiltrado.addEventListener("click", filtrado)

function filtrado(){
    let filtroEstilo = listaCiudadesconStock.filter((ciudad)=> ciudad.estilo == estiloElegido)
    render(filtroEstilo)
}

let botonTodas = document.getElementById("verTodas")

botonTodas.addEventListener("click", ()=>render(listaCiudadesconStock))

/* Storage & JSON: */

localStorage.setItem("nuevoEvento", JSON.stringify({ciudad: "Buenos Aires", estilo: "progressive"}));

let valor = JSON.parse(localStorage.getItem("nuevoEvento"));

console.log(valor)

/* localStorage.removeItem("nuevoEvento") */

const eventos = [{ id: 1, ciudad: "Buenos Aires", estilo: "progressive"},
                { id: 2, ciudad: "Rosario", estilo: "techno"},
                { id: 3, ciudad: "Cordoba", estilo: "tech-house"},
                { id: 4, ciudad: "Mendoza", estilo: "progressive"}];

const guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)}

for (const ciudad of eventos){
    guardarLocal(ciudad.id, JSON.stringify(ciudad))
}

/* guardarLocal("ListaEventos", JSON.stringify(eventos)) */