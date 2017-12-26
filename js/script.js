function openNav() {
   document.getElementById("mySidenav").style.width = "200px";
}

function closeNav() {
   document.getElementById("mySidenav").style.width = "0";
}

window.sr = ScrollReveal();

sr.reveal('.nav1', {
    duration: 3000,
    origin: 'bottom',
    reset: false
})

sr.reveal('#name', {
    duration: 3000,
    origin: 'bottom',
    reset: false
})