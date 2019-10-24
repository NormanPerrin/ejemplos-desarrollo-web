async function buscarFeriados(elEvento) {
    elEvento.preventDefault();

    const anio = elEvento.target[0].value;

    const respuesta = await fetch(`https://nolaborables.com.ar/api/v2/feriados/${anio}`);
    const feriados = await respuesta.json();

    const table = document.querySelector('table');

    // {motivo: "Año Nuevo", tipo: "inamovible", dia: 1, mes: 1, id: "año-nuevo"}
    feriados.forEach(function (feriado) {
        const row = table.insertRow();

        row.insertCell().textContent = feriado.motivo;
        row.insertCell().textContent = feriado.tipo;
        row.insertCell().textContent = feriado.dia;
        row.insertCell().textContent = feriado.mes;
    });
}