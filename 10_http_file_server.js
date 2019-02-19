const fs = require('fs')
const http = require('http')

const port = process.argv[2]
const filename = process.argv[3]

let server = http.createServer(function(request, response) {
  let fileStream = fs.createReadStream(filename)
  fileStream.pipe(response)
})
server.listen(port)
