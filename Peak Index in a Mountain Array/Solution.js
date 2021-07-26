/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let lo = 0, hi = arr.length-1
    while(lo < hi) {
        let mid = parseInt((hi + lo) /2)
        if(arr[mid] < arr[mid+1])
            lo = mid + 1
        else
            hi = mid
    }
    return lo
};