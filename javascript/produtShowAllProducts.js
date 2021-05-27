// Show all product on product page 
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