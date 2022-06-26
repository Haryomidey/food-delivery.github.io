const bars = document.querySelector(".fa-bars");
let navbar = document.querySelector(".navbar");
let moon = document.querySelector(".fa");
let body = document.querySelector("body");
let header = document.querySelector("header");
let menuColor = document.querySelectorAll(".menu-color");

bars.addEventListener("click", () => {
    navbar.classList.toggle("navbar-display");
    bars.classList.toggle("fa-xmark");
})

moon.addEventListener("click", ()=>{
    moon.classList.toggle("fa-sun");
    body.classList.toggle("body-active");
    for (let i = 0; i < menuColor.length; i++){
        menuColor[i].classList.toggle("menu-active");
    }
})


window.onscroll = () => {
    navbar.classList.remove('navbar-display');
    bars.classList.remove("fa-xmark");
}
window.onresize = () => {
    navbar.classList.remove('navbar-display');
    bars.classList.remove("fa-xmark");
}


const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    reset: true
});

sr.reveal('.first-section, .second-section, .third-section, .fourth-section, .fifth-section')
