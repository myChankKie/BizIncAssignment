//let a = [1, 2, 3, 4, 5]

//console.log(a)
//console.log(doubleEven(a))
function doubleEven(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            arr[i] *= 2
        }
    }
    return arr
}