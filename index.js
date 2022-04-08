const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// reducer
// batteries
//   1) should have a `totalBatteries` variable
//   2) should have a number as a result
//   3) should have made the sum of all the assembled batteries

// Callback.
function sumBatteries(total, element) {
    console.log("total: "+ total)
    console.log("num: "+element)
    return total + element
}
const init = 0
// Reduce method.
const totalBatteries = batteryBatches.reduce(sumBatteries, init)
console.log(totalBatteries)
