// Item object
function Item(id, name, quantity, price) {
  this.id = id;
  this.name = name;
  this.quantity = quantity;
  this.price = price;
}

// Inventory management functions
function addItem(inventory, item) {
  inventory.push(item);
}

function updateItem(inventory, id, newDetails) {
  const itemIndex = inventory.findIndex(item => item.id === id);
  if (itemIndex !== -1) {
    inventory[itemIndex] = { ...inventory[itemIndex], ...newDetails };
  }
}

function deleteItem(inventory, id) {
  const itemIndex = inventory.findIndex(item => item.id === id);
  if (itemIndex !== -1) {
    inventory.splice(itemIndex, 1);
  }
}

// Example usage
const inventory = [];

// Add items
addItem(inventory, new Item(1, 'Apple', 10, 1.00));
addItem(inventory, new Item(2, 'Banana', 5, 0.50));

// Update an item
updateItem(inventory, 1, { quantity: 15 });

// Delete an item
deleteItem(inventory, 2);

// Print inventory
console.log(inventory);