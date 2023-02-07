
// InsertionSort to be used within bucket sort
function insertionSort(array) {
    const length = array.length;

    for(let i = 1; i < length; i++) {
        let temp = array[i];
        let j;
        for( j = i - 1; j >= 0 && array[j] > temp; j--) {
            array[j+1] = array[j];
        }
        array[j+1] = temp;
    }

    return array;
}

module.exports = insertionSort;

const bucketSort = (arr, size = 2) => {
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
    return buckets.flat() //.reduce((acc, b) => [...acc, ...b.sort((a, b) => a - b)], []);
};

let result = bucketSort([2,4,5,1,3,9,8,7], 2)

console.log(result)