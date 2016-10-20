var express = require('express');
var AV = require('leanengine');
var path = require('path');
var app = express();

var port = process.env.LEANCLOUD_APP_PORT || 3000;

AV.init({
  appId: process.env.LEANCLOUD_APP_ID,
  appKey: process.env.LEANCLOUD_APP_KEY,
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY
});

app.use(AV.express());
app.use('/', express.static(__dirname + '/vue'));
app.use('/', express.static(__dirname + '/webpack'));
app.get('/', function(req, res) {
  res.sendFile(path.resolve('./vue/index.html'))
});

app.get('/webpack', function(res, res) {
  res.sendFile(path.resolve('./webpack/index.html'))
});
app.listen(port);
