/**
 * Stacks is a data structure where the last entered data is the first to come out.
 * Also know as Last-in, First-out (LIFO).
 *
 * @description Stack implementation in JavaScript with Array
 */
class Stack {
  /**
   * @description Create a stack
   * @param {*} items
   */
  constructor(...items) {
    this.items = [...items];
  }

  /**
   * @description Returns the length of the stack
   * @returns {number} Number of items in the stack
   */
  length() {
    return this.items.length;
  }

  /**
   * @description Adds a single or multiple items to the top of the stack
   * @param {*} items
   * @returns {number} Number of items in the stack
   */
  push(...items) {
    return this.items.push(...items);
  }

  /**
   * @description Retrieve & remove the next item of the stack
   * @returns {*} The top item of the stack
   */
  pop() {
    return this.items.pop();
  }

  /**
   * @description Get the value of the item on top of the stack
   * @returns {*} The top item of the Stack
   */
  peek() {
    return this.items[this.length() - 1];
  }

  /**
   * @description Check if stack is empty
   * @returns {boolean} True if stack is empty, False otherwise
   */
  isEmpty() {
    return this.length() === 0;
  }

  /**
   * @description Removes all the items of the stack
   */
  clear() {
    this.items = [];
  }
}
