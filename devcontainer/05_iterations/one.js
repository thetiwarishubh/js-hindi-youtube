// for 

for (let shubham = 0; shubham <= 10; shubham++) {
    const element = shubham;
    if (element == 5) {
        // console.log("5 is best number")
    }
    // console.log(element);
    
}

for (let shubham = 1; shubham <= 20; shubham++) {
    // console.log(`Outer loop value: ${shubham}`)
    for (let tiwari = 1; tiwari <= 20; tiwari++) {
    //    console.log(`Inner loop value: ${tiwari} and inner loop ${shubham}`)
    // console.log(shubham + '*' + tiwari + ' = ' + shubham*tiwari)
        
    }
}
let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);

for (let index = 0; index <= myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}


// break and continue 

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`value of index is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`value of index is ${index}`);
    
}