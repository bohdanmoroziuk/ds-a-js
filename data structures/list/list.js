
class List {
    constructor() {
        this.size = 0;
        this.pos = 0;
        this.datastore = [];
    }

    get length() {
        return this.size;
    }

    append(element) {
        this.datastore[this.size++] = element;
    }

    insert(element, after) {
        let insertAt = this.find(after);

        if (insertAt > -1) {
            this.datastore.splice(insertAt + 1, 0, element);
            this.size++;
            return true;
        }
        return false;
    }

    remove(element) {
        let foundAt = this.find(element);

        if (foundAt > -1) {
            this.datastore.splice(foundAt, 1);
            this.size--;
            return true;
        }
        return false;
    }

    clear() {
        this.datastore.length = 0;
        this.size = 0;
        this.pos = 0;
    }

    find(element) {
        return this.datastore.indexOf(element);
    }

    contains(element) {
        return this.datastore.includes(element);
    }

    front() {
        this.pos = 0;
    }

    end() {
        this.pos = this.size - 1;
    }

    next() {
        if (this.pos < this.size - 1) {
            this.pos++;
        }
    }

    prev() {
        if (this.pos > 0) {
            this.pos--;
        }
    }

    current() {
        return this.pos;
    }

    get() {
        return this.datastore[this.pos];
    }

    toString() {
        return this.datastore.join(' ');
    }
};