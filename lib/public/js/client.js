$(document).ready(function() {
    console.log('jQuery working');
    var firstNumberClicked;
    var secondNumberClicked;
    var buttonKind;
    var twoNumbersAndKind = {};
    var firstNumberArray = [];
    var secondNumberArray = [];


    $('#clearButton').on('click', function() {
        console.log('clicked clear button');
        $('#inputOne').val('');
        $('#inputTwo').val('');
        $('#answer').empty();
    }); // end of click

    $('#firstNumberButtonsDiv').on('click', 'button', function() {
        firstNumberClicked = $(this).data('amount');
        $('#inputOne').html(firstNumberClicked);
        twoNumbersAndKind.firstNumber =firstNumberClicked;
        console.log('firstNumberClicked', firstNumberClicked);
        return firstNumberClicked;
    }); // end of click

    $('#secondNumberButtonsDiv').on('click', 'button', function() {
        secondNumberClicked = $(this).data('amount');
        $('#inputTwo').html(secondNumberClicked);
        twoNumbersAndKind.secondNumber = secondNumberClicked;
        console.log('secondNumberClicked', secondNumberClicked);
        return secondNumberClicked;
    }); // end of click

    $('#MathButtonsDiv').on('click', 'button', function() {
        buttonKind = $(this).data('kind');
        twoNumbersAndKind.buttonKind = buttonKind;
                if (buttonKind == 'addButton') {
                    $('#inputOperand').text('+');
                } else if (buttonKind == 'subtractButton') {
                    $('#inputOperand').text('-');
                } else if (buttonKind == 'multiplyButton') {
                    $('#inputOperand').text('X');
                } else if (buttonKind == 'divideButton') {
                    $('#inputOperand').text('/');
                }
        // twoNumbersAndKind.firstNumber = $('#inputOne').val();
        // twoNumbersAndKind.secondNumber = $('#inputTwo').val();
        console.log('twoNumbersAndKind', twoNumbersAndKind);
        // return buttonkind;
          }); // end of click

      $('#submit').on('click', function() {
        console.log(twoNumbersAndKind);
        $.ajax({
            type: 'POST',
            url: '/twoNumbersAndKind',
            data: twoNumbersAndKind,
            success: function(response) {
                $('#answer').html(response);
            } //  END OF SUCCESS
        }); //END OF AJAX
    }); // end of click

}); // end doc ready



    //
    // $('#clearButton').on('click', function() {
    //     console.log('clicked clear button');
    //     $('#inputOne').empty();
    //     $('#inputTwo').empty();
    //     $('#answer').empty();
    //     $('#inputOperand').empty();
    // }); // end of clearButton


    //     ///////// BELOW WORKS
    //     /// self-aware MathButtonsDiv button is clicked assigns to var buttonKind
    //     // then create twoNumsAndKind empty object
    //     // then build properties firstNumber and secondNumber based on input fields
    //     // POST this 3 property object to server for math which responds with answer which is posted to #answer
    //     // new plan: break these out:
    //     // self-aware Math buttons store their property but don't do math yet
    //     // do this all in server side?
    //
    // //make 'calculate' button to post object
    //     $('#MathButtonsDiv').on('click', 'button', function() {
    //         buttonKind = $(this).data('kind');
    //         twoNumbersAndKind = {};
    //         twoNumbersAndKind.buttonKind = buttonKind;
    //         twoNumbersAndKind.firstNumber = $('#inputOne').val();
    //         twoNumbersAndKind.secondNumber = $('#inputTwo').val();
    //         console.log('twoNumbersAndKind', twoNumbersAndKind);
    //         $.ajax({
    //             type: 'POST',
    //             url: '/twoNumbersAndKind',
    //             data: twoNumbersAndKind,
    //             success: function(response) {
    //                 $('#answer').html(response);
    //             } //  END OF SUCCESS
    //         }); //END OF AJAX
    //     }); // end of click

    //



    // //////NOT WORKING
    // //
    //     /// click from firstNumberButtonsDiv to display as input
    //     $('#firstNumberButtonsDiv').on('click', 'button', function() {
    //       for (var i = 0; i < firstNumberArray.length; i++) {
    //         firstNumberArray[i] = $(this).data('amount');
    //       }
    //       firstNumberClicked = $(this).data('amount');
    //       firstNumberArray.firstNumberClicked
    //       var xAsString = x.join(''); // Results in a string
    //       var xAsNumber = Number(x.join(''));
    //         firstNumberArray = $(this).data('amount');
    //         twoNumbersAndKind.firstNumberClicked = firstNumberClicked;
    //         $('#inputOne').html(firstNumberClicked);
    //         console.log('firstNumberClicked', firstNumberClicked);
    //         console.log('twoNumbersAndKind',twoNumbersAndKind);
    //         return firstNumberClicked;
    //     }); // end of click
    // //
    // //     // click from secondNumberButtonsDiv to display as input
    //     $('#secondNumberButtonsDiv').on('click', 'button', function() {
    //         $('#inputTwo').html($(this).data('amount'));
    //         secondNumberClicked = $('#inputTwo').val();
    //         twoNumbersAndKind.secondNumberClicked = secondNumberClicked;
    //         console.log('secondNumberClicked', secondNumberClicked);
    //         console.log('twoNumbersAndKind',twoNumbersAndKind);
    //         return secondNumberClicked;
    //     }); // end of click
    // //
    //     /// click  operand to display as input
    //     $('#MathButtonsDiv').on('click', 'button', function() {
    //         buttonKind = $(this).data('kind');
    //         twoNumbersAndKind.buttonKind = buttonKind;
    //         if (buttonKind == 'addButton') {
    //             $('#inputOperand').text('+');
    //         } else if (buttonKind == 'subtractButton') {
    //             $('#inputOperand').text('-');
    //         } else if (buttonKind == 'multiplyButton') {
    //             $('#inputOperand').text('X');
    //         } else if (buttonKind == 'divideButton') {
    //             $('#inputOperand').text('/');
    //         }
    //         return buttonKind;
    //     }); // end of click
    // //
    //make 'calculate' button to post object
    // $('#MathButtonsDiv').on('click', 'button', function() {
    //     buttonKind = $(this).data('kind');
    //     twoNumbersAndKind = {};
    //     twoNumbersAndKind.buttonKind = buttonKind;
    //     twoNumbersAndKind.firstNumber = $('#inputOne').val();
    //     twoNumbersAndKind.secondNumber = $('#inputTwo').val();
    //     console.log('twoNumbersAndKind', twoNumbersAndKind);
    //     $.ajax({
    //         type: 'POST',
    //         url: '/twoNumbersAndKind',
    //         data: twoNumbersAndKind,
    //         success: function(response) {
    //             $('#answer').html(response);
    //         } //  END OF SUCCESS
    //     }); //END OF AJAX
    // }); // end of click


    //
    //     /// click from firstNumberButtonsDiv to display as input - above
    //     /// click  operand to display as input
    //     // click from secondNumberButtonsDiv to display as input
    //     // click to post all
    //
    //
    //
    //     //// NOT USING THIS RIGHT NOW
    //     // // click MathButtonsDiv which populates inputOperand input
    //     //     $('#MathButtonsDiv').on('click', 'button', function() {
    //     //         var buttonKbind = $(this).data('kind');
    //     //         var twoNumbersAndKind = {};
    //     //         twoNumersAndKind.buttonKind = buttonKind;
    //     //         twoNumbersAndKind.firstNumber = $('#inputOne').val();
    //     //         twoNumbersAndKind.secondNumber = $('#inputTwo').val();
    //     //         console.log('twoNumbersAndKind', twoNumbersAndKind);
    //     //         $.ajax({
    //     //             type: 'POST',
    //     //             url: '/buttonKind',
    //     //             data: buttonKind,
    //     //             success: function(response) {
    //     //                 $('#inputOperand').html(response);
    //     //             } //  END OF SUCCESS
    //     //         }); //END OF AJAX
    //     //     }); // end of click
    //
