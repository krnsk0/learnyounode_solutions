const fs = require('fs')
const filename = process.argv[2]

let string = fs.readFileSync(filename).toString()
let newLineCount = string.split('\n').length - 1
console.log(newLineCount)
