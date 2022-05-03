// EASY(1)
// Write a JavaScript function that takes in a random array and outputs two new arrays of odd numbers and even
// numbers.
// Example:
// Input: [2, 4, 7, 11, 15, 16]
// Output: Even numbers: [2, 4, 16]
// Odd Numbers: [7, 11, 15]
function oddEven(arr){
    let odd = [];
    let even = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0){
            even[i]= arr[i];
            console.log(even);
        }else{
            odd[i]= arr[i];
            console.log(odd);
        }
    }
}
oddEven([2, 4, 7, 11, 15, 16]);




// EASY(2)
// Create a function that checks an array for prime numbers then inserts any pimes into a new array.
// Example 1:
// Input: numArray = [1,2,3,4,5,6,7,8,9,10]
// Output: primeArray = [2,3,5,7]
// Example 2:
// Input: numArray = [10, 18, 19, 29, 33, 35, 47, 66, 83]
// Output: primeArray = [19 ,29 ,47 , 83]


// MEDIUM(1)
// Create a Function Called “vowelChecker” that takes in a single argument (x) and logs weather or not the input
// is a vowel
// Example 1:
// Input: vowelChecker(‘b’)
// Output: ‘This is not a vowel’
// Example 2:
// Input: vowelChecker(‘a’)
// Output: ‘This is a vowel’



// MEDIUM(2)
// Create a function that accepts two strings, then determines whether or not the first string is an anagram of the
// second string by returning a boolean.
// Example:
// Input: String 1: So dark the con of man
// String 2: Madonna of the Rocks
// Output: True
// Input: String 1: Things are good
// String 2: Dogs eat ants
// Output: False


// MEDIUM(3)
// Write a function that takes in two numbers and determines the largest positive integer that divides the two
// numbers without a remainder.
// Example 1:
// Input: gdc_two_numbers(336,360)
// Output: 24
// Example 2:
// Input: gdc_two_numbers(78,126)
// Output: 6


// Medium(4)
// Create a car object with the items: Make, Model, Year, Milage, and Color. Then create 3 methods in the object;
// A driveToWorkmethod, driveAroundTheWorldmethod, and runErrandsmethod. Each of these methods
// should affect the car’s mileage adding to it each time and console logging the old mileage and the new
// mileage.
// driveToWork = 33 miles
// driveAroundTheWorld = 24,000 miles
// runErrands = 30 miles
// Example 1:
// car.driveToWork();
// Output: old mileage: 2000 | new mileagea: 2033
// Explanation: 2000 + 33 = 2033
// Example 2:
// car.driveAroundTheWorld();
// Output: old mileage: 2033 | new mileagea: 26033
// Example 2:
// car.runErrands();
// Output: old mileage: 26033 | new mileagea: 26063

// Hard(1)
// Write a function that takes in a string and returns a boolean value whether or not the string contains a pair of
// matching brackets ({}, [], ()). These brackets must be nested appropriately in order to return a true value
// Example 1:
// Input: str = “{hello world}” brackets(srt)
// Output: True
// Example 2:
// Input: str = “{hello world]” brackets(srt)
// Output: False
