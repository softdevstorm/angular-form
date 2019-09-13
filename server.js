var express  = require('express');
var app      = express();
var bodyParser = require('body-parser');
var cors = require('cors');
const path = require('path');
var proxy = require('express-http-proxy');


app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(cors());


app.use(function(req, res, next) {

  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization');
  next();
});

app.use(express.static(__dirname + '/dist/login-test-app'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/login-test-app/index.html'));
});

app.use('/api', proxy('https://api.pwnedpasswords.com', {
  proxyReqPathResolver: function (req) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {   // simulate async
        console.log(req);
        var parts = req.url.split('?');
        var queryString = parts[1];
        var updatedPath = parts[0];
        var resolvedPathValue = updatedPath + (queryString ? '/' + queryString : '');
        resolve(resolvedPathValue);
      }, 200);
    });
  },
  userResHeaderDecorator(headers, userReq, userRes, proxyReq, proxyRes) {
    // recieves an Object of headers, returns an Object of headers.
    return headers;
  }
}));
app.set('port', process.env.PORT || 5000);
app.listen(3000);

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});

