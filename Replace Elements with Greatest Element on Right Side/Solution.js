/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let n = arr.length-1
        let max = Math.max(arr[n], arr[n-1]);
        arr[n-1] = arr[n]
        arr[n] = -1
        for(let i = arr.length-3; i >= 0; i--) {
            let save = arr[i]
            arr[i] = max
            max = Math.max(max, save)
        }
        return arr
};