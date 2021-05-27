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