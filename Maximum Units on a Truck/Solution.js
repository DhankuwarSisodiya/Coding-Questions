/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    let res = [];
    boxTypes.sort((x,y) => y[1] - x[1]);
    
    let numberOfBoxes = 0;
    let numberOfUnits = 0;
    for(let i = 0; i < boxTypes.length; i++){
        const [boxCount, unitsPerBox] = boxTypes[i];
        if (numberOfBoxes + boxCount > truckSize) {
            numberOfUnits += (truckSize - numberOfBoxes) * unitsPerBox;
            break;
        } else {
            numberOfUnits += boxCount * unitsPerBox;
            numberOfBoxes += boxCount;
        }
    }
    
    return numberOfUnits;
};