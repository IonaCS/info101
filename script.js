
//contactSubmitted and subscribeSubmitted both check if all the feilds have been filled using validateForm
//if all feilds have been filled then the approriate message is displayed

function contactSubmitted (formname, formfeild1, formfeild2, formfeild3) {
	var status = validateForm (formname, formfeild1, formfeild2, formfeild3)
	if (status == true) {
		document.getElementById("contactform").innerHTML = "Thank you for your message! Someone will be in contact in a few days.";		
	}
}

function subscribeSubmitted (formname, formfeild1, formfeild2, formfeild3) {
	var status = validateForm (formname, formfeild1, formfeild2, formfeild3)
	if (status == true) {
		document.getElementById("subscribeform").innerHTML = "Thank you for subscribing! You'll get an email soon to verify your details.";		
	}
}

function validateForm (formname, formfeild1, formfeild2, formfeild3) {
    var a=document.forms[formname][formfeild1].value;
    var b=document.forms[formname][formfeild2].value;
    var c=document.forms[formname][formfeild2].value;
    if (a==null || a=="",b==null || b=="",c==null || c=="") {
        alert("Please fill in all the fields");
        return false;
    } else {
    	return true;
    }
}
//validateForm source - https://stackoverflow.com/questions/3937513/javascript-validation-for-empty-input-field
