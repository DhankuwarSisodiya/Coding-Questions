/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
    let even_cnt = 0;
        let odd_cnt = 0;
        for (let i of position) {
            if (i % 2 == 0) {
                even_cnt++;
            } else {
                odd_cnt++;
            }
        }
        return Math.min(odd_cnt, even_cnt);
};