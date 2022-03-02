/*const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.menu ');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})*/

// Responsive Nav
$(function() {
  menu = $('nav ul');

  $('.menu-toggle').on('click', function(e) {
    e.preventDefault(); menu.slideToggle();
  });

  $(window).resize(function(){
    var w = $(this).width(); if(w > 769 && menu.is
    (':hidden')) {
      menu.removeAttr('style');
    }
  });

  $('nav li').on('click', function(e) {

    var w = $(window).width(); if(w < 769 ) {
      menu.slideToggle();
    }
  });
  $('.open-menu').height($(window).height());
  });

// Smooth Scrolling
$('.menu a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top-60
      },
      800,
      function() {
        window.location.hash = hash-60;
      }
    );
  }
});

 window.onscroll = scrollShowNav;
function scrollShowNav() {
   if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
   )
   {
      document.getElementsByClassName("navbar")[0].style.padding = "10px 20px";  
      document.getElementsByClassName("navbar")[0].style.backgroundColor = "var(--dark)";
      document.querySelector("#logo img").style.width = "40px";
   } else {
      document.getElementsByClassName("navbar")[0].style.padding = "20px 50px";
      document.getElementsByClassName("navbar")[0].style.backgroundColor = "rgb(0, 0, 0, 0.7)";
      document.querySelector("#logo img").style.width = "50px";
   }
} 

// Animations
ScrollReveal({
  reset: false,
  distance: '60px',
  duration: 2500,
  delay: 400
});

ScrollReveal().reveal('.about-info', { delay: 0, origin: 'right' });


