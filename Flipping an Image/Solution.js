/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    let n = image.length
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n/2 ; j++){
            let temp = image[i][j];
            image[i][j] = !image[i][n-1-j];
            image[i][n-1-j] = !temp;
        }
    }
    return image;
};

//Solution 2
var flipAndInvertImage = function(image) {
    for(let i = 0; i < image.length; i++) {
        const m = image[i].length
        for(let j = 0; j < m / 2; j++) {
            [image[i][j], image[i][m - j - 1]] = [image[i][m - j - 1] ^ 1, image[i][j] ^ 1]
        }
    }
    return image
};