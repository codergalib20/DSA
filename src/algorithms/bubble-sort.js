// bubble-sort.js

function bubbleSort(arr) {
  const n = arr.length;
  const sortedArray = [...arr]; // Create a copy of the original array

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      if (sortedArray[j] > sortedArray[j + 1]) {
        // Swap sortedArray[j] and sortedArray[j + 1]
        const temp = sortedArray[j];
        sortedArray[j] = sortedArray[j + 1];
        sortedArray[j + 1] = temp;
        swapped = true;
      }
    }

    // If no two elements were swapped in the inner loop, the array is already sorted
    if (!swapped) {
      break;
    }
  }

  return sortedArray;
}

module.exports = bubbleSort;
