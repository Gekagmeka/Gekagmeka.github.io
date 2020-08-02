$('.burger-button').on('click', function(){ //добавляем событие при клике по burger-button и тогда NAV добавляем класс active
$('nav').toggleClass('active')
//также обычно добавляют класс active и самому нажатию (this) - если вдруг , ессть еще бургер баттон - то только по нажатию на этот бургер
$(this).toggleClass('active')
});