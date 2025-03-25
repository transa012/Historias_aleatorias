const personajes = ["Un astronauta", "Una princesa", "Un pirata", "Un robot", "Un dinosaurio"];
const lugares = ["en la luna", "en un castillo encantado", "en una isla desierta", "en el fondo del mar", "en una nave espacial"];
const acciones = ["encontró un tesoro", "descubrió un portal mágico", "salvó al mundo", "inventó una máquina del tiempo", "se hizo amigo de un dragón"];

function generarHistoria() {
    let personaje = personajes[Math.floor(Math.random() * personajes.length)];
    let lugar = lugares[Math.floor(Math.random() * lugares.length)];
    let accion = acciones[Math.floor(Math.random() * acciones.length)];

    let historia = `${personaje} estaba ${lugar} y de repente ${accion}.`;
    
    document.getElementById("historia").innerHTML = historia;
}