const user = {
    username : "shubham",
    price : 999,

    WelcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.WelcomeMessage()
// user.username = "sam"
// user.WelcomeMessage()

// console.log(this);

// function chai(){
//     let username = "sam"
//     console.log(this.username);
// }

// chai()

// const chai = function(){
//     let username = "sam"
//      console.log(this.username);
// }

// const chai = () => {
//     let username = "sam"
//      console.log(this);
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => ( num1 + num2)

const addTwo = (num1, num2) => ({username : "shubham"})
    
console.log(addTwo(3, 4));

const myArray = [2, 5 , 3, 7, 8]

myArray.forEach()