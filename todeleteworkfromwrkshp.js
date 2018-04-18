function changehtml () {
	document.getElementById("example").innerHTML = "I changed thing";
}

function changecss () {
	document.getElementById("example").style.fontSize = "50px";
}

window.onload = function () {
	var d = new Date();
	document.getElementById("demo").innerHTML = d.getFullYear();
}

function validateForm() {
	var submitForm = document.forms["confirm"]["code"].value;
	if (submitForm == "1") {
		alert("Correct");
	} else if (submitForm == "2") {
		alert("yup");
	} else if (submitForm != "1") {
		alert("uhoh");
	}
}

function performOp() {
	var number = document.forms["practice"]["number"].value;
	var newNumber = number * 5;
	document.getElementById("answer").innerHTML = newNumber;
}
