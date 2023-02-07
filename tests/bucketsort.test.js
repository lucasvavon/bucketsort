const bucketConcat = require('../src/bucketsort.js');
const bucketConcatSort = require('../src/bucketsort.js');

let input1 = [];
let input2 = [1.9];
let input3 = [18.12, 1.9];
let input4 = [1.7, 1.9]
let input5 = [1.9, 1.7, 4.3, 2.3, 2.2, 2.1, 8.1]

test('return bucket concat without value', function () {
    expect(bucketConcat(input1)).toStrictEqual([]);
});

test('return bucket concat with one value', function () {
    expect(bucketConcat(input2)).toStrictEqual([1.9]);
});

test('return bucket concat with two value', function () {
    expect(bucketConcat(input3)).toStrictEqual([1.9, 18.12]);
});

test('return bucket concat with two value already sorted', function () {
    expect(bucketConcat(input4)).toStrictEqual([1.7, 1.9]);
});

test('return bucket concat with two value already sorted', function () {
    expect(bucketConcat(input5)).toStrictEqual([1.7, 1.9, 2.1, 2.2, 2.3, 4.3, 8.1]);
});




