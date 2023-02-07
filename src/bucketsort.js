
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

const bucketConcat = (arr, size = 2) => {
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

const bucketConcatSort = (arr) => {

}

//console.log('step 1 :', bucketConcat([], 2))
//console.log('step 2 :', bucketConcat([1.9], 2))


