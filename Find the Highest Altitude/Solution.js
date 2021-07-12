/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let x1 = 0, max = 0;
    for(let i = 0; i < gain.length; i++) {
        let diff = x1 + gain[i];
        if(max < diff){
            max = diff;
        }
        x1 = diff;
    }
    return max;
};