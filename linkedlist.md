# Linkedlist

```js
// Require the modules you need
const { LinkedList, bubbleSort } = require("all-dsa");

// Use the data structures and algorithms
const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
console.log(linkedList.toArray()); // Output: [10, 20, 30]

const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(unsortedArray);
console.log(unsortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]
```

- **LinkedList**
  - **`append(value)`** : Add a new node with the given value to the end of the list.
  - **`prepend(value)`** : Add a new node with the given value to the beginning of the list.
  - **`remove(value)`** : Convert the list to an array.
  - **`getLength()`** : Get the number of nodes in the list.
  - **`clear()`** : Remove all nodes from the list.
