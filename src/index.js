// You should implement your task here.

module.exports = function towelSort(matrix) {
    let resArr = [];
    if (matrix == undefined) {
        return [];
    } else {
        for (let i = 0; i < matrix.length; i++) {
            let arr = matrix[i];
            if (i % 2 !== 0) {
                let sortArr = (a, b) => {
                    return b - a;
                };
                resArr.push(arr.sort(sortArr));
            } else {
                resArr.push(arr);
            }
        }
        return resArr.flat();
    }
};
