var PersonModel = new PersonModel();
registerListeners();

function addPerson()
 {
	var name = document.getElementById("nameInput").value;

	var thisPerson = new Individual(name);

	PersonModel.addNewPerson(thisPerson);
 }

function registerListeners() {
	PersonModel.addNewListener(updateList);
}

 function updateList() {
	var list = document.getElementById("list");
	list.innerHTML = "";
	PersonModel.allPeople.forEach(function(element){
	list.innerHTML += "<br>" + element.name;
	});
}

