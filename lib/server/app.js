var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 5000;
console.log('app is here');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('lib/public'));
app.listen(port);
console.log("Listening on port: ", port);
//twoNumsAndKind
app.post('/twoNumsAndKind', function(req, res) {
    var answer;
    var answerToSendBack = [];
    console.log(req.body);
    var operand = (req.body.buttonKind);
    var first = parseFloat(req.body.firstNumber);
    var second = parseFloat(req.body.secondNumber);
    console.log(operand, first, second);
    if (req.body.buttonKind == 'addButton') {
        answer = first + second;
    } else if (req.body.buttonKind == 'subtractButton') {
        answer = first - second;
    } else if (req.body.buttonKind == 'multiplyButton') {
        answer = first * second;
    } else if (req.body.buttonKind == 'divideButton') {
        answer = first / second;
        answer = parseFloat(answer).toFixed(2);
    }
    console.log(answer + ' is the answer number'); //not sending this
    answerToSendBack.push(answer);
    console.log(answerToSendBack + ' is the object sending back'); // sending this
    res.send(answerToSendBack);
}); //end post





/////////////  BELOW IS WORKING
// app.post('/add', function(req, res) {
//     var add = [];
//     console.log(req.body);
//     var first = parseFloat(req.body.firstNumber);
//     var second = parseFloat(req.body.secondNumber);
//     var sum = first + second;
//     console.log(sum + ' is the sum number'); //not sending this
//     add.push(sum);
//     console.log(add + ' is the add object sending back'); // sending this
//     res.send(add);
// }); //end post
//
// app.post('/subtract', function(req, res) {
//     var subtract = [];
//     console.log(req.body);
//     var first = parseFloat(req.body.firstNumber);
//     var second = parseFloat(req.body.secondNumber);
//     var difference = first - second;
//     console.log(difference + ' is the difference number');
//     subtract.push(difference);
//     console.log(subtract + ' is the subtract object sending back');
//     res.send(subtract);
// }); //end post
//
//
// app.post('/multiply', function(req, res) {
//     var multiply = [];
//     console.log(req.body);
//     var first = parseFloat(req.body.firstNumber);
//     var second = parseFloat(req.body.secondNumber);
//     var product = first * second;
//     console.log(product + ' is the product number');
//     multiply.push(product);
//     console.log(multiply + ' is the multiply object sending back');
//     res.send(multiply);
// }); //end post
//
// app.post('/divide', function(req, res) {
//     var divide = [];
//     console.log(req.body);
//     var first = parseFloat(req.body.firstNumber);
//     var second = parseFloat(req.body.secondNumber);
//     var dividend = first / second;
//     dividend = parseFloat(dividend).toFixed(2);
//     console.log(dividend + ' is the dividend number');
//     divide.push(dividend);
//     console.log(divide + ' is the divide object sending back');
//     res.send(divide);
// }); //end post
