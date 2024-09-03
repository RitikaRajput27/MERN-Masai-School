// Initialize the array
let numbers = [5, 3, 8, 1, 2];

// Function to add a number to the array
function addNumber(array, number) {
  array.push(number);
  return array;
}

// Function to remove a number from the array
function removeNumber(array, number) {
  const index = array.indexOf(number);
  if (index !== -1) {
    array.splice(index, 1);
  }
  return array;
}

// Function to sort the numbers in the array
function sortNumbers(array) {
  return array.slice().sort((a, b) => a - b);
}

// Function to calculate the sum of the numbers in the array
function calculateSum(array) {
  return array.reduce((acc, current) => acc + current, 0);
}

// Function to calculate the average of the numbers in the array
function calculateAverage(array) {
  return calculateSum(array) / array.length;
}

// Main program
console.log("Original array:", numbers);

// Add a number
numbers = addNumber(numbers, 4);
console.log("After adding 4:", numbers);

// Remove a number
numbers = removeNumber(numbers, 3);
console.log("After removing 3:", numbers);

// Sort the numbers
const sortedNumbers = sortNumbers(numbers);
console.log("Sorted array:", sortedNumbers);

// Calculate sum
const sum = calculateSum(numbers);
console.log("Sum:", sum);

// Calculate average
const average = calculateAverage(numbers);
console.log("Average:", average);