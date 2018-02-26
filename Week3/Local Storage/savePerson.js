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


/*const input = document.getElementById('nameInput');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

const liMaker = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  liMaker(input.value);
  input.value = "";
});
*/
data.forEach(item => {
  liMaker(item);
});

