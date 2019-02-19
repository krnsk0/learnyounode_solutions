let http = require('http')
let url = require('url')
const port = process.argv[2]

let server = http.createServer(function(request, response) {
  let data = url.parse(request.url, true)
  let json

  if (data.pathname === '/api/parsetime') {
    let date = new Date(data.query.iso)
    json = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
    }
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(json))

  } else if (data.pathname === '/api/unixtime') {
    json = {
      unixtime: (new Date(data.query.iso)).getTime()
    }
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(json))
  } else {
    response.writeHead(404)
    response.end()
  }

})
server.listen(port)
