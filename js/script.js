function toggleSidebar() {
   $('#sidebarCollapse').on('click', function() {
      $('#sidebar').addClass('active');   // adds .active class to sidebar, which makes the sidebar appear
      $('.overlay').fadeIn();  // fades in the hidden .overlay element 
   });

   $('#closeSidebar, .overlay').on('click', function(){
      $('#sidebar').removeClass('active');
      $('.overlay').fadeOut();
   });
  
}

// function for hovering links
$("#hoverLinks").find("a").hover(function () {
    $("#PortfolioInfo>*").hide()
        .filter($(this).data("filter")).show()
})



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

sr.reveal('#aspect_row', {
   duration: 1000,
    origin: 'bottom',
    reset: true
})


