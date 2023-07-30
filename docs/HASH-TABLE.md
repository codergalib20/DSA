# HashTable Data Structure

The `HashTable` data structure is an efficient way to store and retrieve key-value pairs. It utilizes a hash function to map keys to corresponding indices in an underlying array. This allows for fast access and retrieval of values based on their associated keys.

## Class: HashTable

### Constructor

```javascript
new HashTable();
```

Creates a new instance of the HashTable class.

## Methods

```
put(key, value)
```

Adds a new key-value pair to the hash table.

- key: The key associated with the value.
- value: The value to be stored in the hash table.

`get(key)`

```
get(key)
```

Retrieves the value associated with the given key from the hash table.

- key: The key whose value needs to be retrieved.

Returns the value associated with the key, or undefined if the key does not exist in the hash table.

`remove(key)`

```
remove(key)
```

Removes the key-value pair with the given key from the hash table.

- key: The key of the pair to be removed.

`contains(key)`

```
contains(key)
```

Checks if the hash table contains the given key.

- key: The key to check for existence.

Returns `true` if the key is present in the hash table, or `false` otherwise.

`getKeys()`

```
getKeys()
```

Returns an array containing all the keys stored in the hash table.

`getValues()`

```
getValues()
```

Returns an array containing all the values stored in the hash table.

`clear()`

```
clear()
```

Clears the hash table, removing all key-value pairs.

`size()`

```
size()
```

Returns the number of key-value pairs currently stored in the hash table.

## Example Usage

```
const HashTable = require('./path/to/hash-table');

const hashTable = new HashTable();

hashTable.put('name', 'John');
hashTable.put('age', 30);
hashTable.put('city', 'New York');

console.log(hashTable.get('name')); // Output: "John"
console.log(hashTable.get('age'));  // Output: 30
console.log(hashTable.size());      // Output: 3

hashTable.remove('age');
console.log(hashTable.size());      // Output: 2
console.log(hashTable.contains('city')); // Output: true

console.log(hashTable.getKeys());   // Output: ["name", "city"]
console.log(hashTable.getValues()); // Output: ["John", "New York"]

hashTable.clear();
console.log(hashTable.size());      // Output: 0
console.log(hashTable.contains('name')); // Output: false
```

# Hash Function

The HashTable class uses a hash function to calculate the hash code for a given key. The hash function converts the key into a numeric value that corresponds to an index in the underlying array. The hash function used in this implementation is designed to distribute keys uniformly, minimizing collisions.

# Complexity

The HashTable data structure offers efficient lookup, insertion, and deletion operations when implemented with a good hash function. The average time complexity for these operations is O(1). However, in the case of hash collisions (multiple keys mapping to the same index), the performance can degrade to O(n) in the worst case.

It is essential to choose a suitable hash function to minimize collisions and maintain the desired performance characteristics.

With the HashTable data structure, you can efficiently store and retrieve key-value pairs based on unique keys. It provides a fast and scalable solution for managing data with a large number of elements. Remember to choose an appropriate hash function to ensure optimal performance and avoid excessive collisions.

Happy coding! 🚀
