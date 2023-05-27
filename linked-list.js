class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head;
        this.count = 0;
    }

    insert(el) {
        if (!this.head) {
            this.head = new Node(el, undefined);
        } else {
            let last = this.head;
            while (last.next) {
                last = last.next;
            }

            last.next = new Node(el, undefined);
        }

        this.count++;
    }

    removeAt(index) {
        if (index === 0) {
            this.head = this.head.next;
        } else {
            let last = this.head;
            let previous;
            for (let i = 0; i < index; i++) {
                previous = last;
                last = last.next;
            }

            previous.next = last.next;
        }

        this.count--;
    }

    size() {
        return this.count;
    }

    isEmpty() {
        return this.size() === 0;
    }
};

const linked = new LinkedList();
linked.insert(1);
linked.insert(2);
linked.insert(3);

linked.removeAt(1);

console.log(linked.head);
