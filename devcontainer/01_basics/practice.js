let myDate = new Date 
console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());

let myAnotherDate = Date("15-06-2023")
console.log(myAnotherDate.toString());

const abc = [56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66]

/*a.push(8)[The push() method of Array instances adds the specified elements to the end of an array and returns the new length of the array.]

a.pop()[The pop() method in JavaScript removes the last element from an array and returns that element. The pop() method changes the original array]

a.shift()[The shift() method removes the first element from an array and returns it. The shift() method changes the original array. The shift() method returns the shifted element.
The syntax for the shift() method is:]

a.unshift(1111)[The unshift() method adds new elements to the beginning of an array. The unshift() method overwrites the original array.]
console.log(a);*/



// //Practice

let score1 = 125
let score2 = 250
let score3 = 390
let score4 = 200
let score5 = 440
let score6 = [577, 768]
let score7 = [356, 869, 463, 976,234]
let score8 = 899
let score9 = 78
let score10 = 1000

console.log(Array.of(score1, score2, score3, score4, score5, ...score6, ...score7, score8, score9, score10));

const a1 = 77
const a2 = 78
const a3 = 79
const a4 = 80
const a5 = 81
const a6 = 82
const a7 = [83, 100, 101, 102, 103, 104, 105, 106]
const a8 = 84
const a9 = [85, 6500, 6600, 6700, 6800, 6900, 7000, 7100, 7200]
const a10 = 86

console.log(Array.of(a1, a2, a3, a4, a5, a6, ...a7, a8, ...a9, a10));


const a = "An array can hold many values under a single name, and you can access the values by referring to an index number"
console.log(a.length);

console.log(Array.from("In grammar, an article is a word that is used with a noun phrase to indicate the identifiability of the noun phrase's referents. For example,are articles in English"));



const s1 = 10
const s2 = 11
const s3 = 12
const s4 = 13
const s5 = 14
const s6 = 15
const s7 = 16
const s8 = 17
const s9 = 18
const s10 = [19, 199, 1999]
const s11 = 20
const s12 = 21
const s13 = [22, 45, 76, 56, 234, 456, 567990]
const s14 = 23
const s15 = 24
const s16 = 25
const s17 = 26
const s18 = 27
const s19 = 28
const s20 = 29

console.log(Array.of(s1, s2, s3, s4, s5, s6, s7, s8, s9, ...s10, s11, s12, ...s13, s14, s15, s16, s17, s18, s19, s20));

console.log(Array.from("shubhamtiwari"));

const practice = "Hello world"
console.log(practice);

const CarName = ["volvo", "audi", "BMW", "Ferrari", "Dodge", "Maruti Suzuki", "Tata", "Hyundai", "Honda Car", "Kia", "Ford", "Mercedes", "Lexus"]
console.log(CarName.toString());


console.log(Array.isArray(["s", "h", "u", "b", "h", "a", "m"]));

const mySym = Symbol("key1")

const JsUser = {
    name : "shubham",
    "full name" : "tiwari",
    [mySym] : "mykey1",
    age : 19,
    Location : "Delhi",
    Email : "shubham@google.com",
    isLoggedIn : false,
    LastLoginDay : ["Mondayg", "Tuesday"]
}

console.log(JsUser);

const Sam = Symbol("Tiwarijii")

const Shubham = {
    "full name" : "shubham tiwari",
    [Sam] : "s",
    Location : "Delhi",
    Email : "Sam@google.com",
}

Shubham.Location = "Panipat"
Object.freeze(Shubham)
Shubham.Email = "Sam@gmail.com"

console.log(Shubham);