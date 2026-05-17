// Dummy array
const dummyArray = [4, 8, 2, 11, 6, 7, 10];
console.log(`Dummy Array:- [${dummyArray.join(", ")}]`);

// 1. Arrow Function: Find the maximum number
const findMax = (arr) => {
    // Using the spread operator to pass array elements to Math.max
    return Math.max(...arr); 
};

// 2. Anonymous Function Expression: Calculate the sum
const calculateSum = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};

// 3. Standard Function Declaration: Count odd numbers
function countOdds(arr) {
    let oddCount = 0;
    arr.forEach(number => {
        if (number % 2 !== 0) {
            oddCount++;
        }
    });
    return oddCount;
}

console.log(`Maximum number: ${findMax(dummyArray)}`);
console.log(`Sum of all elements: ${calculateSum(dummyArray)}`);
console.log(`Count of odd numbers: ${countOdds(dummyArray)}`);