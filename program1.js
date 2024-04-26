function smallestMissingPositiveInteger(nums) {
  let n = nums.length;

  for (let i = 0; i < n; i++) {
      if (nums[i] <= 0 || nums[i] > n) {
          nums[i] = 0;
      }
  }

  for (let i = 0; i < n; i++) {
      let num = Math.abs(nums[i]);
      if (num !== 0) {
          nums[num - 1] = -Math.abs(nums[num - 1]);
      }
  }

  for (let i = 0; i < n; i++) {
      if (nums[i] >= 0) {
          return i + 1;
      }
  }

  return n + 1;
}

console.log(smallestMissingPositiveInteger([3, 4, -1, 1]));
console.log(smallestMissingPositiveInteger([1, 2, 0])); 
console.log(smallestMissingPositiveInteger([-1, -3, 4, 2]));

module.exports = smallestMissingPositiveInteger;