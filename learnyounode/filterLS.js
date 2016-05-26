var fs = require('fs')
var path = require('path')
var data = process.argv[2];
var fileExtension = "." + process.argv[3];

fs.readdir(data, function (err, list) {
  list.forEach(function(file){
    if (path.extname(file) === fileExtension){
    console.log(file);
  };
  });
});
