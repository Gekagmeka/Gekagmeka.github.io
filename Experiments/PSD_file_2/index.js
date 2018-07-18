$('.burger-button').on('click', function(){ //добавляем событие при клике по burger-button и тогда NAV добавляем класс active
$('.header-nav').toggleClass('active')
//также обычно добавляют класс active и самому нажатию (this)
$(this).toggleClass('active')
});


//РАскрывающийся вложенный список
$('.contain').on('click', function(){
  $('.header-nav-list-invest').toggleClass('active')
});


$('.contain').on('click', function(event){  /*остановили событие - а ниже записано, что при клике на любую область body у нас удаляется класс active (то есть display: block пропадает) */
  event.stopPropagation()
});

$('body').on('click', function(event){
  $('.header-nav-list-invest').removeClass('active') 
});




/*ДЛя карусели - подключаем 3 файла с библиотеки и пишем код */
// $('.second-carousel').on('afterChange', function(event, slick, currentSlide){
//   $('h3').text('Current slide is ' + currentSlide)
// })

//НАйстройки:
$('.carusel').slick({
  // autoplay: true, // автоматически через время меняются тексты Div ов
  // autoplaySpeed: 1000 //указывается в ms, как быстро переключается
  // centerMode: true,

  arrows: true,
  dots: true,  // отображение точек по слайдам
  prevArrow: '.prev-button',
  nextArrow: '.next-button',
  slidesToShow: 2,
  slidesToScroll: 1,

  responsive: [
    {
    breakpoint: 720,
    settings:{
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    }
  },
  {
    breakpoint: 475,
    settings:{
      slidesToShow:1,
      slidesToScroll:1,
      arrows: false
    }
  }
]
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