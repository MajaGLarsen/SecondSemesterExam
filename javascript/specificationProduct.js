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
