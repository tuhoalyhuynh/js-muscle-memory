/*******************************************************************************
Write a function tripler(array) that takes in an array and returns a new array
containing 3 times every element of the original array.

Examples:

tripler([1,2,3]); // => [ 3, 6, 9 ]
tripler([4, 1, 7]); // => [ 12, 3, 21 ]
*******************************************************************************/

function tripler(array) {
    const result = [];
    // return new array
    // iterate through array passed in
    for (let i = 0; i < array.length; i++){
        let num = array[i];
        let multiple = num * 3;
        result.push(multiple);
    }
    // multiply each element by 3
    // push new element to resut
    // return result

    return result;
}