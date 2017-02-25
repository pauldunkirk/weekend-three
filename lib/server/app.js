var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 5000;

console.log('app is here');

var add = {};

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// app.post('/add', //function to add - takes in two numbers in an object); return answer
//
app.post('/add', function(req, res){
  var add = [];
  console.log(req.body);
  var first = parseFloat(req.body.firstNumber);
  var second = parseFloat(req.body.secondNumber);
  var sum = first + second;
  console.log(sum + ' is the sum number'); //not sending this
  add.push(sum);
  console.log(add + ' is the add object sending back'); // sending this
  res.send(add);
  // res.sendStatus(200);
 });

// app.post('/subtract', //function to subtract takes in two numbers));return answer
app.post('/subtract', function(req, res){
  var subtract = [];
  console.log(req.body);
  var first = parseFloat(req.body.firstNumber);
  var second = parseFloat(req.body.secondNumber);
  var difference = first - second;
  console.log(difference + ' is the difference number');
  subtract.push(difference);
  console.log(subtract + ' is the subtract object sending back');
  res.send(subtract);
  // res.sendStatus(200);
 });


// app.post('/multiply', //function to muktiply takes in two numbers)); return answer
app.post('/multiply', function(req, res){
  var multiply = [];
  console.log(req.body);
  var first = parseFloat(req.body.firstNumber);
  var second = parseFloat(req.body.secondNumber);
  var product = first * second;
  console.log(product + ' is the product number');
  multiply.push(product);
  console.log(multiply + ' is the multiply object sending back');
  res.send(multiply);
  // res.sendStatus(200);
 });

// app.post('/divide', //function to divide) takes in two numbers); //return answer
app.post('/divide', function(req, res){
  var divide = [];
  console.log(req.body);
  var first = parseFloat(req.body.firstNumber);
  var second = parseFloat(req.body.secondNumber);
  var dividend = first / second;
  dividend = parseFloat(dividend).toFixed(2);
  console.log(dividend + ' is the dividend number');
  divide.push(dividend);
  console.log(divide + ' is the divide object sending back' );
  res.send(divide);
  // res.sendStatus(200);
 });



app.use(express.static('lib/public'));

app.listen(port);
console.log("Listening on port: ", port);
