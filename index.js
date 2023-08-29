// Node core modules :-

const fs = require("fs")

// fs.writeFileSync('read.txt', 'hello, my name is Aman')
// fs.writeFileSync('read.txt', 'hello, my name is Aman Kumar Gupta')
// fs.appendFileSync('read.txt', '. Aman is a hard working guy')
// const buf_data = fs.readFileSync("read.txt")
// const buf_data = fs.readFileSync("readWrite.txt", "utf-8")
// console.log(buf_data)
// Node js includes an additional datatype called buffer
// (Not available in browser javascript)
// buffer is only used to store binary data,
// from reading from a file or recieving packets from network.
{/* <Buffer 68 65 6c 6c 6f 2c 20 6d 79 20 6e 61 6d 65 20 69 73 20 41 6d 61 6e 20 4b 75 6d 61 72 20 47 75 70 74 61 2e 20 41 6d 61 6e 20 69 73 20 61 20 68 61 72 64 ... 12 more bytes> */}

// const org_data = buf_data.toString()
// console.log(org_data)

// fs.renameSync('read.txt', 'readWrite.txt')