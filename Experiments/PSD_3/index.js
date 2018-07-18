
$('.header-carousel').slick({
  // autoplay: true, // автоматически через время меняются тексты Div ов
  // autoplaySpeed: 1000 //указывается в ms, как быстро переключается
  // centerMode: true,

  arrows: true,
  dots: false,  // отображение точек по слайдам
  prevArrow: '.prev-button',
  nextArrow: '.next-button',
  slidesToShow: 1,
  slidesToScroll: 1,
});


/*ДЛя second part */
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  prevArrow: '.second-prev-button',
  nextArrow: '.second-next-button',
});



/*ДЛя third part */
$('.third-carousel').slick({
  arrows: true,
  dots: true,  // отображение точек по слайдам
  slidesToShow: 2,
  slidesToScroll: 1,
  dotsClass: 'my-dots',
  prevArrow: '.third-prev-button',
  nextArrow: '.third-next-button',
});





/*Кнопка наверх */
//МОжно сделать через функцию
function setUpVisibility(){
  var scrollTop = $(window).scrollTop()   //console.log(scrollTop)   
  console.log(scrollTop) /*показать в консоле , на сколько сдвинут экран в px */
  if(scrollTop > 900){ // сдвигаем на 200px и появляется кнопка
    $('#up').addClass('visible')
  }
  else{
    $('#up').removeClass('visible')
  }
}
setUpVisibility();
$(window).on('scroll',setUpVisibility);

//Более оптимизированная кнопка
/*
// function setUpVisibility(){
//   var scrollTop = $(window).scrollTop()   //console.log(scrollTop)   
//   if(scrollTop > 600 && !$('#up').hasClass('visible')){ // сдвигаем на 200px и если id = 'up' не имеет класса visible   - появляется кнопка
//     $('#up').addClass('visible')
//   }
//   else if (scrollTop <= 600 && $('#up').hasClass('visible')){
//     $('#up').removeClass('visible')
//   }
// }
// setUpVisibility();
// $(window).on('scroll',setUpVisibility);
*/


/*Теперь скрол наверх */
$('#up').on('click', function(){ // на кнопку up вешаем слушатель событий анимацию вверх (0)
  $('html').stop().animate({
    scrollTop: 0
  })
});