// merge sort

// merge helper func
const merge = (left, right) => {
    let sorted = [];

    while(left.length && right.length) { // while both arrays still have values
        if(left[0] < right[0]) {
            sorted.push(left.shift()); // push first value of left arr into sorted arr
        }
        else {
            sorted.push(right.shift()); // push first value of right arr into sorted arr
        }
    }
    return [...sorted, ...left, ...right];
}

// merge sort func
const mergeSort = arr => {
    // base case
    if (arr.length <= 1) {
        return arr;
    }

    // round down to account for zero-based indexing
    let mid = Math.floor(arr.length / 2);

    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid, arr.length)); // same thing as omitting the **end** arg

    return merge(left, right);
}

let myArr = [6, 2, 65, 234, 67, 345, 4, 7, 4, 3, 3, 4, 6];
console.log(mergeSort(myArr));