const values = Symbol('Stack.Values');

/**
 * Stacks is a data structure where the last entered data is the first to come out.
 * Also know as Last-in, First-out (LIFO).
 *
 * @description Stack implementation in JavaScript with Array.
 */
class Stack {
  /**
   * @description Create a stack.
   */
  constructor() {
    this[values] = [];
  }

  /**
   * @description Returns the length of the stack.
   * 
   * @returns {Number} number of items in the stack.
   */
  length() {
    return this[values].length;
  }

  /**
   * @description Adds a single or multiple items to the top of the stack.
   * 
   * @param {*} items
   * @returns {Number} number of items in the stack.
   */
  push(...items) {
    return this[values].push(...items);
  }

  /**
   * @description Retrieves & removes the next item of the stack.
   * 
   * @returns {*} the top item of the stack.
   */
  pop() {
    return this[values].pop();
  }

  /**
   * @description Gets the value of the item on top of the stack.
   
   * @returns {*} the top item of the stack.
   */
  peek() {
    return this[values][this.length() - 1];
  }

  /**
   * @description Checks if stack is empty.
   * 
   * @returns {Boolean} true if stack is empty, false otherwise.
   */
  isEmpty() {
    return this.length() === 0;
  }

  /**
   * @description Removes all the items of the stack.
   */
  clear() {
    this[values] = [];
  }
}
