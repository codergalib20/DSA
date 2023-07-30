// tests/hash-table.test.js

const HashTable = require('../src/data-structures/hash-table');

describe('Hash Table', () => {
// ... other test cases ...

it('should clear the hash table', () => {
const hashTable = new HashTable();

    hashTable.put('name', 'John');
    hashTable.put('age', 30);
    hashTable.put('city', 'New York');

    hashTable.clear();

    expect(hashTable.size()).toBe(0);
    expect(hashTable.contains('name')).toBe(true);
    expect(hashTable.get('name')).toBeUndefined();
    expect(hashTable.get('age')).toBeUndefined();
    expect(hashTable.get('city')).toBeUndefined();

});
});
