## Data Structures

### Queue

A Queue is a linear data structure that follows the First-In-First-Out (FIFO) principle. Elements are added to the back of the queue and removed from the front.

**Methods:**

- `enqueue(element)`: Add an element to the back of the queue.
- `dequeue()`: Remove and return the front element from the queue.
- `front()`: Return the front element of the queue without removing it.
- `isEmpty()`: Check if the queue is empty.
- `size()`: Get the number of elements in the queue.
- `clear()`: Clear the queue.

**Example:**

```javascript
const { Queue } = require("all-dsa");

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.front()); // Output: 10
console.log(queue.dequeue()); // Output: 10
console.log(queue.size()); // Output: 2
console.log(queue.isEmpty()); // Output: false

queue.clear();
console.log(queue.size()); // Output: 0
console.log(queue.isEmpty()); // Output: true
```
