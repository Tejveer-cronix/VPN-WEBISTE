const nav = document.querySelector('.navbar__list');
const menus = document.querySelector('#toggle__menu');

menus.addEventListener('click',() =>
{
    nav.classList.toggle('active');
    menus.classList.toggle('bx-x');
});