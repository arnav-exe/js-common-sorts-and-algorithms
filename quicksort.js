// quicksort

const quickSort = arr => {
    // selecting first element as pivot
    let pivot = arr[0];

    // defining empty left and right arrays for divide and conquer
    let leftArr = []; // elements < pivot go here
    let rightArr = []; // elements > pivot go here

    // base case
    if(arr.length <= 1) {
        return arr;
    }

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < pivot) {
            leftArr.push(arr[i]);
        }
        else {
            rightArr.push(arr[i]);
        }
    }
    // recurse over partially sorted array until fully sorted
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}



let myArr = [6, 2, 65, 234, 67, 345, 4, 7, 4, 3, 3, 4, 6];
console.log(quickSort(myArr));
