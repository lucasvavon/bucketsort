const bucketConcat = (arr, size = 10) => {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const buckets = Array.from(
        { length: Math.floor((max - min) / size) + 1 },
        () => []
    );
    arr.forEach(val => {
        buckets[Math.floor((val - min) / size)].push(val);
    });

    // concat bucket
    return buckets
};

const bucketsToFlat = (arr, size = 10) => {
    return bucketConcat(arr, size).flat()
}

const bucketConcatSort = (arr, size = 10) => {
    return bucketConcat(arr, size).reduce((acc, b) => [...acc, ...b.sort((a, b) => a - b)], []);
}

module.exports = bucketsToFlat;
module.exports = bucketConcatSort;