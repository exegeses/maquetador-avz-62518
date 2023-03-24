const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('header nav');

hamburger.addEventListener(
        'click',
            function(){
                menu.classList.toggle('show-menu');
            }
);