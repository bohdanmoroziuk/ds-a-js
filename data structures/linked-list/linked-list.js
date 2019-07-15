// A linked list is a data structure that stores multiple values in a linear fashion. 
// Each value in a linked list is contained in its own node, an object that contains 
// the data along with a link to the next node in the list. The link is a pointer 
// to another node object or null if there is no next node. 

const item = Symbol('LinkedList.Node.Item');
const next = Symbol('LinkedList.Node.Next');

/**
 * Each node must contain some data and a pointer to the next node in the list.
 * 
 * @description Linked List Node implementation in JavaScript
 */
class Node {
  /**
 * @description Create a node
 * @param {*} data
 */
  constructor(data, next = null) {
    // The data property contains the value the linked list item should store.
    this[item] = data;
    // The next property is a pointer to the next item in the list. 
    // The next property starts out as null because you don’t yet know the next node. 
    this[next] = null;
  }
};

const head = Symbol('LinkedList.Head');
const values = Symbol('LinkedList.Values');

/**
 * @description Linked List implementation in JavaScript
 */
class LinkedList {
  /**
   * @description Create a linked list
   */
  constructor() {
    // The first node in a linked list is typically called the head, 
    // so the head identifier in this example represents the first node.
    this[head] = null;
  }

  /**
   * @description Adds data to the end of the linked list.
   *
   * @param {Object} data - Data which should be added.
   */
  add(data) {
    const node = new Node(data);

    if (this[head] === null) {
      this[head] = node;
    } else {
      let current = this[head];

      while (current[next]) {
        current = current[next];
      }

      current[next] = node;
    }

    return this;
  }

  /**
   * @description Removes data from the linked list.
   *
   * @param {*} data Data which should be removed.
   * @return {Boolean} Returns true if data has been removed.
   */
  remove(data) {
    let current = this[head];
    let previous = null;

    while (current) {
      if (current[item] === data) {
        if (previous) {
          previous[next] = current[next];
        } else {
          this[head] = current[next];
        }

        return true;
      }

      previous = current;
      current = current[next];
    }

    return false;
  }

  /**
   * @description Removes the first node in the list.
   *
   * @return {Boolean} true if the node was deleted and false otherwise.
   */
  removeFirstNode() {
    if (this.isEmpty()) return false;

    this[head] = this[head][next];

    return true;
  }

  /**
   * @description Removes the last node in the list.
   *
   * @return {Boolean} true if the node was deleted and false otherwise.
   */
  removeLastNode() {
    if (this.isEmpty()) return false;

    if (!this[head][next]) {
      this[head] = null;
      return true;
    }

    let previous = this[head];
    let tail = this[head][next];

    while (tail[next]) {
      previous = tail;
      tail = tail[next];
    }

    previous[next] = null;

    return true;
  }

  /**
   * @description Fully clears the list.
   */
  clear() {
    this[head] = null;
  }

  /**
   * @description Checks whether the list is empty.
   * 
   * @returns {Boolean} true if the list is empty and false otherwise.
   */
  isEmpty() {
    return this[head] === null;
  }

  *[values]() {
    let current = this[head];

    while (current) {
      yield current[item];

      current = current[next];
    }
  }

  [Symbol.iterator]() {
    return this[values]();
  }

  /**
   * @description Prints all the values ​​of the nodes in the list.
   */
  print() {
    for (const value of this) {
      console.log(value);
    }
  }

  /**
   * @description Returns the current size of the list.
   * 
   * @return {Number} number of nodes in the list.
   */
  size() {
    let count = 0;
    let current = this[head];

    while (current) {
      count++;
      current = current[next];
    }

    return count;
  }
};