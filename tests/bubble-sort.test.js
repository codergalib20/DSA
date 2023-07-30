// tests/bubble-sort.test.js

const {bubbleSort} = require('../index');

describe('Bubble Sort', () => {
  it('should sort an array of numbers in ascending order', () => {
    const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
    const sortedArray = bubbleSort(unsortedArray);
    expect(sortedArray).toEqual([11, 12, 22, 25, 34, 64, 90]);
  });

  it('should sort an array of strings in lexicographical order', () => {
    const unsortedArray = ['banana', 'apple', 'orange', 'pear'];
    const sortedArray = bubbleSort(unsortedArray);
    expect(sortedArray).toEqual(['apple', 'banana', 'orange', 'pear']);
  });

  it('should sort an array of negative numbers in ascending order', () => {
    const unsortedArray = [-5, -2, -10, -15, -1];
    const sortedArray = bubbleSort(unsortedArray);
    expect(sortedArray).toEqual([-15, -10, -5, -2, -1]);
  });

  it('should return an empty array when given an empty array', () => {
    const emptyArray = [];
    const sortedArray = bubbleSort(emptyArray);
    expect(sortedArray).toEqual([]);
  });

  it('should not modify the original array', () => {
    const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
    const originalArray = [...unsortedArray]; // Create a copy of the original array
    bubbleSort(unsortedArray);
    expect(unsortedArray).toEqual(originalArray);
  });
});
