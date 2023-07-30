// tests/stack.test.js

const {Stack} = require('../index');

describe('Stack', () => {
  it('should push elements to the top of the stack', () => {
    const stack = new Stack();
    stack.push(10);
    stack.push(20);
    stack.push(30);
    expect(stack.size()).toBe(3);
  });

  it('should pop elements from the top of the stack', () => {
    const stack = new Stack();
    stack.push(10);
    stack.push(20);
    stack.push(30);

    expect(stack.pop()).toBe(30);
    expect(stack.size()).toBe(2);

    expect(stack.pop()).toBe(20);
    expect(stack.size()).toBe(1);

    expect(stack.pop()).toBe(10);
    expect(stack.size()).toBe(0);

    // Pop from an empty stack should return null
    expect(stack.pop()).toBeNull();
  });

  it('should return the top element of the stack without removing it', () => {
    const stack = new Stack();
    stack.push(10);
    stack.push(20);
    stack.push(30);

    expect(stack.peek()).toBe(30);
    expect(stack.size()).toBe(3);

    stack.pop();

    expect(stack.peek()).toBe(20);
    expect(stack.size()).toBe(2);

    stack.clear();

    // Peek from an empty stack should return null
    expect(stack.peek()).toBeNull();
  });

  it('should check if the stack is empty', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);

    stack.push(10);
    expect(stack.isEmpty()).toBe(false);

    stack.clear();
    expect(stack.isEmpty()).toBe(true);
  });

  it('should get the number of elements in the stack', () => {
    const stack = new Stack();
    expect(stack.size()).toBe(0);

    stack.push(10);
    expect(stack.size()).toBe(1);

    stack.push(20);
    stack.push(30);
    expect(stack.size()).toBe(3);

    stack.pop();
    expect(stack.size()).toBe(2);

    stack.clear();
    expect(stack.size()).toBe(0);
  });

  it('should clear the stack', () => {
    const stack = new Stack();
    stack.push(10);
    stack.push(20);
    stack.push(30);

    stack.clear();
    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
    expect(stack.peek()).toBeNull();
    expect(stack.pop()).toBeNull();
  });
});
