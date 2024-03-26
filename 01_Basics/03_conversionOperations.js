let score = "shubham"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
//Nan typeof number
//true => 1; false => 0

let isLoggedIn = "shubham"
let valueInBoolean = Boolean(isLoggedIn)
console.log(isLoggedIn);
console.log(typeof isLoggedIn);
console.log(typeof valueInBoolean);
console.log(valueInBoolean);

// 1 => true; 0 => false
//""(empty string) => false
//""(some value in empty string) => true

let someNumber = 456
let stNumber = String(someNumber)
console.log(stNumber);
console.log(typeof stNumber);