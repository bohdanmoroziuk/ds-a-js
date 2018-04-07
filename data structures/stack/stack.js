
class Stack {
    constructor() {
        this.datastore = [];
        this.top = 0;
    }

    get length() {
        return this.top;
    }

    push(element) {
        this.datastore[this.top++] = element;
    }

    pop() {
        return this.datastore[--this.top];
    }

    peek() {
        return this.datastore[this.top - 1];
    }

    clear() {
        this.top = 0;
    }
};
