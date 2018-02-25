function doFirst{
	var button = document.getElementById(saveButton);
	saveButton.addEventListener("load", save, false);
}

function save(){
	var nameInput = document.getElementById("nameInput").value;
	var saveKey = document.getElementById("saveKey").value
	sessionStorage.setItem(nameInput, saveKey);

	display(nameInput);
}

function display(nameInput){
	var right = document.getElementById(right);
	var saveKey = sessionStorage.getItem(nameInput);
	right.innerHTML = "Name: "+nameInput+" value"+saveKey;
}
window.addEventListener("load", doFirst, false);


