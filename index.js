function largestSubarraySum(arr) {
  let max = 0;
  for (let beginning = 0; beginning < arr.length; beginning++) {
    for (let end = beginning; end < arr.length; end++) {
      let subArray = arr.slice(beginning, end);
      let sum = subArray.reduce((m, i) => m + i, 0);
      max = Math.max(max, sum);
    }
  }
  return max;
}
