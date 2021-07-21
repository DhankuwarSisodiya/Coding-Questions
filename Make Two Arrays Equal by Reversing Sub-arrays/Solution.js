/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    function makeMap(input) {
    let map = {};
    for (let i = 0; i < input.length; i += 1) {
            map[input[i]] = map[input[i]] ? map[input[i]] + 1 : 1;
        }
        return map;
    }
    let mapTarget = makeMap(target);
    let mapArr = makeMap(arr);
    if (Object.values(mapTarget).length !== Object.values(mapArr).length) return false;
    for (let key in mapArr) {
        if (mapArr[key] !== mapTarget[key]) {
            return false;
        }
    }
    return true;
};