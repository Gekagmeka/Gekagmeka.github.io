$('.burger-button').on('click', function(){ //добавляем событие при клике по burger-button и тогда NAV добавляем класс active
$('nav').toggleClass('active')
//также обычно добавляют класс active и самому нажатию (this)
$(this).toggleClass('active')
});