constructor
singleton

// const tinderUser = new Object(){singleton object}
const tinderUser1 = {}

tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser = {
    email : "sam@gmail",
    fullname : {
        userfullname : {
            firstname : "miju",
            lastname : "pandey"
        }
    }
}
console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const onj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const users = [
    {
        id : 1, 
        email : "s@gmail.com",
    },
    {
        id : 1, 
        email : "s@gmail.com",
    },
    {
        id : 1, 
        email : "s@gmail.com",
    }
]

users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));