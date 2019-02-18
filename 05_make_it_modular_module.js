const fs = require('fs')

module.exports = function (dir, ext, callback) {
  fs.readdir(dir, function (err, list) {
    if (err) {
      callback(err, null);
    } else {
      const filtered = list.filter(f => f.split('.')[1] === ext)
      callback(null, filtered)
    }
  })
}
