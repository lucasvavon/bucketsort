const bucketConcat = require('../src/bucketsort.js');
const bucketConcatSort = require('../src/bucketsort.js');

let input1 = [];
let input2 = [1.9];

test('return bucket concat without value', function () {
    expect(bucketConcat(input1)).toStrictEqual([]);
});

test('return bucket concat with one value', function () {
    expect(bucketConcat(input2)).toStrictEqual([1.9]);
});

/*
test('return bucket concat with one value', function () {
    expect(bucketConcat(input2)).toStrictEqual([1.9]);
});
*/



