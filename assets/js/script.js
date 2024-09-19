function asignarEventos(){
    let elBoton = document.getElementById('btnEnviar');
    elBoton.addEventListener('click', enviarMensaje);

    let elDivSinLeer = document.getElementById('divSinLeer');
    elDivSinLeer.addEventListener('click', cambiarTextoNormal);


    let contenedorHoraActual = document.getElementById('horaActual');
    let laHoraActual = mostrarHoraActual();

    let hora = laHoraActual.getHours();
    let minutos = laHoraActual.getMinutes();
    let segundos = laHoraActual.getSeconds();
    let horaCompleta = `${hora}:${minutos}:${segundos}`;


    contenedorHoraActual.innerHTML = horaCompleta;
}

function cambiarTextoNormal(){
    let losParrafosSinLeer = document.getElementsByClassName('sinLeer');
    for(let i=0; i< losParrafosSinLeer.length; i++){
        losParrafosSinLeer[i].style.fontWeight = 'normal';
    }
}

function mostrarHoraActual(){
    var currentTime = new Date();
    return currentTime;
}

function enviarMensaje(){
    // identificamos y mostramos el contenedor
    let elContenedor = document.getElementById('contenedorMensajeEnviado');
    elContenedor.style.display = 'block';
    // extraemos el mensaje digitado en la caja de texto
    let laCajaTexto = document.getElementById('txtMensaje');
    // enviamos el mensaje al parrafo adecuado
    let elParrafo = document.getElementById('parrafoMensajeEnviado');
    elParrafo.innerHTML = laCajaTexto.value;
}
