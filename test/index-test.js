describe('#largestSubarraySum', function() {
	it('largest subarray sum', function(){
		let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]
		expect(largestSubarraySum(array)).toEqual(16)
	})
});

describe('#largestSubarraySum test 3 ', function() {
	it('largest subarray sum', function(){
		let array = [1, 2, -3, 4, -5, 6, -7, 8, 9, 11, -12, 17, 20, 12]
		expect(largestSubarraySum(array)).toEqual(65)
	})
});

describe('#largestSubarraySum test 2 ', function() {
	it('largest subarray sum', function(){
		let array = [5, -9, -5, 37, -17, 4, 15, 16, -19, 22, 4, 2, -1, 1, 3, 4, 8, -20, 50]
		expect(largestSubarraySum(array)).toEqual(109)
	})
});

describe('#largestSubarraySum test negatives ', function() {
	it('largest subarray sum', function(){
		let array = [-1, -10, -5, -3, -15, -3, -2, -10, -5]
		expect(largestSubarraySum(array)).toEqual(-1)
	})
});

