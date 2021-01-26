function largestSubarraySum(array) {
    let max_so_far = 0;
    let max_ending_here = 0;
    for (let i = 0; i < array.length; i++) {
        max_ending_here += array[i]
        if (max_ending_here > max_so_far) {
            max_so_far = max_ending_here
        } else if (max_ending_here < 0) {
            max_ending_here = 0
        }
    }
    return max_so_far;
};