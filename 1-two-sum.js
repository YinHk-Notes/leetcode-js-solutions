/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const myObject = {};             //create an object to store the complement value and its index 
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (myObject.hasOwnProperty(complement)) {
      return [myObject[complement], i];
    }
    myObject[nums[i]] = i;         //return the object with one of the value and index pair
  }
};
