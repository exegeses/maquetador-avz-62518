//ubicamos elemento/s dentro del DOM
//const caja = document.getElementById('caja');
const caja = document.querySelector('#caja');
const btnNaranja = document.querySelector('#btnNaranja');

/*
 controlar el div con el id "caja"
 SIN interactividad
* */
caja.style.backgroundColor = 'pink';

//declaramos funciones de control
function pintarVerde()
{
    caja.style.backgroundColor = '#6f4';
}

//hacemos que el botón naranja escuche el evento 'click'
btnNaranja.addEventListener(
        'click',
            function pintarNaranja()
            {
                caja.style.backgroundColor = '#ff9544';
            }
);

