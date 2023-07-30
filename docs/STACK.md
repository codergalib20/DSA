## Data Structures

### Stack

A Stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle. Elements are added to the top of the stack and removed from the top.

**Methods:**

- `push(element)`: Add an element to the top of the stack.
- `pop()`: Remove and return the top element from the stack.
- `peek()`: Return the top element of the stack without removing it.
- `isEmpty()`: Check if the stack is empty.
- `size()`: Get the number of elements in the stack.
- `clear()`: Clear the stack.

**Example:**

```javascript
const { Stack } = require("all-dsa");

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); // Output: 30
console.log(stack.pop()); // Output: 30
console.log(stack.size()); // Output: 2
console.log(stack.isEmpty()); // Output: false

stack.clear();
console.log(stack.size()); // Output: 0
console.log(stack.isEmpty()); // Output: true
```
