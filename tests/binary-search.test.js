// tests/binary-search.test.js

const {binarySearch} = require('../index');

describe('Binary Search', () => {
  it('should find the target value in a sorted array and return its index', () => {
    const sortedArray = [10, 20, 30, 40, 50, 60, 70];
    const targetValue = 40;
    const result = binarySearch(sortedArray, targetValue);
    expect(result).toBe(3); // 40 is at index 3 in the sorted array
  });

  it('should return -1 if the target value is not found in the array', () => {
    const sortedArray = [10, 20, 30, 40, 50, 60, 70];
    const targetValue = 35;
    const result = binarySearch(sortedArray, targetValue);
    expect(result).toBe(-1); // 35 is not found in the array
  });

  it('should return the correct index when the target value is at the first position', () => {
    const sortedArray = [10, 20, 30, 40, 50];
    const targetValue = 10;
    const result = binarySearch(sortedArray, targetValue);
    expect(result).toBe(0); // 10 is at index 0 in the sorted array
  });

  it('should return the correct index when the target value is at the last position', () => {
    const sortedArray = [10, 20, 30, 40, 50];
    const targetValue = 50;
    const result = binarySearch(sortedArray, targetValue);
    expect(result).toBe(4); // 50 is at index 4 in the sorted array
  });

  it('should return the correct index when the array has only one element', () => {
    const sortedArray = [10];
    const targetValue = 10;
    const result = binarySearch(sortedArray, targetValue);
    expect(result).toBe(0); // 10 is at index 0 in the sorted array
  });

  it('should return -1 when the array is empty', () => {
    const sortedArray = [];
    const targetValue = 10;
    const result = binarySearch(sortedArray, targetValue);
    expect(result).toBe(-1); // Array is empty, so target is not found
  });
});
