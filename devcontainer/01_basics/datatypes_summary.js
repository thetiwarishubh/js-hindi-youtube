// // //primitive

// // // 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// // const score = 100
// // const scoreValue = 100.3

// // const isLoggedIn = false
// // const outsideTemp = null
// // let userEmail;

// // const id = Symbol("123")
// // const anotherId = Symbol("123")

// // console.log(id === anotherId);

// // // const bigNumber = 1234567890987654321n



// // // Refernece(not primitive)
// // // Array, Objects, Functions

// // const heros = ["hulk","thor","iron man"];
// // let myObj = {
// //     name : "shubham",
// //     age : 19,
// // }


// const myFunction = Function()
//     console.log("helo world");
    


// console.log(typeof myFunction);

//types of memory in js
//Stack(primitive), heap(non- primitive)

let myYoutubename = "smtgamerz";
let anotherName = myYoutubename
anotherName = "Shubham Tiwari";

console.log(anotherName);
console.log(myYoutubename);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "shubham@google.com"

console.log(userOne.email);
console.log(userTwo.email);