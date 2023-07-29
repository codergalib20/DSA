// Define the Node class, representing each element in the linked list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null; // Pointer to the next node (initially set to null)
  }
}

// Define the LinkedList class to handle the operations on the list
class LinkedList {
  constructor() {
    this.head = null; // Points to the first node (initially set to null)
    his.tail = null; // Points to the last node (initially set to null)
    this.length = 0; // Set length
  }

  // Method to add a node at the end of the linked list
  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Method to add a node at the beginning of the linked list
  prepend(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  // Method to delete a node with the given data from the linked list
  delete(data) {
    if (!this.head) return; // Empty list

    if (this.head.data === data) {
      // If the node to be deleted is the head
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null; // List is empty now
      }
      return;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.data === data) {
        currentNode.next = currentNode.next.next;
        if (!currentNode.next) {
          this.tail = currentNode; // Update tail if last node is deleted
        }
        return;
      }
      currentNode = currentNode.next;
    }
  }

  // Method to search for a node with the given data and return it
  search(data) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === data) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null; // Node with the given data not found
  }

  // Method to print the linked list elements
  print() {
    const elements = [];
    let currentNode = this.head;
    while (currentNode) {
      elements.push(currentNode.data);
      currentNode = currentNode.next;
    }
    console.log(elements.join(" -> "));
  }
}

// Example usage:
const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.prepend(5);
linkedList.print(); // Output: 5 -> 10 -> 20 -> 30

linkedList.delete(20);
linkedList.print(); // Output: 5 -> 10 -> 30

console.log(linkedList.search(10)); // Output: Node { data: 10, next: Node { data: 30, next: null } }
