/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var anagramMappings = function(nums1, nums2) {
    let myMap = new Map()
    for(let i = 0; i< nums2.length; i++) {
        myMap.set(nums2[i],i);
    }
    for(let i = 0; i< nums1.length; i++) {
        let pos = myMap.get(nums1[i]);
        nums2[i] = pos;
    }
    return nums2;
};