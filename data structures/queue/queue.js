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
    this.items = [];
  }

  /**
   * Returns current size of queue.
   * @return {number} Number of items in the queue.
   */
  length() {
    return this.items.length;
  }

  /**
   * Adds a single or multiple items to the queue.
   * @return {number} Number of items in the queue.
   */
  enqueue(...items) {
    return this.items.push(...items);
  }

  /**
   * Retrieves & removes the next item of the queue.
   * @return {*} The data stored in item.
   */
  dequeue() {
    return this.items.shift();
  }

  /**
   * Returns item at front of queue without dequeueing.
   * @return {*} The data stored in item.
   */
  front() {
    return this.items[0];
  }

  /**
   * @description Checks if queue is empty.
   * @returns {boolean} False if the queue is empty or True if not.
   */
  isEmpty() {
    return this.length() === 0;
  }

  /**
   * @description Removes all the items of the queue.
   */
  clear() {
    this.items = [];
  }
}
