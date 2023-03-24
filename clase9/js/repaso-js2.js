//ubicamos elementos dentro del DOM
const caja = document.querySelector('#caja');
const btnVerde = document.querySelector('#btnVerde');
const btnNaranja = document.querySelector('#btnNaranja');

//hacemos que los botones escuchen el evento 'click'
btnVerde.addEventListener(
        'click',
        function ()
        {
            caja.classList.add('verde');
            caja.classList.remove('naranja');
        }
);
btnNaranja.addEventListener(
        'click',
        function ()
        {
            caja.classList.add('naranja');
            caja.classList.remove('verde');
        }
);