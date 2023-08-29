// NPM (node package manager) :-


import chalk from 'chalk'
import validator from 'validator'

// console.log(chalk.red("Aman Kumar Gupta"))
// console.log(chalk.green.underline.inverse("Aman Kumar Gupta"))
// console.log(chalk.green.underline("Aman Kumar Gupta"))


const res = validator.isEmail('cric.amankumar@gmail.com')

res===true?console.log(chalk.green.underline.inverse(res)):console.log(chalk.red.underline.inverse(res))

