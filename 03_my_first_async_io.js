const fs = require('fs')
const filename = process.argv[2]

fs.readFile(filename, function (err, data) {
  if (err) {
    console.log(err)
  } else {
    let newLineCount = data.toString().split('\n').length - 1
    console.log(newLineCount)
  }
})
