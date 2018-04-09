
class Set {
    constructor() {
        this.datastore = [];
    }

    get size() {
        return this.datastore.length;
    }

    add(element) {
        if (this.datastore.indexOf(element) < 0) {
            this.datastore.push(element);
            return true;
        }
        return false;
    }

    remove(element) {
        let index = this.datastore.indexOf(element);

        if (index > -1) {
            this.datastore.splice(index, 1);
            return true;
        }
        return false;
    }

    contains(element) {
        return this.datastore.includes(element);
    }

    union(set) {
        let temp = new Set();

        this.datastore.forEach(element => temp.add(element));
        set .datastore.forEach(element => temp.add(element));

        return temp;
    }

    intersect(set) {
        let temp = new Set();

        this.datastore.forEach(element => {
            if (set.contains(element)) {
                temp.add(element);
            }
        });
        return temp;
    }

    subset(set) {
        if (this.size > set.size) {
            return false;
        }

        for (let element of this.datastore) {
            if ( ! set.contains(element)) {
                return false;
            }
        }
        return true;
    }

    difference(set) {
        let temp = new Set();

        this.datastore.forEach(element => {
            if ( ! set.contains(element)) {
                temp.add(element);
            }
        });
        return temp;
    }

    show() {
        return this.datastore.join(' ');
    }
};