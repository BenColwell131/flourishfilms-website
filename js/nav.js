function toggleNav(){
  document.body.classList.toggle('nav-is-open')
}

var menuButton = document.querySelector('.nav-open-button')
menuButton.addEventListener('click', toggleNav)

var closeButton = document.querySelector('.nav-close-button')
closeButton.addEventListener('click', toggleNav)

var navLinks = document.querySelectorAll('.nav-link')
for(var i = 0; i < navLinks.length; i++){
  navLinks[i].addEventListener('click', toggleNav)
}

// Adding the smooth scrolling animation
$(document).ready(function() {
  var scrollLink = $('.scroll');

  scrollLink.click(function(e) {
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000)
  })
})
