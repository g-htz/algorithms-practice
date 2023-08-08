/*
 * https://leetcode.com/problems/search-in-rotated-sorted-array/
 * @lc app=leetcode id=33 lang=javascript
 * 
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let possible = 0;

    for(i = 0; i < nums.length; i++) {
        if(nums[i] == target) return i;
    }

    return -1;
};
