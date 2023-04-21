const webdev = document.querySelector('#webdev');
const guy = document.querySelector('#guy');


window.addEventListener(
            'scroll',
        function ()
        {
            let posObj = webdev.getBoundingClientRect().top;
            console.log(posObj);

            if( posObj < 360 ){
                webdev.style.animation = 'left-to-right 2s forwards';
                guy.style.animation = 'right-to-left 2.5s forwards';
            }
        }
);