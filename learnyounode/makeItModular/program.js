var mymodule = require('./mymodule.js');

mymodule(process.argv[2], process.argv[3], function(err, buf){
  if(err) {
    console.log("Error");
  }
  else{
    buf.forEach(function(data){
      console.log(data);
    }
    )
  };
});
