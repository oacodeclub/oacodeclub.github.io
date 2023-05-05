window.addEventListener("load", async function () {
  window.scrollBy(0, -window.pageYOffset);
})

window.addEventListener('scroll', function () {
  if (this.screen.width <= 719) {

  } else if (this.screen.width > 719) {
    let divElements = [
      { id: 'Contact', navbarSelector: '.desktoptopnav .item.left', Title: 'Contact' },
      { id: 'Signup', navbarSelector: '.desktoptopnav .item:nth-child(2)', Title: 'Sign Up' },
      { id: 'Calendar', navbarSelector: '.desktoptopnav .item:nth-child(3)', Title: 'Calendar' },
      { id: 'Board', navbarSelector: '.desktoptopnav .item:nth-child(4)', Title: 'The Board' },
      { id: 'About', navbarSelector: '.desktoptopnav .item:nth-child(5)', Title: 'About' },
      { id: 'Home', navbarSelector: '.desktoptopnav .item.right', Title: 'Home' }
    ];
    divElements.forEach(function (divElement) {
      const element = document.getElementById(divElement.id);
      let navbarElement = document.querySelector(divElement.navbarSelector);
      let rect = element.getBoundingClientRect();
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

window.onload = function () {
  var HamburgerSelectionButton = document.getElementById("HamburgerSelectionButton");

  HamburgerSelectionButton.addEventListener("touchstart", function () {
    document.getElementById('MobileVisibleUl').style = 'display:unset;'
  });
}