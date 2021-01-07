// start at the first number
// add the subsequent one
// do that for each number
// check the maximum number 
// return the maximum 


function largestSubarraySum(array) {
    let max = 0;
    let maxEndingHere = 0;

    for (let i = 0; i < array.length; i++) {
        maxEndingHere = maxEndingHere + array[i];

        if (max < maxEndingHere) {
            max = maxEndingHere
        } 
        if (maxEndingHere < 0) {
            maxEndingHere = 0;
        }
    }

    return max;
}