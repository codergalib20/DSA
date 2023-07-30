// Define the Node class representing each node in the linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null; // Pointer to the next node initially set to null
  }
}

// Define the LinkedList class
class LinkedList {
  constructor() {
    this.head = null; // Pointer to the first node (head) initially set to null
    this.tail = null; // Pointer to the last node (tail) initially set to null
    this.length = 0; // To keep track of the number of nodes in the list
  }

  // Add a new node to the end of the linked list
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      // If the list is empty, set the new node as both head and tail
      this.head = newNode;
      this.tail = newNode;
    } else {
      // If the list is not empty, add the new node after the tail and update the tail pointer
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  // Add a new node to the beginning of the linked list
  prepend(value) {
    const newNode = new Node(value);

    if (!this.head) {
      // If the list is empty, set the new node as both head and tail
      this.head = newNode;
      this.tail = newNode;
    } else {
      // If the list is not empty, add the new node before the head and update the head pointer
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  // Remove the first occurrence of a node with the given value from the linked list
  remove(value) {
    if (!this.head) {
      // List is empty, nothing to remove
      return;
    }

    if (this.head.value === value) {
      // If the value to be removed is in the head node
      this.head = this.head.next;
      this.length--;

      // If the list becomes empty after removing the head node
      if (!this.head) {
        this.tail = null;
      }

      return;
    }

    let currentNode = this.head;
    let prevNode = null;

    while (currentNode) {
      if (currentNode.value === value) {
        // Found the node to remove
        prevNode.next = currentNode.next;

        // If the node to be removed is the tail node, update the tail pointer
        if (currentNode === this.tail) {
          this.tail = prevNode;
        }

        this.length--;
        return;
      }

      prevNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  // Search for a node with the given value in the linked list
  search(value) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode; // Node with the given value found
      }

      currentNode = currentNode.next;
    }

    return null; // Node with the given value not found
  }

  // Get the length of the linked list
  getLength() {
    return this.length;
  }

  // Convert the linked list to an array
  toArray() {
    const result = [];
    let currentNode = this.head;

    while (currentNode) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return result;
  }

  // Clear the linked list (remove all nodes)
  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}


module.exports = LinkedList;
