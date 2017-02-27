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





/// self-aware MathButtonsDiv button is clicked assigns to var buttonKind
// then create twoNumsAndKind empty object
// then build properties firstNumber and secondNumber based on input fields
// POST this 3 property object to server for math which responds with answer which is posted to #answer
// new plan: break these out:
// self-aware Math buttons store their property but don't do math yet
// do this all in server side?
//twoNumsAndKind
app.post('/twoNumbersAndKind', function(req, res) {
    var answer;
    var answerToSendBack = [];
    console.log(req.body);
    var operator = (req.body.buttonKind);
    var first = parseFloat(req.body.firstNumberClicked);
    var second = parseFloat(req.body.secondNumberClicked);
    console.log(operator, first, second);
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
