class Node {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}

class Linkedlist {
    constructor() {
        this.head = null;
        this.tail = null;
        this.value = null;
        this.length = 0;
    }

    isEmpty() {
        return 0 === this.length;
    }
}

const list = new Linkedlist()

console.log(list.isEmpty())