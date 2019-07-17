// A list or sequence is an abstract data type that represents a countable number of ordered values, 
// where the same value may occur more than once.

const cursor = Symbol('List.Cursor');
const items = Symbol('List.Items');

/**
 * @description List implementation in JavaScript with Array.
 */
class List {
  /**
   * @description Create a list.
   */
  constructor() {
    this[items] = [];
    this[cursor] = 0;
  }

  /**
   * @description Checks if list is empty.
   * 
   * @returns {Boolean} true if list is empty, false otherwise.
   */
  isEmpty() {
    return this.length() === 0;
  }

  /**
   * @description Returns the length of the list.
   * 
   * @returns {Number} number of items in the list.
   */
  length() {
    return this[items].length;
  }

  /**
   * @description Adds a single item to the list.
   * 
   * @param {*} item
   */
  append(item) {
    this[items].push(item);
  }

  /**
   * @description Adds one item to the list, after the specified item.
   * 
   * @param {*} item
   * @param {*} after
   * @return {Boolean} true if the item is added to the list, otherwise false.
   */
  insert(item, after) {
    const insertAt = this.indexOf(after);

    if (insertAt > -1) {
      this[items].splice(insertAt + 1, 0, item);

      return true;
    }
    return false;
  }

  /**
   * @description Removes an item from the list.
   * 
   * @param {*} item
   * @returns {Boolean} true if the item is removed from the list, otherwise false.
   */
  remove(item) {
    const foundAt = this.indexOf(item);

    if (foundAt > -1) {
      this[items].splice(foundAt, 1);

      return true;
    }
    return false;
  }

  /**
   * @description Removes all the items of the list.
   */
  clear() {
    this[items] = [];
    this[cursor] = 0;
  }

  /**
   * @description Returns the index of an item in the list.
   * 
   * @param {Number} index of an item in the list.
   */
  indexOf(item) {
    return this[items].indexOf(item);
  }

  /**
   * @description Checks if the specified item is in the list.
   * 
   * @param {*} item 
   * @returns {Boolean} true if the item is in the list, otherwise false.
   */
  contains(item) {
    return this[items].includes(item);
  }

  /**
   * @description Moves the cursor to the top of the list.
   */
  front() {
    this[cursor] = 0;
  }

  /**
   * @description Moves the cursor to the end of the list.
   */
  end() {
    this[cursor] = this.length() - 1;
  }

  /**
   * @description Moves the cursor forward one position.
   */
  next() {
    this[cursor] < this.length() - 1 && this[cursor]++;
  }

  /**
   * @description Moves the cursor back one position.
   */
  previous() {
    this[cursor] > 0 && this[cursor]--;
  }

  /**
   * @description Returns the position of the cursor.
   * 
   * @returns {Number} position of the cursor.
   */
  current() {
    return this[cursor];
  }

  /**
   * @description Returns the item according to the cursor position value.
   * 
   * @returns {*} item pointed to by the cursor.
   */
  get() {
    return this[items][this[cursor]];
  }
};