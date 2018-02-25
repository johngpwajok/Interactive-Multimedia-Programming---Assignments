var shoppingModel = new ShoppingModel();
registerListeners();

function addItem()
 {
   var name = document.getElementById("nameInput").value;
   var price = document.getElementById("priceInput").value;

   var shopItem = new ShoppingItem(name);
   shopItem.price = Number(price);

   shoppingModel.addNewItem(shopItem);
 }

function registerListeners() {
  shoppingModel.addNewListener(updateList);
  shoppingModel.addNewListener(updatePrice);
}

 function updateList() {
   var list = document.getElementById("list");
   list.innerHTML = "";
   shoppingModel.allItems.forEach(function(element){
     list.innerHTML += "<br>" + element.name;
   });
 }

 function updatePrice() {
   var totalPrice = 0;
   shoppingModel.allItems.forEach(function(element){
     totalPrice += element.price
   });
   var priceElement = document.getElementById("priceElement");
   priceElement.innerHTML = totalPrice + " EUR";
 }