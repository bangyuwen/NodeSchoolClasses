var bl = require('bl');
var http = require('http');

http.get(process.argv[2], function callback(response){
  response.setEncoding('utf8');
  response.on("data", console.log);
  response.on("error", console.error);
})
