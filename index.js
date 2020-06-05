function largestSubarraySum(array){
    let max_so_far = 0
  let max_to_here = 0
  for (let element of array){
    max_to_here += element
    if (max_to_here < 0){
      max_to_here = 0
    }
    if (max_so_far < max_to_here){
      max_so_far = max_to_here
    }
  }
  return max_so_far
}
