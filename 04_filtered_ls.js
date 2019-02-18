const fs = require('fs')
const dir = process.argv[2]
const ext = process.argv[3]

fs.readdir(dir, function(err, list) {
  if (err) {
    console.log(err)
  } else {
    const filtered = list.filter(f => f.split('.')[1] === ext)
    filtered.forEach(f => {
      console.log(f)
    })
  }
})
