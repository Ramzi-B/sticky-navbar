'use strict';

// Get the navbar element
let menu = document.querySelector('.navbar');

// Get the distance between the current element and the top of the node
let menuTop = menu.offsetTop;

function stickyMenu() {
    console.log(menuTop);
}

window.addEventListener('scroll', stickyMenu);
