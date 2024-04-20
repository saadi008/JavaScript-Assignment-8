// Q. Write a program that takes an array of numbers as input. Double each even number in the array
//  and remove all odd numbers. Return the modified array.

const inputString = prompt("Enter a Number:");
const inputArray = inputString.split(",").map(Number);
const modifiedArray = [];
for (let i = 0; i < inputArray.length; i++) {
    const num = inputArray[i];
    if (num % 2 === 0) {
        modifiedArray.push(num * 2);
    }
}
const outputString = "Modified array: " + modifiedArray.join(", ");
console.log(outputString);
alert(outputString);

// Q.Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0

let password = prompt("Enter your password:");
while (true) {
    if (
        password.length < 6 ||
        /^\d/.test(password) ||
        !/[a-zA-Z]/.test(password) ||
        !/\d/.test(password)
    ) {
        password = prompt(
            "Please enter a valid password (at least 6 characters, containing alphabets and numbers, and not starting with a number):"
        );
    } else {
        break;
    }
}
console.log("Valid password entered:", password);

// Q.Write a program that takes two arrays of numbers as input and returns a new array containing only the
//  elements that are present in both arrays. Use nested for loops to compare each element of the first array
//   with each element of the second array.

const array1String = prompt(
    "Enter numbers separated by commas for the first array:"
);
const array2String = prompt(
    "Enter numbers separated by commas for the second array:"
);
const array1 = array1String.split(",").map(Number);
const array2 = array2String.split(",").map(Number);
const commonElements = [];
for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
        if (array1[i] === array2[j]) {
            commonElements.push(array1[i]);
            break;
        }
    }
}
console.log("Common Elements:", commonElements);


// Q.Write a program that takes a number as input and checks whether it is a prime number or not.


const number = parseInt(prompt("Enter a number:"));
let isPrime = true;
if (number < 2) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}
if (isPrime) {
    console.log(number + " is a prime number.");
} else {
    console.log(number + " is not a prime number.");
}




// Q.Write a program that takes a nested array as input and flattens it into a single array. For example, 
// if the input is [[1, 2], [3, 4], [5, 6]], the output should be [1, 2, 3, 4, 5, 6].


const nestedArray = JSON.parse(prompt("Enter a nested array:"));
const flattenedArray = nestedArray.flat();
console.log("Flattened Array:", flattenedArray);

