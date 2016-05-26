var fs = require('fs')
var path = require('path')

module.exports = function (data, fileExtension, callback) {
  var buf = [];
  fs.readdir(data, function (err, list) {
    if(err) {
      return callback(err, null)
    }
    else {
      list.forEach(function(file) {
        if (path.extname(file) === "." + fileExtension){
          buf.push(file)
        };
      });
    }
    return callback(null, buf);
  });
}
