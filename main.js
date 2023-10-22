/*
 * @param {number[]} nums //nums array
 * @param {number} target //target value
 * @return {number[]} //indices give sum of target value
 */
var twoSum = function(nums, target) {
    
    // this is a for loop -- counter(i) starts at 0; i loops as long as i is less than the length of nums array; increment of 1 after each loop 
    for (let i = 0; i < nums.length; i++) {
        //this is a for loop -- counter(j) is equal to counter i with increment of 1; j loops as along as j is less then the length of nums array; increment of 1 after each loop
        for (let j = i +1; j < nums.length; j++) {
            //if index of i and index of j equals sum of target value, then return the respective indices
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};
