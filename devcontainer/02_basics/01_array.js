// Array

const myArray = [0, 1, 2, 3, 4, 5]
const myHeros =  ["hulk", "superman", "vision", "antman", "thor", "iron man"]

const myArray2 = new Array(1, 2, 3, 4)

// console.log(myHeros[0]);
// console.log(myHeros[1]);
// console.log(myHeros[2]);
// console.log(myHeros[3]);
// console.log(myHeros[4]);
// console.log(myHeros[5]);
// console.log(myHeros.length);

// Array methods

// myArray.push(6)
// myArray.push(7)
// myArray.pop()

//  myArray.unshift(4, 8)
// myArray.shift()

// console.log(myArray.includes(4));
// console.log(myArray.indexOf(4));

// const newArray = myArray.join()

// console.log(myArray);
// console.log(typeof newArray);

// Slice, Splice

console.log("A ", myArray);

const myn1 = myArray.slice(1, 3)

console.log(myn1);
console.log("B ", myArray);

const myn2 = myArray.splice(1, 3)
console.log("C ", myArray);
console.log(myn2);


