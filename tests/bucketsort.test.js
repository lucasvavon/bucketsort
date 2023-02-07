const bucketConcat = require('../src/bucketsort.js');
const bucketConcatSort = require('../src/bucketsort.js');

let input1 = [];
let input2 = [1.9];
let input3 = [18.12, 1.9];
let input4 = [1.7, 1.9]

test('return bucket concat without value', function () {
    expect(bucketConcat(input1)).toStrictEqual([]);
});

test('return bucket concat with one value', function () {
    expect(bucketConcat(input2)).toStrictEqual([1.9]);
});

test('return bucket concat with two value', function () {
    expect(bucketConcat(input3)).toStrictEqual([1.9, 18.12]);
});




