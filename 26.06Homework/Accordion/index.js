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



/*
$('button').on('click', function(){
    $('nav').toggleClass('closed');
});
*/











/*Class
$('.ac_title').on('click', function(){
    /*$(this).parent().toggleClass('active')
    var parent = $(this).parent()
    var hasActiveClass = parent.hasClass('active')
    $('.ac_item').removeClass('active')
    if (hasActiveClass){
        parent.removeClass('active')
    }
    else{
        parent.addClass('active')
    }
});
*/



/*Class 2 
$('.tabs-nav-item').on('click', function(){
$('.tabs-nav-item', '.tabs-content-item').removeClass('active');
var order = $(this).attr('data-order');
$(this).addClass('active');
});


*/



/*===========================Аккордион, табы и карусель============================*/
//Аккордион - при открывании одного элемента другие должны закрываться
$('.accordion-title').on('click', function(){ //При клике по Title, открывается вложенный текст
    var parent = $(this).parent()
    var hasActiveClass = parent.hasClass('active') //переменной hasActiveClass присваиваем наличие класса .active
    $('.accordion-item').removeClass('active') //удаляем у всех элементов родителя .accordion-item класс active
    if(hasActiveClass){ //по умолчанию мы удалили класс active у всех элементов, значит будет выполняться условие else!
        parent.removeClass('active')
    }
    else{
        parent.addClass('active')
    }
})