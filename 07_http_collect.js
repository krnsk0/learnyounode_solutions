const http = require('http')
const url = process.argv[2]



http.get(url, function(response) {
  let output = ''
  response.on('error', function(error) {
    console.log(error)
  })
  response.on('data', function(string) {
    output += string
  })
  response.on('end', function() {
    console.log(output.length)
    console.log(output)
  })
})
