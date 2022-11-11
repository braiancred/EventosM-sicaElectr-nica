
const listaCiudades = [
 {
    id: 1,
    nombre: "Buenos Aires",
    estilo: "progressive",
    stock: 1
 },
 {
    id: 2,
    nombre: "Rosario",
    estilo: "techno",
    stock: 1
 },
 {
    id: 3,
    nombre: "Cordoba",
    estilo: "tech-house",
    stock: 1
 },
 {
    id: 4,
    nombre: "Mendoza",
    estilo: "progressive",
    stock: 1
 },
 {
    id: 5,
    nombre: "Santa Fe",
    estilo: "techno",
    stock: 1
 },
 {
    id: 6,
    nombre: "Bariloche",
    estilo: "progressive",
    stock: 1
 },
 {
    id: 7,
    nombre: "Salta",
    estilo: "tech-house",
    stock: 1
 },
 {
    id: 8,
    nombre: "Concordia",
    estilo: "techno",
    stock: 1
 },
 {
    id: 9,
    nombre: "Bahía Blanca",
    estilo: "tech-house",
    stock: 1
 },
 {
    id: 10,
    nombre: "Neuquén",
    estilo: "progressive",
    stock: 1
 }
]

fetch('data.json')
.then((response) => response.json())
.then((info) => render(info))

let listaCiudadesconStock = listaCiudades.filter((ciudad) => ciudad.stock > 0)

let listaNombres = listaCiudadesconStock.map((ciudad) => ciudad.nombre) 

let catalog = document.getElementById('catalogo')

let info = []

listaCiudadesconStock.forEach((ciudad) => {
   let container = document.createElement('div')
   container.classList.add('card', 'col-sm-4')

   //Cuerpo
   let cardBody = document.createElement("div")
   cardBody.classList.add('card-body')
   //Ciudad
   let cardCity = document.createElement("h2")
   cardCity.classList.add('card-city')
   cardCity.innerText = ciudad.nombre
   //Estilo
   let cardStile = document.createElement("h3")
   cardStile.classList.add('card-stile')
   cardStile.innerText = ciudad.estilo
   //Botón
   let cardButton = document.createElement("button")
   cardButton.classList.add('btn', 'btn-primary')
   cardButton.innerText = `Ver Info`
   cardButton.setAttribute('mark', ciudad.id)
   cardButton.addEventListener('click', getInfo)

   cardBody.append(cardCity)
   cardBody.append(cardStile)
   cardBody.append(cardButton)
   container.append(cardBody)
   catalog.append(container)

})

/*Librerías: intenté poner el link en el cartel pero no pude. La idea es que les aparezca el link al evento cuando seleccionen cualquier ciudad del catálogo*/

function getInfo(event){
   info.push(event.target.getAttribute('mark'))
   Swal.fire({
      title: '<strong>Hemos encontrado este evento para vos!</strong>',
      icon: 'info',
      html:
        'Puedes ingresar al siguiente link para encontrar toda la información: ' +
        '<a href="//sweetalert2.github.io">https://www.instagram.com/infoticketsarg/</a> ',
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Seguir buscando',
    })
   
}

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