window.addEventListener("load", async function () {
  window.scrollBy(0, -window.pageYOffset);
})

window.addEventListener('scroll', function () {
  if (this.screen.width <= 719) {

  } else if (this.screen.width > 719) {
    var divElements = [
      { id: 'Contact', navbarSelector: '.desktoptopnav .item.left', Title: 'Contact' },
      { id: 'Signup', navbarSelector: '.desktoptopnav .item:nth-child(2)', Title: 'Sign Up' },
      { id: 'Calendar', navbarSelector: '.desktoptopnav .item:nth-child(3)', Title: 'Calendar' },
      { id: 'Board', navbarSelector: '.desktoptopnav .item:nth-child(4)', Title: 'The Board' },
      { id: 'About', navbarSelector: '.desktoptopnav .item:nth-child(5)', Title: 'About' },
      { id: 'Home', navbarSelector: '.desktoptopnav .item.right', Title: 'Home' }
    ];
    divElements.forEach(function (divElement) {
      var element = document.getElementById(divElement.id);
      var navbarElement = document.querySelector(divElement.navbarSelector);
      var rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        navbarElement.classList.add('active');
      } else {
        navbarElement.classList.remove('active');
      }
    });
  } else {
    //console.log("Unknown device");
  }

});

function reveal() {
  var reveals = document.querySelectorAll(".revealfor");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 50;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("is-visible");
    } else {
      reveals[i].classList.remove("is-visible");
    }
  }
}

window.addEventListener("scroll", reveal);