var containsDuplicate = function(nums) {
    const i_set = new Set(nums);
    const i_bool = nums.length == i_set.size;
    
    return !i_bool;
};
