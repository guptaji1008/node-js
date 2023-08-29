// How to create and export our own modules in node js :-

// const oper = require('./oper')
const { add, sub } = require('./oper')

// console.log(oper.add(45, 97))
// console.log(oper.sub(45, 23))
console.log(add(45, 97))
console.log(sub(45, 23))
// console.log(oper)

