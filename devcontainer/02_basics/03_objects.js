// singleton

// object literals
//Object.create

const mySym = Symbol("key1")

const JSuser = {
    name : "shubham",
    "full name" : "tiwari",
    mysym: "mykey1",
    age : 18,
    location : "Delhi",
    email : "shubham@google.com",
    isLoggedIn :  false,
    LastLoginDay : ["Monday", "Tuesday"]
}

// console.log(JSuser.location);
console.log(JSuser["full name"]);
console.log(JSuser["mysym"])