var imagenMostrando = 0;
var contenedorScrolleable = document.querySelector('.carrousel-contenedor');

function deshabilitarBotones(indiceBotonDeshabilitado) {
    var botones = document.querySelectorAll('button');
    botones[0].setAttribute('disabled', undefined);
    botones[1].setAttribute('disabled', undefined);
    setTimeout(function () {
        botones[0].removeAttribute('disabled');
        botones[1].removeAttribute('disabled');
        if(typeof indiceBotonDeshabilitado !== 'undefined') {
            botones[indiceBotonDeshabilitado].setAttribute('disabled', undefined);
        }
    }, 500);
}

function scrollIzquierda() {
    // habilitar o deshabilitar botones.
    if(imagenMostrando === 1) {
        deshabilitarBotones(0);
    } else {
        deshabilitarBotones();
    }

    // scroll en sí.
    contenedorScrolleable.scrollBy({ left: -300, behavior: 'smooth' });

    // actualizar imagen que se está mostrando.
    imagenMostrando = imagenMostrando - 1;
}

function scrollDerecha() {
    // habilitar o deshabilitar botones.
    if(imagenMostrando === 3) {
        deshabilitarBotones(1);
    } else {
        deshabilitarBotones();
    }

    // scroll en sí.
    contenedorScrolleable.scrollBy({ left: 300, behavior: 'smooth' });

    // actualizar imagen que se está mostrando.
    imagenMostrando = imagenMostrando + 1;
}