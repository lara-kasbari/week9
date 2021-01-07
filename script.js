var cardContainer = $(".card-list");
var addButton = $(".submit-btn");
var clearButton = $(".clear-btn");

addButton.on("click", addToList);
clearButton.on("click", clearList);
cardContainer.on("click", deleteItem);

function addToList() {
  event.preventDefault();
  var inputField = $(".name");
  if (inputField.val() == "") {
    alert("Please enter an item");
    return;
  }
  cardContainer.append(`<li class="remove">${inputField.val()}</li>`);
  inputField.val("");
}

function deleteItem() {
  if (event.target.className === "remove") {
    event.target.remove();
  }
}

function clearList() {
  cardContainer.text("");
}
