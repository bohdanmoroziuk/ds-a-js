const items = Symbol('Queue.Items');

/**
 * A queue is a collection in which the entities in the collection are kept in order
 * and the principal (or only) operations on the collection are the addition of entities
 * to the rear terminal position, known as enqueue, and removal of entities from the
 * front terminal position, known as dequeue.
 * This makes the queue a First-In-First-Out (FIFO) data structure.
 *
 * @description Queue implementation in JavaScript with Array.
 */
class Queue {
  /**
   * @description Create a queue.
   */
  constructor() {
    this[items] = [];
  }

  /**
   * @description Returns current size of queue.
   * 
   * @return {Number} number of items in the queue.
   */
  length() {
    return this[items].length;
  }

  /**
   * @description Adds a single or multiple items to the queue.
   * 
   * @param {*} values
   * @return {Number} number of items in the queue.
   */
  enqueue(...values) {
    return this[items].push(...values);
  }

  /**
   * @description Retrieves & removes the next item of the queue.
   *
   * @return {*} the data stored in item.
   */
  dequeue() {
    return this[items].shift();
  }

  /**
   * @description Returns item at front of queue without dequeueing.
   * 
   * @return {*} the data stored in item.
   */
  front() {
    return this[items][0];
  }

  /**
   * @description Checks if queue is empty.
   * 
   * @returns {boolean} false if the queue is empty or true if not.
   */
  isEmpty() {
    return this.length() === 0;
  }

  /**
   * @description Removes all the items of the queue.
   */
  clear() {
    this[items] = [];
  }
}
