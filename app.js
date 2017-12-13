var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs')

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'))

app.post('/contact', urlencodedParser, function(req, res){
  var file = JSON.stringify(req.body);
  var fileSplit = file.split(',');
  fs.writeFile('data.txt', fileSplit)
  res.render('contact-success')
});

app.get('/contact', function(req, res){
   res.render('contact')
})
app.get('/detail-page', function(req, res){
   res.render('detail-page')
})
app.listen(3000)
