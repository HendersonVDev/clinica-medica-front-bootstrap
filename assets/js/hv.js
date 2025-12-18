/**
 * MENU RESPONSIVO DO SITE
 */
let menuCelular = document.querySelector('#menu-celular');
let menuPrincipal = document.querySelector('.menu-principal');

menuCelular.onclick = () =>{
    menuCelular.classList.toggle('bi-x');
    menuPrincipal.classList.toggle('active');
}



/**
 * SLIDE DESTAQUE DO SITE
 */

var swiper = new Swiper(".hvslider", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay:4500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true, 
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});