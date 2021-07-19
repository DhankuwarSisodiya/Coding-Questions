/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    const original = [...heights];
     const expected = heights.sort((a,b) => a - b);
     let res = 0;
     for (let i = 0; i < original.length; i++) {
         if (expected[i] !== original[i]) res++;
     }
     return res;
 };