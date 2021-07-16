/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    return prices.map((price, index) => {
     const otherPrices = prices.slice(index + 1)
     const discount = otherPrices.find((otherPrice) => otherPrice <= price) ?? 0
     return price - discount
   })
 };