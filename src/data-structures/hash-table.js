// src/data-structures/hash-table.js

class HashTable {
  constructor() {
    this.table = {};
  }

  // Calculate the hash code for a given key
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash << 5) + key.charCodeAt(i);
      hash = hash & hash; // Convert to 32-bit integer
      hash = Math.abs(hash);
    }
    return hash;
  }

  // Add a key-value pair to the hash table
  put(key, value) {
    const hash = this.hash(key);
    if (!this.table[hash]) {
      this.table[hash] = {};
    }
    this.table[hash][key] = value;
  }

  // Get the value associated with a given key from the hash table
  get(key) {
    const hash = this.hash(key);
    if (this.table[hash] && this.table[hash][key]) {
      return this.table[hash][key];
    }
    return undefined;
  }

  // Remove a key-value pair from the hash table
  remove(key) {
    const hash = this.hash(key);
    if (this.table[hash] && this.table[hash][key]) {
      delete this.table[hash][key];
    }
  }

  // Check if a key exists in the hash table
  contains(key) {
    const hash = this.hash(key);
    return this.table[hash] && this.table.hasOwnProperty(hash) && this.table[hash].hasOwnProperty(key);
  }


  // Get all keys stored in the hash table
  getKeys() {
    return Object.keys(this.table).reduce((keys, hash) => {
      return keys.concat(Object.keys(this.table[hash]));
    }, []);
  }

  // Get all values stored in the hash table
  getValues() {
    return Object.keys(this.table).reduce((values, hash) => {
      return values.concat(Object.values(this.table[hash]));
    }, []);
  }

  // Clear the hash table
  clear() {
    this.table = {};
  }

  // Get the size of the hash table
  size() {
    return this.getKeys().length;
  }
}

module.exports = HashTable;
