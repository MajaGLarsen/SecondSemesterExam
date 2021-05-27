// Navigation bar, burger menu START
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".mar-nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".mar-nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
// Navigation bar, burger menu END


// Counter on about us - counts the number of followers on instagram, youtube and facebook
const counters = document.querySelectorAll('.counter')
counters.forEach((counter) => {
	counter.innerText = '0'

	// Det lille + tegn ændrer tallet fra string til number
	const updateCounter = () => {
		const target = +counter.getAttribute('data-target')
		const c = + counter.innerText;

		const increment = target / 150;

		if (c < target) {
			counter.innerText = `${Math.ceil( c + increment)}`;
			setTimeout(updateCounter, 60);
		} else {
			counter.innerText = target;
		}
	};
	updateCounter()
});


// Pop up boxes on bikes on product page START
// Get the modal
var modal1 = document.getElementById("specModal1");
var modal2 = document.getElementById("specModal2");
var modal3 = document.getElementById("specModal3");
var modal4 = document.getElementById("specModal4");
var modalH = document.getElementById("specModalH");

// Get the button that opens the modal
var btn1 = document.getElementById("specification-button1");
var btn2 = document.getElementById("specification-button2");
var btn3 = document.getElementById("specification-button3");
var btn4 = document.getElementById("specification-button4");
var btnH = document.getElementById("specification-buttonH");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("specification-close1")[0];
var span2 = document.getElementsByClassName("specification-close2")[0];
var span3 = document.getElementsByClassName("specification-close3")[0];
var span4 = document.getElementsByClassName("specification-close4")[0];
var spanH = document.getElementsByClassName("specification-closeH")[0];

// When the user clicks the button, open the modal 
btn1.onclick = function() {
	modal1.style.display = "block";
  };
btn2.onclick = function() {
	modal2.style.display = "block";
  };
btn3.onclick = function() {
	modal3.style.display = "block";
};
btn4.onclick = function() {
	modal4.style.display = "block";
}; 
btnH.onclick = function() {
modalH.style.display = "block";
}; 
// your code 


// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
};

span2.onclick = function() {
	modal2.style.display = "none";
};

span3.onclick = function() {
	modal3.style.display = "none";
};

span4.onclick = function() {
	modal4.style.display = "none";
}; 
spanH.onclick = function() {
	modalH.style.display = "none";
}; 
// Pop up boxes on bikes on product page END



// Show all product on product page START
var btnShow = document.getElementById("loadMore");
var btnShowClicked = false;

var showProducts = document.getElementById("showMore");
showProducts.style.display = "none"; 
btnShow.addEventListener('click', showAllProducts)

function showAllProducts () {
	// btnShowClicked får den modsatte værdi (false-true)
	btnShowClicked = !btnShowClicked;
	if(btnShowClicked) {
		showProducts.style.display = "block";  
		btnShow.innerText = "Skjul produkter";
	} else {
		showProducts.style.display = "none"; 
		btnShow.innerText = "Vis alle produkter";
	}	
}
// Show all product on product page END



// Sign up form on about page START
function signUpValidate(){
	var signUpName = document.getElementById("signUpName").value;
	var signUpEmail = document.getElementById("signUpEmail").value;
	var signUpError_message = document.getElementById("signUpError_message");

	var signUpErrorText;
	if(signUpName.length < 2){
		signUpErrorText = "Indtast venligst et gyldigt navn";
	  signUpError_message.innerText = signUpErrorText;
	  return false;
	}
	if(signUpEmail.length < 6){
		signUpErrorText = "Indtast venligst en gyldig email";
	  signUpError_message.innerText = signUpErrorText;
	  return false;
	}
	alert("Du er nu tilmeldt vores nyhedsbrev!");
	return true;
  }
  // Sign up form on about page END


// Contact form START
function validate(){
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;
	var error_message = document.getElementById("error_message");

	var text;
	if(name.length < 2){
	  text = "Indtast venligst et gyldigt navn";
	  error_message.innerText = text;
	  return false;
	}
	if(email.length < 6){
	  text = "Indtast venligst en gyldig email";
	  error_message.innerText = text;
	  return false;
	}
	if(message.length <= 2){
	  text = "Venligst skriv din besked";
	  error_message.innerText = text;
	  return false;
	}
	alert("Din besked er sendt, du hører tilbage fra os snarest muligt");
	return true;
  }
  // Contact form END