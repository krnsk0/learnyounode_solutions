const net = require('net')
const strftime = require('strftime')
const port = process.argv[2]

let server = net.createServer(function (socket) {
  let time = strftime('%Y-%m-%d %H:%M')
  socket.write(time)
  socket.end('\n')
})
server.listen(port)
