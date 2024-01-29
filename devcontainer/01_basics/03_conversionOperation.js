// // // let score = 324345
// // //     const condition = isNaN(score)
// // //     if(!condition) {
// // //         console.log('hello', condition)
// // //     }

// // //     const converted = ''+ score
// // // console.log(typeof(converted));

// // //immidiate invoke function expresion
// //     (function abc () {
// //         console.log('helo')
// //     }())

// //     function shubham () {
// //         console.log('shubham')
// //     }

// //     const arrayFunc = () => {
// //             return 2*10/5
// //     }

// //     console.log(arrayFunc())


// //     (function tiwarijii () {
// //         console.log('sam'); 
// //     }());


// //     (function tiwarijii() {
// //         console.log('sam');
// //     }());
    
// //     (function tiwarijii() {
// //         console.log('sam');
// //     }());

// //const numbers = [5, 10, 15, 20, 25];

// // Step 1: Double each number using map
// const doubledNumbers = numbers.map(num => num * 2);

// // Step 2: Filter out numbers less than 10 using filter
// const filteredNumbers = doubledNumbers.filter(num => num >= 10);

// // Step 3: Calculate the sum of the remaining numbers using reduce
// const sum = filteredNumbers.reduce((acc, num) => acc + num, 0);

// console.log("Original Numbers:", numbers);
// console.log("Doubled Numbers:", doubledNumbers);
// console.log("Filtered Numbers (>= 10):", filteredNumbers);
// console.log("Sum of Filtered Numbers:", sum);//



let score = 33

console.log(typeof score);


//chai aur code

//let score = "hitesh"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
