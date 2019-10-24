function agregarEmoji(src) {
    // primero "limpio" el contenedor.
    const seleccion = document.querySelector('.seleccion');
    seleccion.innerHTML = "";

    // para agregar una imagen a un html...
    //   1. voy a crear una imagen.
    //   2. le voy a asignar como "src" el `emojiSrc`.
    //   3. voy a agregar esta imagen creada en mi html.
    const emoji = document.createElement('img');
    emoji.src = src;
    seleccion.appendChild(emoji);
}

function seleccionar(element) {
    // obtengo el src según el elemento que me llega por parámetro.
    const src = element.children[0].src;
    // almaceno la url de la imagen en mi almacenamiento local.
    localStorage.setItem('miProyecto:emojiSrc', src);

    // agrego el emoji seleccionado.
    agregarEmoji(src);
}

function init() {
    // obtengo el valor del almacenamiento local.
    const emojiSrc = localStorage.getItem('miProyecto:emojiSrc');

    // me fijo si emojiSrc tiene un valor o está vacío.
    if(emojiSrc) {
        // si tiene un valor, entonces agrego el emoji, sino no hago nada.
        agregarEmoji(emojiSrc);
    }
}

init();
