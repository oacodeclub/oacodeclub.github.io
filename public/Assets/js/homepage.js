window.addEventListener("load", async function () {
  window.scrollTo(0, 0);
  document.documentElement.style.scrollBehavior = 'smooth';
});

window.addEventListener('scroll', function () {
  if (this.screen.width <= 719) {
    let divElements = [
      { id: 'Home', navbarSelector: '.dropdown-content .item.left', Title: 'Home' },
      { id: 'About', navbarSelector: '.dropdown-content .item:nth-child(2)', Title: 'About' },
      { id: 'Board', navbarSelector: '.dropdown-content .item:nth-child(3)', Title: 'The Board' },
      { id: 'Calendar', navbarSelector: '.dropdown-content .item:nth-child(4)', Title: 'Calendar' },
      { id: 'Signup', navbarSelector: '.dropdown-content .item:nth-child(5)', Title: 'Sign Up' },
      { id: 'Contact', navbarSelector: '.dropdown-content .item.right', Title: 'Contact' }
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
    //console.log("Unknown device");
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
      if (rect.top <= window.innerHeight && rect.bottom > 0) {
        navbarElement.classList.add('active');
      } else {
        navbarElement.classList.remove('active');
      }
    });
  } else {
    //console.log("Unknown device");
  }
});

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropDown() {
  document.getElementById("MobileVisibleUl").classList.toggle("show");
}

async function submitSignUp() {
  let firstName = document.getElementById("FirstNameSign").value;
  let lastName = document.getElementById("LastNameSign").value;
  let email = document.getElementById("EmailSign").value;
  let studentID = document.getElementById("studentIDSign").value;

  let data = {
    "firstName": firstName,
    "lastName": lastName,
    "Email": email,
    "studentID": studentID
  };

  let submit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };

  await fetch("/signup", submit)
    .then(response => response.text)
    .then(data => {
      if (data != null || data != "" || data != undefined) {
        return 1;
      } else {
        return 0;
      }
    });
}

function submitContact() {
  let firstName = document.getElementById("FirstNameContact").value;
  let lastName = document.getElementById("LastNameContact").value;
  let email = document.getElementById("EmailContact").value;
  let Subject = document.getElementById("SubjectContact").value;
  let Message = document.getElementById("MessageContact").value;


  let data = {
    "firstName": firstName,
    "lastName": lastName,
    "Email": email,
    "Subject": Subject,
    "Message": Message
  };

  let submit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };

  fetch("/contact", submit)
    .then(response => response.text)
    .then(data => {
      if (data != null || data != "" || data != undefined) {
        return 1;
      } else {
        return 0;
      }
    })
}