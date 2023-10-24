class CustomArray {
    constructor(items = []) {
        this.items = items;
        this.count = 0;
    }

    push(el) {
        this.items[this.count] = el;
        this.count++;
    }

    pop() {
        this.count--;
        delete this.items[this.count];
    }

    shift(el) {
        for(let i = this.count; i > 0; i--) {
            this.items[i] = this.items[i - 1];
        }

        this.items[0] = el;
        this.count++;
    }

    unshift() {
        for (let i = 0; i < this.count - 1; i++) {
            this.items[i] = this.items[i+1];
        }

        delete this.items[this.count -1];
        this.count--;
    }
}

const arr = new CustomArray();
arr.push(1);
arr.push(2);
arr.push(3);
arr.pop();
arr.push(3);
arr.shift(0);
arr.unshift();

// console.log(arr.items);

module.exports = CustomArray;