const http = require('http')
const urls = process.argv.slice(2)

let resultArray = Array(urls.length).fill(null)

function getResult(url, i) {
  http.get(url, function (response) {
    let output = ''
    response.setEncoding('utf8')
    response.on('error', console.error)
    response.on('data', function (string) {
      output += string
    })
    response.on('end', function () {
      resultArray[i] = output
      if (resultArray.filter(x => x === null).length === 0) {
        resultArray.forEach(x => console.log(x))
      }
    })
  })
}

urls.forEach(getResult)
