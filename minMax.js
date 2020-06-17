//Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
function miniMaxSum(arr) {
    let min = arr[0]
    let max = 0
    let sum1 = 0
    let sum2 = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
        if (arr[i] > max) {
            max = arr[i]
        }

    }
    for (let j = 0; j < arr.length; j++) {
        if (max == min) {
            sum1 = arr[j] * 4
            sum2 = arr[j] * 4
            j = 5
        } else {

            if (arr[j] != max) {
                sum1 += arr[j]

            }
            if (arr[j] != min) {
                sum2 += arr[j]
            }
        }
    }
    console.log(sum1, sum2)
}