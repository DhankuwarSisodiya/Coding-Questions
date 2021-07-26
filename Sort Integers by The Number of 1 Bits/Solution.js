/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
	const getBits = (num) => {
		let counter = 0

		while (num) {
			counter += num & 1
			num >>= 1
		}
		return counter
	}

	return arr.sort((a, b) => getBits(a) - getBits(b) || a - b)
};