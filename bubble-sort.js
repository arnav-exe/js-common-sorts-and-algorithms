// bubble sort:

let nums = [75, 354, 2, 54, 567, 76, 342, 31, 2, 43, 5, 7,];

const bubbleSort = nums => {
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length - i - 1; j++) {
            if(nums[j] > nums[j+1]) {
                [nums[j], nums[j+1]] = [nums[j+1], nums[j]]; //destructuring array to swap positions of 2 elements
            }
        }
    }
    return nums;
}


console.log(bubbleSort(nums));