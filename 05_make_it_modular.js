const printFilteredFilenames = require('./05_make_it_modular_module')

const dir = process.argv[2]
const ext = process.argv[3]

printFilteredFilenames(dir, ext, function(err, list) {
  if (err) {
    console.log(err)
  } else {
    list.forEach(f => {
      console.log(f)
    })
  }
})
