let entrada = prompt("Ingresa tu ciudad o ESC para salir:");

while(entrada != "ESC"){
    switch (entrada) {
        case "Buenos Aires":
            alert("Encontramos un evento en tu ciudad!");
            break;
        case "Rosario":
            alert("Encontramos un evento en tu ciudad!");
            break;
        case "Cordoba":
            alert("Encontramos un evento en tu ciudad!");
            break;
        default:
            alert("Lamentablemente no encontramos un evento en tu ciudad"
            );
            break;
    }

    entrada = prompt("Ingresa tu ciudad o ESC para salir:")
}

