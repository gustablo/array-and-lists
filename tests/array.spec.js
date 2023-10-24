const CustomArray = require('../array')

describe('Main array tests', () => {

    it('should create an array', () => {
        const arr = new CustomArray();
        expect(arr).toBeTruthy();
        expect(arr.items.length).toEqual(0);
        expect(arr.count).toEqual(0);
    });

    it('should add two itens', () => {
        const arr = new CustomArray();
        arr.push(1);
        arr.push(2);

        expect(arr).toBeTruthy();
        expect(arr.count).toEqual(2);
        expect(arr.items).toEqual([1,2])
    });

    it('should add two itens, and then remove the last', () => {
        const arr = new CustomArray();
        arr.push(1);
        arr.push(2);

        expect(arr).toBeTruthy();
        expect(arr.count).toEqual(2);
        expect(arr.items).toEqual([1,2])

        arr.pop();

        expect(arr).toBeTruthy();
        expect(arr.count).toEqual(1);
        expect(arr.items).toEqual([1])
    })

    it('should add two itens, and then remove the fisrt', () => {
        const arr = new CustomArray();
        arr.push(1);
        arr.push(2);

        expect(arr).toBeTruthy();
        expect(arr.count).toEqual(2);
        expect(arr.items).toEqual([1,2])

        arr.unshift();

        expect(arr).toBeTruthy();
        expect(arr.count).toEqual(1);
        expect(arr.items).toEqual([2])
    })

    it('should add 1 and 2 and after add 0 on first', () => {
        const arr = new CustomArray();
        arr.push(1);
        arr.push(2);

        expect(arr).toBeTruthy();
        expect(arr.count).toEqual(2);
        expect(arr.items).toEqual([1,2])

        arr.shift(0);

        expect(arr).toBeTruthy();
        expect(arr.count).toEqual(3);
        expect(arr.items).toEqual([0,1,2])
    });

})