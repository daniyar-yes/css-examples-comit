const groceryItemFromInput = document.querySelector("input");
const addButton = document.querySelector("button");

function addNewGroceryItem() {
    const itemToAdd= groceryItemFromInput.value;
    if (itemToAdd) {
        const newGroceryItem = document.createElement("li");
        newGroceryItem.textContent = itemToAdd;
        document.querySelector("ul").appendChild(newGroceryItem);
        groceryItemFromInput.value = "";
    }
}

addButton.addEventListener('click', addNewGroceryItem);




