function largestSubarraySum(array) {
    let max = 0;
    let end = 0;
    for (let i = 0; i<array.length; i++) {
        end += array[i]
        if (max < end) {
            max = end
        }
        if (end < 0) {
            end = 0
        }
    }
    return max
}