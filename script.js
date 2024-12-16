let nums = [12, 3, 57, 34, 90, 1, 10, 9];
let odd = [];
let even = [];
nums.map((item) => {
    if (item % 2 === 0) {
        even.push(item);
    } else {
        odd.push(item);
    }
});
console.log(even);
console.log(odd);


let prices = [15000, 3200, 10200, 455000, 123000, 7000];
function maxNumber() {
    let result = prices[0];
    for (let item of prices) {
        if(result < item) {
            result = item;
        }
    }
    return result
}
console.log(maxNumber());

function minNumber() {
    let result = prices[0];
    for (let item of prices) {
        if(result > item) {
            result = item;
        }
    }
    return result
}
console.log(minNumber());


let arr = [
    [115, 50, 25],
    [75, 12, 99],
    [34, 36, 55],
];
