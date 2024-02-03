// var c = 4500
let a = 5400

if(true){
    let a = 10
    const b = 20
    // console.log("INNER:", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "shubham"

    function Two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    Two()

}

// one()

if(true){
    const username = "shubham"
    if(username === "shubham"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

console.log(addone(5));
function addone(num){
    return num + 1

}


addTwo(5)
const addTwo = function(num){
    return num + 2
}

