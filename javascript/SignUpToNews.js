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