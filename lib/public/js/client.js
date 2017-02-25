$(document).ready(function() {
    console.log('jQuery working');

    $('#clearButton').on('click', function() {
        console.log('clicked clear button');
        $('#inputOne').val('');
        $('#inputTwo').val('');
        $('#answer').empty();
    }); // end of click

    $('#firstNumberButtonsDiv').on('click', 'button', function() {
        var firstNumberClicked = $(this).data('amount');
        $('#inputOne').val(firstNumberClicked);
        console.log('firstNumberClicked', firstNumberClicked);
        return firstNumberClicked;
    }); // end of click

    $('#secondNumberButtonsDiv').on('click', 'button', function() {
        var secondNumberClicked = $(this).data('amount');
        $('#inputTwo').val(secondNumberClicked);
        console.log('secondNumberClicked', secondNumberClicked);
        return secondNumberClicked;
    }); // end of click

    $('#MathButtonsDiv').on('click', 'button', function() {
        var buttonKind = $(this).data('kind');
        var twoNumsAndKind = {};
        twoNumsAndKind.buttonKind = buttonKind;
        twoNumsAndKind.firstNumber = $('#inputOne').val();
        twoNumsAndKind.secondNumber = $('#inputTwo').val();
        console.log('twoNumsAndKind', twoNumsAndKind);
        $.ajax({
            type: 'POST',
            url: '/twoNumsAndKind',
            data: twoNumsAndKind,
            success: function(response) {
                $('#answer').html(response);
            } //  END OF SUCCESS
        }); //END OF AJAX
    }); // end of click
}); // end doc ready
