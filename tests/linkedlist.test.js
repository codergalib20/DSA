// tests/linked-list.test.js

const {LinkedList} = require('../index');

describe('Linked List', () => {
  it('should append elements to the end of the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append(10);
    linkedList.append(20);
    linkedList.append(30);
    expect(linkedList.toArray()).toEqual([10, 20, 30]);
  });

  it('should prepend elements to the beginning of the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.prepend(10);
    linkedList.prepend(20);
    linkedList.prepend(30);
    expect(linkedList.toArray()).toEqual([30, 20, 10]);
  });

  it('should remove elements from the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append(10);
    linkedList.append(20);
    linkedList.append(30);

    linkedList.remove(20);
    expect(linkedList.toArray()).toEqual([10, 30]);

    linkedList.remove(10);
    expect(linkedList.toArray()).toEqual([30]);

    linkedList.remove(30);
    expect(linkedList.toArray()).toEqual([]);
  });

  it('should search for elements in the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append(10);
    linkedList.append(20);
    linkedList.append(30);

    const node1 = linkedList.search(20);
    const node2 = linkedList.search(40);

    expect(node1.value).toBe(20);
    expect(node2).toBeNull();
  });

  it('should get the length of the linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList.getLength()).toBe(0);

    linkedList.append(10);
    linkedList.append(20);
    linkedList.append(30);

    expect(linkedList.getLength()).toBe(3);
  });

  it('should clear the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append(10);
    linkedList.append(20);
    linkedList.append(30);

    linkedList.clear();
    expect(linkedList.toArray()).toEqual([]);
  });
});
