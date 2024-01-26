// let marks_class_12 = [98,67, 87, 93, 45,"shubham"]
// console.log(marks_class_12[0]);
// console.log(marks_class_12[1]);
// console.log(marks_class_12[2]);
// console.log(marks_class_12[3]);
// console.log(marks_class_12[4]);
// console.log(marks_class_12[5]);


//Example of Array(number of items)

//*****************************************************************************************/

// const name = "shubham"
// const surName = "tiwari"
// //console.log(name + surName);

// console.log(`my name is ${name} and my surname is ${surName}`);


const a = "shubham"
const b = "tiwari"

console.log(`my name is ${a} and surname is ${b}`);

const gameName = new String('shubham-smt')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 5)
console.log(newString);

const anotherString = gameName.slice(-10, 5)
console.log(anotherString);

const newStringOne = "   shubham    "
console.log(newStringOne.trim());

const url = "https://shubham.com/shubham%20tiwari"

console.log(url.replace('%20', '-'));
console.log(url.includes('sam'));

console.log(gameName.split('-'));

