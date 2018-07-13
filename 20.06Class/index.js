/*$('#toggler').on('click', function(){
/*$('#toggler').html('on')
});
//лучше по id писать для каждой */




//изменение фона при нажатии кнопки
/*
var currentText = $('#toggler').html();
if(currentText === 'off'){
    $('#toggler').html('on');
    $('#toggler').css('background-color', 'red')
} else{
    $('#toggler').html('off');
    $('#toggler').css('background-color', 'white')
}
});
*/


/*var navClass = $('nav').html();
if(navClass === 'closed'){
    $('nav').attr('class','opened');
} else{
    $('nav').attr('class','closed');

}
});*/

$('button').on('click', function(){
    $('nav').toggleClass('closed');
});
