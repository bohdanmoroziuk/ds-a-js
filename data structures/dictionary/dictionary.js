
class Dictionary {
    constructor() {
        this.datastore = [];
    }

    get length() {
        return Object.keys(this.datastore).length;
    }

    add(key, value) {
        this.datastore[key] = value;
    }

    remove(key) {
        delete this.datastore[key];
    }

    find(key) {
        return this.datastore[key];
    }

    show() {
        for (let key of Object.keys(this.datastore)) {
            console.log(`${key} -> ${this.datastore[key]}`);
        }
    }

    clear() {
        for (let key of Object.keys(this.datastore)) {
            delete this.datastore[key];
        }
    }
};