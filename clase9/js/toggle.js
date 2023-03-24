//ubicamos elementos dentro del DOM
const btn = document.querySelector('#btn');
const caja = document.querySelector('#caja');

/*
en el evento click vamos a activer y dasactivar
la clase cambio
 */
btn.addEventListener(
    'click',
    function ()
    {
        caja.classList.toggle('cambio');
    }
);