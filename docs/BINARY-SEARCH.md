## Algorithms

### Binary Search

Binary Search is an efficient algorithm for finding the position of a target value within a sorted array.

**Function:**

- `binarySearch(arr, target)`: Find the index of the target value in the sorted array or return -1 if not found.

**Example:**

```javascript
const { binarySearch } = require("all-dsa");

const sortedArray = [10, 20, 30, 40, 50, 60, 70];
const targetValue = 40;

const result = binarySearch(sortedArray, targetValue);
console.log(result); // Output: 3 (index of 40 in the array)
```
