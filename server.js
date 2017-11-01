var express = require('express');
var apiai = require('apiai');

var app = express();
var api_app = apiai("<Client Access Token>");
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static('public'));

const uuidv1 = require('uuid/v1');
var uniqueID = uuidv1();

app.post('/',function(req, res){
  var request = api_app.textRequest(req.body.anydata, {
    sessionId: 'uniqueID'
  });

  request.on('response', function(response) {
    console.log(response);
    res.send(response);
  });
 
  request.on('error', function(error) {
    console.log(error);
  });
 
request.end();

})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
