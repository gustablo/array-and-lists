class Queue {
    constructor() {
        this.items = {};
        this.count = 0;
        this.head = 0;
    }

    insert(el) {
        this.items[this.count] = el;
        this.count++;
    }

    remove() {
        const removed = this.items[this.head];
        delete this.items[this.head];
        this.head++;

        return removed;
    }

    size() {
        return this.count - this.head;
    }

    isEmpty() {
        return this.size() === 0;
    }
}

const queue = new Queue();
queue.insert(1);
queue.insert(2);
queue.insert(3);
queue.remove();
queue.insert(1);

console.log(queue.items, queue.size());