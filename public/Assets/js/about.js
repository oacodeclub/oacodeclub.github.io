window.addEventListener('scroll', function() {
    var divElements = [
        {id: 'Contact', navbarSelector: '.topnav .item.left'},
        {id: 'Signup', navbarSelector: '.topnav .item:nth-child(2)'},
        {id: 'Calendar', navbarSelector: '.topnav .item:nth-child(3)'},
        {id: 'Board', navbarSelector: '.topnav .item:nth-child(4)'},
        {id: 'About', navbarSelector: '.topnav .item:nth-child(5)'},
        {id: 'Home', navbarSelector: '.topnav .item.right'}
    ];
    divElements.forEach(function(divElement) {
        var element = document.getElementById(divElement.id);
        var navbarElement = document.querySelector(divElement.navbarSelector);
        var rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            navbarElement.classList.add('active');
        } else {
            navbarElement.classList.remove('active');
        }
    });
});