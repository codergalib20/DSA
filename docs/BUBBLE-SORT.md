## Algorithms

### Bubble Sort

Bubble Sort is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares adjacent elements, and swaps them if they are in the wrong order.

**Function:**

- `bubbleSort(arr)`: Sorts the input array in ascending order using the Bubble Sort algorithm.

**Example:**

```javascript
const { bubbleSort } = require("all-dsa");

const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(unsortedArray);
console.log(unsortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]
```
