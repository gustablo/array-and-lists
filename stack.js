class Stack {
    constructor() {
        this.items = {};
        this.count = 0;
    }

    insert(el) {
        this.items[this.count] = el;
        this.count++;
    }

    remove() {
        this.count--;

        const item = this.items[this.count];
        delete this.items[this.count];

        return item;
    }

    get(index) {
        return this.items[index];
    }

    isEmpty() {
        return this.count === 0;
    }

    for(cb) {
        for (let i = 0; i < this.count; i++) {
            cb(this.items[i], i);
        }
    }

    size() {
        console.log(this.count)
        return this.count;
    }

}

const stack = new Stack();
stack.insert(1);
stack.insert(2);
stack.insert(3);
stack.remove();
stack.insert(3);
console.log(stack.get(2));

console.log(stack.items);
stack.for((item, index) => console.log(item, index));