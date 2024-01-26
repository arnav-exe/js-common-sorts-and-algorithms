// bogosort (the greatest sort to ever exist):

const isSorted = arr => {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            return false; // not sorted
        }
    }
    return true; // sorted
}

const shuffle = arr => {
    let j;
    for (let i = arr.length - 1; i > 0; i--) { // fisher yates randomizer alg
        j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}


const bogosort = arr => {
    iters = 0;

    while(!isSorted(arr)) {
        shuffle(arr);
        iters++;
    }
    return [arr, iters];
}

let myArr = [54, 34, 23, 5, 65, 23, 1, 3, 77];

let results = bogosort(myArr);

console.log(`Sorted array: ${results[0]}`);
console.log(`That took ${results[1]} iterations to sort`);
