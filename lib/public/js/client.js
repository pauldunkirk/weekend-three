$(document).ready(function(){
console.log('jQuery working');





$('#addButton').on('click', function(){
  var add = {};
  add.firstNumber = $('#inputOne').val();
  add.secondNumber = $('#inputTwo').val();
  console.log(add);
   $.ajax({
     type: 'POST',
     url: '/add',
     data: add,
     success: function(response){
       $('#answer').html(response);
     } //  END OF SUCCESS
}); //END OF AJAX
});  // end of click


$('#subtractButton').on('click', function(){
  var subtract = {};
  subtract.firstNumber = $('#inputOne').val();
  subtract.secondNumber = $('#inputTwo').val();
  console.log(subtract);
   $.ajax({
     type: 'POST',
     url: '/subtract',
     data: subtract,
     success: function(response){
       $('#answer').html(response);
     } //  END OF SUCCESS
}); //END OF AJAX
});  // end of click

$('#multiplyButton').on('click', function(){
  var multiply = {};
  multiply.firstNumber = $('#inputOne').val();
  multiply.secondNumber = $('#inputTwo').val();
  console.log(multiply);
   $.ajax({
     type: 'POST',
     url: '/multiply',
     data: multiply,
     success: function(response){
       $('#answer').html(response);
     } //  END OF SUCCESS
}); //END OF AJAX
});  // end of click

$('#divideButton').on('click', function(){
  var divide = {};
  divide.firstNumber = $('#inputOne').val();
  divide.secondNumber = $('#inputTwo').val();
  console.log(divide);
   $.ajax({
     type: 'POST',
     url: '/divide',
     data: divide,
     success: function(response){
       $('#answer').html(response);
     } //  END OF SUCCESS
}); //END OF AJAX
});  // end of click

$('#clearButton').on('click', function(){
  console.log('clicked clear button');
    $('#inputOne').val('');
    $('#inputTwo').val('');
    $('#answer').empty();
});  // end of click


}); // end doc ready
