"use strict";
var button = document.querySelector('.page-header__collapse');
var burger = document.querySelector('.page-header__burger');
var cross = document.querySelector('.page-header__cross');

var popup = document.querySelector('.page-nav');
var header = document.querySelector('.page-header');

//menu and form hide on load page
window.onload = function () {
    popup.classList.add('page-nav--close-js');
};
//show menu on tap to burger
button.addEventListener('tap', function (event) {
    event.preventDefault();
    burger.classList.toggle('page-header__burger--open-menu-js');
    cross.classList.toggle('page-header__cross--hide-menu-js');
    popup.classList.toggle('page-nav--close-js');
    header.classList.toggle('page-header--open-menu-js');

});
//hide menu on tap to close button
/*close.addEventListener('tap', function (event) {
    event.preventDefault();
    popup.classList.add('');
});*/

