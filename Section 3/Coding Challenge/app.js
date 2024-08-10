const express = require('express')
const app = express()
const port = 3000

app.get('/message', (req, res) => {
  res.json({
	  message: "Hello, World!"
	  
	  
  });
});

app.listen(3000, function(req, res){
	console.log("Server is running at port 3000");
});