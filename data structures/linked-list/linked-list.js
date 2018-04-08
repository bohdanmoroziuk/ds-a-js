
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
};

class LinkedList {
    constructor() {
        this.head = new Node('head');
    }

    find(item) {
        let current = this.head;

        while (current.element != item) {
            current = current.next;
        }
        return current;
    }

    findPrevious(item) {
        let current = this.head;

        while (current.next !== null && current.next.element !== item) {
            current = current.next;
        }
        return current;
    }

    insert(element, item) {
        let node = new Node(element);
        let current = this.find(item);

        node.next = current.next;
        current.next = node;
    }

    remove(item) {
        let previous = this.findPrevious(item);

        if (previous.next !== null) {
            previous.next = previous.next.next;
        }
    }

    display() {
        let current = this.head;

        while (current.next !== null) {
            console.log(current.next.element);
            current = current.next;
        }
    }
};

let cities = new LinkedList();

cities.insert('Conway', 'head');
cities.insert('Russel', 'Conway');
cities.insert('Carlisle', 'Conway');
cities.insert('Alma', 'Russel');

cities.display();
cities.remove('Carlisle');
cities.display();