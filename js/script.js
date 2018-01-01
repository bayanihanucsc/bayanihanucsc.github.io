function toggleSidebar() {


   $('#sidebarCollapse').on('click', function() {
       // closes any opened lists in sidebar with collapse class
      // $('.collapse').collapse('hide');

      // adds .active class to sidebar, which makes the sidebar appear
      $('#sidebar').addClass('active');

      $('a[aria-expanded=true]').attr('aria-expanded', 'false');
      $('.overlay').fadeIn();  // fades in the hidden .overlay element 
   });

   $('#closeSidebar, .overlay').on('click', function(){
      $('#sidebar').removeClass('active');
      $('.overlay').fadeOut();
   });
}

function openNav() {
   document.getElementById("mySidenav").style.width = "200px";
}

function closeNav() {
   document.getElementById("mySidenav").style.width = "0";
}

function test1() {
   console.log('yolo');
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


