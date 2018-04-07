
class Queue {
    constructor() {
        this.datastore = [];
    }

    get count() {
        return this.datastore.length;
    }

    enqueue(element) {
        this.datastore.push(element);
    }

    dequeue() {
        return this.datastore.shift();
    }

    front() {
        return this.datastore[0];
    }

    back() {
        return this.datastore[this.datastore.length - 1];
    }

    empty() {
        return this.datastore.length === 0;
    }

    toString() {
        return this.datastore.join(' ');
    }
};