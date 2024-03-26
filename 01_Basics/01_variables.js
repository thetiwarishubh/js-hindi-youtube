const accountId = 258462
let accountEmail = "shubham@google.com"
var accountPassword = "784522shubh"
accountCity = "Delhi"
let accountState;
// accountId = 3526
accountEmail = "shubh@google.com"
accountPassword = "1234567890"
accountCity = "Berlin"

/* 
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);