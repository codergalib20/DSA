// tests/queue.test.js

const {Queue} = require('../index');

describe('Queue', () => {
  it('should enqueue elements to the back of the queue', () => {
    const queue = new Queue();
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    expect(queue.size()).toBe(3);
  });

  it('should dequeue elements from the front of the queue', () => {
    const queue = new Queue();
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);

    expect(queue.dequeue()).toBe(10);
    expect(queue.size()).toBe(2);

    expect(queue.dequeue()).toBe(20);
    expect(queue.size()).toBe(1);

    expect(queue.dequeue()).toBe(30);
    expect(queue.size()).toBe(0);

    // Dequeue from an empty queue should return null
    expect(queue.dequeue()).toBeNull();
  });

  it('should return the front element of the queue without removing it', () => {
    const queue = new Queue();
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);

    expect(queue.front()).toBe(10);
    expect(queue.size()).toBe(3);

    queue.dequeue();

    expect(queue.front()).toBe(20);
    expect(queue.size()).toBe(2);

    queue.clear();

    // Front of an empty queue should return null
    expect(queue.front()).toBeNull();
  });

  it('should check if the queue is empty', () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBe(true);

    queue.enqueue(10);
    expect(queue.isEmpty()).toBe(false);

    queue.clear();
    expect(queue.isEmpty()).toBe(true);
  });

  it('should get the number of elements in the queue', () => {
    const queue = new Queue();
    expect(queue.size()).toBe(0);

    queue.enqueue(10);
    expect(queue.size()).toBe(1);

    queue.enqueue(20);
    queue.enqueue(30);
    expect(queue.size()).toBe(3);

    queue.dequeue();
    expect(queue.size()).toBe(2);

    queue.clear();
    expect(queue.size()).toBe(0);
  });

  it('should clear the queue', () => {
    const queue = new Queue();
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);

    queue.clear();
    expect(queue.size()).toBe(0);
    expect(queue.isEmpty()).toBe(true);
    expect(queue.front()).toBeNull();
    expect(queue.dequeue()).toBeNull();
  });
});
