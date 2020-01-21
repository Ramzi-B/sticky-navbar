'use strict';

let bodyElm = document.body;

// Get the navbar element
let menu = document.querySelector('.navbar');

// Get the distance between the current element and the top of the node
let menuTop = menu.offsetTop;

function stickyMenu() {
    console.log(menuTop);

    if (window.scrollY >= menuTop) {
        // give the height of the menu to the body
        bodyElm.style.paddingTop = menu.offsetHeight + 'px';
        bodyElm.classList.add('fix-menu');
    }
    else {
        // reset style
        bodyElm.style.paddingTop = 0;
        bodyElm.classList.remove('fix-menu');
    }
}

window.document.addEventListener('scroll', stickyMenu);
