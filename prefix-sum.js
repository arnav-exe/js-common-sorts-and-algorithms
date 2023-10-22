// prefix sum algorithm:
// for each element in array, sum all previous elements up until [i]

let arr = [10, 20, 10, 5, 15];

const prefixSum = arr => {
    let res = [];

    for(let i = 0; i < arr.length; i++) {
        res.push(arr.slice(0, i).reduce((a, c) => a + c, 0));
    }
    return res;
}

console.log(prefixSum(arr));