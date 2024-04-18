/*
Given an array of integers nums and an integer target, return indices of the two numbers 
such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example
--------
  Input: nums = [2,7,11,15], target = 9
  Output: [0,1]
  Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

// Should be using a test
const arr1 = [2,7,11,15]
let target = 9
console.log(twoSum(arr1, target))

const arr2 = [3,2,4]
target = 6
console.log(twoSum(arr2, target))

const arr3 = [3,3]
target = 6
console.log(twoSum(arr3, target))

const arr4 = [11,2,15,4,4,5,7]
target = 9
console.log(twoSum(arr4, target))


function twoSum(nums: number[], target: number): number[] {
  let indices: number[] = [];
  
  for(let i = 0; i < nums.length -1; i++) {
    let diff:number = target - nums[i];

    let b = nums.indexOf(diff, i+1);
    if( b > 0 ) {
      indices.push(i, b)
      break;
    }
  }

  return indices;
};