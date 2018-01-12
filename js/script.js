//Function for parallax scrolling

$(window).scroll(function(e) {
  parallax();
})

function parallax() {
  var scroll = $(window).scrollTop();
  var screenHeight = $(window).height();

  $('.parallax--bg').each(function() {
    var offset = $(this).offset().top;
    var distanceFromBottom = offset - scroll - screenHeight
    
    if (offset > screenHeight && offset) {
      $(this).css('background-position', 'center ' + (( distanceFromBottom  ) * 0.5) +'px');
    } else {
      $(this).css('background-position', 'center ' + (( -scroll ) * 0.5) + 'px');
    }
  })
    
}

//Function for sidebar
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

//Function for hovering links
$("#hoverLinks").find("a").hover(function () {
    $("#PortfolioInfo>*").hide()
        .filter($(this).data("filter")).show()
})


//Function for About Page Nav Bar

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}



//Funciton to fade in when scrolling
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

