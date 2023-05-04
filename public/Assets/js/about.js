window.addEventListener('scroll', function() {
    if (this.screen.width <= 719) {

      } else if (this.screen.width > 719) {
        var divElements = [
            {id: 'Contact', navbarSelector: '.desktoptopnav .item.left'},
            {id: 'Signup', navbarSelector: '.desktoptopnav .item:nth-child(2)'},
            {id: 'Calendar', navbarSelector: '.desktoptopnav .item:nth-child(3)'},
            {id: 'Board', navbarSelector: '.desktoptopnav .item:nth-child(4)'},
            {id: 'About', navbarSelector: '.desktoptopnav .item:nth-child(5)'},
            {id: 'Home', navbarSelector: '.desktoptopnav .item.right'}
        ];
        divElements.forEach(function(divElement) {
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

