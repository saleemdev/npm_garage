const myObj = require("./app")

let name = myObj.full_name

let age =myObj.age

let dob = myObj.dob

today = `${myObj.day}, ${myObj.month} ${myObj.year}`

console.log(`Hello ${name}, your DOB is ${dob}  as at ${today} you are ${age} years old.`)