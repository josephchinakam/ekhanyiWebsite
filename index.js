const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");
const app = express();


const dir = path.join(__dirname, "/public");

app.use(express.static(dir));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))


const port = 3000;


app.get('/', function(req, res){

res.sendFile(dir + '/index.html');
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);  
});