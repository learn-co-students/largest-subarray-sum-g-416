//let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]
//expect(largestSubarraySum(array)).toEqual(16)
 
function largestSubarraySum(array){

    // Step 1. Edge case - all negative numbers
    const sortedCopy = [...array]
    sortedCopy.sort((a,b) => a - b)
    const largestValue = sortedCopy.slice(-1)[0]    
   
    const largestIndex = array.indexOf(largestValue)

    if (largestValue <= 0) {
        return array[largestIndex]
    }

    //Step 2. Create sub arrays as you scan through the main array
    // if running total + current value <= 0 end this subarray and start with next element.

    let potentialSubArrays = []
    let total = 0

    for (let i = 0; i < array.length; i++) {         

        if (total + array[i] <= 0) {      
            potentialSubArrays.push(total)
            total = 0 
        } else {
            total += array[i]
            if (i + 1 === array.length) {
                potentialSubArrays.push(total)
            }
        }
    }

    return potentialSubArrays.sort((a,b) => a - b).slice(-1)[0]
}



