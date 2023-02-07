const insertionSort = require('../src/bucketsort.js');

let input = [];

test('return array sort', function () {
    expect(insertionSort(input)).toStrictEqual([]);
});

