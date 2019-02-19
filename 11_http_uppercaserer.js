const http = require('http')
const map = require('through2-map')
const port = process.argv[2]

const uppercaser = map(data => data.toString().toUpperCase())

let server = http.createServer(function (request, response) {
  if (request.method === 'POST') {
    request.pipe(uppercaser).pipe(response)
  }
})
server.listen(port)
