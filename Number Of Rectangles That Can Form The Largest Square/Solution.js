/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
    let count  = 0;
    let maxLength = 0;
    for(let i = 0; i < rectangles.length; i++) {
        let largestSide = Math.min(rectangles[i][0], rectangles[i][1]);
        if(largestSide === maxLength)
            count++;
        if(largestSide > maxLength){
            maxLength = largestSide;
            count = 1;
        }
    }
    return count;
};