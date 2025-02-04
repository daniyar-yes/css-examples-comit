const inputField = document.querySelector('#grocery-input');
const addItemButton = document.querySelector('#add-item');
const groceryList = document.querySelector('#grocery-list')


function addGrocery() {
    const textFromInput = inputField.value.trim();

    if (textFromInput) {
        // create a list item with specific text of grocery
        const listItem = document.createElement('button');
        listItem.textContent = 'Im a button';

        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';

        checkBox.addEventListener('change', () => {
            listItem.style.textDecoration = checkBox.checked ? 'line-through' : 'none';
        })


        listItem.appendChild(checkBox)

        groceryList.appendChild(listItem)

        inputField.value = '';
    }
    

}

addItemButton.addEventListener('click', addGrocery)

inputField.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addGrocery();
    }
})


