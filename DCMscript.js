// JavaScript Code: script.js

// Function to add a new item to the shopping list
function addItem() {
    // Get the values from the input fields
    const itemName = document.getElementById('item-name').value;
    const itemQuantity = document.getElementById('item-quantity').value;

    // Check if both fields have values
    if (itemName === '' || itemQuantity === '') {
        alert('Please enter both item name and quantity.');
        return;
    }

    // Create a new list item (li) element
    const li = document.createElement('li');
    li.className = 'shopping-list-item';

    // Create a span element for the item name and quantity
    const span = document.createElement('span');
    span.textContent = ${itemName} (x${itemQuantity});
    li.appendChild(span);

    // Create the Edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = function () {
        editItem(li, span);
    };
    li.appendChild(editButton);

    // Create the Remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = function () {
        removeItem(li);
    };
    li.appendChild(removeButton);

    // Append the list item to the shopping list
    document.getElementById('shopping-list').appendChild(li);

    // Clear the input fields
    document.getElementById('item-name').value = '';
    document.getElementById('item-quantity').value = '';
}

// Function to edit an existing item in the shopping list
function editItem(li, span) {
    // Get the current values
    const currentItem = span.textContent.split(' (x');
    const itemName = currentItem[0];
    const itemQuantity = currentItem[1].slice(0, -1);

    // Prompt the user to enter new values
    const newItemName = prompt('Enter new item name:', itemName);
    const newItemQuantity = prompt('Enter new quantity:', itemQuantity);

    // Update the span element with new values
    if (newItemName !== null && newItemQuantity !== null) {
        span.textContent = ${newItemName} (x${newItemQuantity});
    }
}

// Function to remove an item from the shopping list
function removeItem(li) {
    li.remove();
}

// Add event listener to the Add Item button
document.getElementById('add-item').addEventListener('click', addItem);