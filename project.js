var express = require('express'); // runs express
var app = express();
var path = require('path');
var bodyParser = require("body-parser");

// Define the port to run on
app.set('port', 8081);

// links to the folder project
app.use(express.static(path.join(__dirname, 'project')));


// this gets the matches html file once the button is clicked on the webpage
app.get('/matches', function (req, res) {
	console.log('button has been pressed');
 res.sendFile(path.join(__dirname + '/matches.html'));
})

app.get('/lfc', function (req, res) {
	console.log('lfc');
 res.sendFile(path.join(__dirname + '/lfc.html'));
 })

app.get('/chelsea', function (req, res) {
	console.log('cfc');
 res.sendFile(path.join(__dirname + '/cfc.html'));
 }) 
 
 app.get('/arsenal', function (req, res) {
	console.log('ac');
 res.sendFile(path.join(__dirname + '/ac.html'));
 }) 
 
 app.get('/hotspur', function (req, res) {
	console.log('thc');
 res.sendFile(path.join(__dirname + '/thc.html'));
 }) 
 
 app.get('/news', function (req, res) {
	 console.log("Working");
 res.sendFile(path.join(__dirname + '/news.html'));
 })
 
 app.get('/jm', function (req, res) {
	 console.log("jm");
 res.sendFile(path.join(__dirname + '/jm.html'));
 })

 
 app.get('/standings', function (req, res) {
	 console.log("Standings showing");
 res.sendFile(path.join(__dirname + '/standings.html'));
 });
 

 
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/welcome', function (req, res) {
	console.log("post method");
	console.log(req.body.firstname);
   res.send('Hello ' + req.body.firstname + " " + req.body.lastname);
})



var server = app.listen(app.get('port'), function () {
 var port = server.address().port;
 console.log("Example app listening at hhttp://127.0.0.1:8081" );
});
