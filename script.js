// Botones para mostrar y ocultar el texto de las entradas
const botones = document.querySelectorAll('.leer');

botones.forEach(function(boton) {
    boton.addEventListener('click', function() {
        const idTexto = boton.getAttribute('data-texto');
        const texto = document.getElementById(idTexto);

        if (texto.hidden) {
            texto.hidden = false;
            boton.textContent = 'Leer menos';
        } else {
            texto.hidden = true;
            boton.textContent = 'Leer más';
        }
    });
});

// Búsqueda de entradas por palabras
const buscar = document.getElementById('buscar');
const entradas = document.querySelectorAll('.entrada');
const resultado = document.getElementById('resultado');

buscar.addEventListener('input', function() {
    const palabra = buscar.value.toLowerCase().trim();
    let encontradas = 0;

    entradas.forEach(function(entrada) {
        const contenido = entrada.textContent.toLowerCase();

        if (contenido.includes(palabra)) {
            entrada.hidden = false;
            encontradas++;
        } else {
            entrada.hidden = true;
        }
    });

    if (encontradas === 0) {
        resultado.textContent = 'No se han encontrado entradas.';
    } else {
        resultado.textContent = 'Entradas encontradas: ' + encontradas;
    }
});

// Validación básica del formulario. No envía mensajes a un servidor.
const formulario = document.getElementById('formulario');
const aviso = document.getElementById('aviso');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (nombre.length < 2 || mensaje.length < 10) {
        aviso.textContent = 'Revisa el nombre y el mensaje.';
    } else {
        aviso.textContent = 'Gracias, ' + nombre + '. Los datos son correctos. Este formulario es una demostración y no envía mensajes.';
        formulario.reset();
    }
});
