// A set is an abstract data type that can store unique values, without any particular order.

const elements = Symbol('Set.Elements');

/**
 * @description Set implementation in JavaScript with Array.
 */
class Set {
  /**
   * @description Create a set.
   */
  constructor() {
    this[elements] = [];
  }

  /**
   * @description Returns the length of the set.
   * 
   * @returns {Number} number of elements in the set.
   */
  size() {
    return this[elements].length;
  }

  /**
   * @description Adds a single element to the set.
   * 
   * @param {*} element
   * @return {Boolean} true if the element is added to the set, otherwise false
   */
  add(element) {
    if (!this.contains(element)) {
      this[elements].push(element);

      return true;
    }
    return false;
  }

  /**
   * @description Removes an element from the set
   * 
   * @param {*} element 
   * @returns {Boolean} true if the element is removed from the set, otherwise false
   */
  remove(element) {
    const index = this[elements].indexOf(element);

    if (index > -1) {
      this[elements].splice(index, 1);

      return true;
    }
    return false;
  }

  /**
   * @description Checks if the specified element is in the set
   * 
   * @param {*} element 
   * @returns {Boolean} true if the element is in the set, otherwise false
   */
  contains(element) {
    return this[elements].includes(element);
  }

  /**
   * @description Combines sets
   * 
   * @param {Set} set
   * @returns {Set} the union of two sets 
   */
  union(set) {
    const temp = new Set();

    this[elements]
      .forEach(element => temp.add(element));
    
    set[elements]
      .forEach(element => temp.add(element));

    return temp;
  }

  /**
   * @description Finds the intersection of two sets
   * 
   * @param {Set} set
   * @returns {Set} the intersection of sets
   */
  intersect(set) {
    const temp = new Set();

    this[elements].forEach(element => {
      if (set.contains(element)) {
        temp.add(element);
      }
    });
    return temp;
  }

  /**
   * @description Checks if a set is a subset of a passed set
   * 
   * @param {Set} set
   * @returns {Boolean} true if it is a subset of another set, otherwise false
   */
  isSubsetOf(set) {
    if (this.size() > set.size()) {
      return false;
    }

    for (const element of this[elements]) {
      if (!set.contains(element)) {
        return false;
      }
    }
    return true;
  }

  /**
   * @description Finds the difference of two sets
   * 
   * @param {Set} set
   * @returns {Set} the difference of two sets
   */
  difference(set) {
    const temp = new Set();

    this[elements].forEach(element => {
      if (!set.contains(element)) {
        temp.add(element);
      }
    });
    return temp;
  }

  /**
   * @description Removes all the elements of the set.
   */
  clear() {
    this[elements] = [];
  }
};