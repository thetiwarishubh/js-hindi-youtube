/* object
literal & Constructor(singlrton)*/
//Object.create(constructor typ)


//object literls

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

console.log(JsUser.Email);
console.log(JsUser["Email"]);
console.log(JsUser["full name"]);
console.log(typeof JsUser[mySym]);

JsUser.Email = "shubham@github.com"
JsUser.Location = "panipat"
JsUser.age = "19"
Object.freeze(JsUser)    
JsUser.Email = "shubham@facebook.com"

console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello SMT Shubham")
}
JsUser.greetingTwo = function(){
    console.log(`Hello SMT Tiwari, ${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

