function formSubmitted () {
	alert("Thank you for your message! Someone will be in contact within the next couple days.");
}





function subscribeSubmitted () {
	var status = validateForm ()
	if (status == true) {
		document.getElementById("subscribeform").innerHTML = "Thank you for subscribing! You'll get an email soon to verify your details.";		
	}
}

function validateForm () {
    var a=document.forms["subscribe"]["name"].value;
    var b=document.forms["subscribe"]["email"].value;
    var c=document.forms["subscribe"]["password"].value;
    if (a==null || a=="",b==null || b=="",c==null || c=="") {
        alert("Please fill in all the fields");
        return false;
    } else {
    	return true;
    }
}
//validateForm source - https://stackoverflow.com/questions/3937513/javascript-validation-for-empty-input-field
