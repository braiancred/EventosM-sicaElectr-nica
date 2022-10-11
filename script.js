function Ciudad(nombre, stock){
    this.nombre = nombre;
    this.stock =  stock;
}

/*con stock me refiero a si hay eventos en esa ciudad o no, es la forma que encontré de hacerlo. Si no hay, se le pone un 0 y entonces no aparece, Y si hay eventos en esa ciudad se le pone un 1 o cualquier numero mayor a 0 para que aparezca en la lista*/

let ciudadA = new Ciudad("Buenos Aires", 1)
let ciudadB = new Ciudad("Rosario", 1)
let ciudadC = new Ciudad("Cordoba", 0)
let ciudadD = new Ciudad("Mendoza", 1)

let listaCiudades = [ ciudadA, ciudadB, ciudadC, ciudadD ]

let listaCiudadesconStock = listaCiudades.filter((ciudad) => ciudad.stock > 0)

let listaNombres = listaCiudadesconStock.map((ciudad) => ciudad.nombre)

function bienvenida(nombre){
    alert("Bienvenido/a " + nombre + " a ElectronicArg! Aquí vas a poder encontrar el evento para ti en tu ciudad!")
        let entrada = prompt("Encontramos eventos en las siguientes ciudades, escribe la tuya para ver mas información o ESC para salir: \n - " + listaNombres.join("\n - "))
        while(entrada != "ESC"){
            switch (entrada) {
                case "Buenos Aires":
                    alert("Encontramos el siguiente evento en tu ciudad!");
                break;
                case "Rosario":
                    alert("Encontramos el siguiente evento en tu ciudad!");
                break;  
                case "Cordoba":
                    alert("Encontramos el siguiente evento en tu ciudad!");
                break;
                default:
                    alert("No se registran eventos en tu ciudad");
                break;
            }      
            entrada = prompt("Ingresa tu ciudad o ESC para salir:")
        } 
}
 
bienvenida("usuario/a")