// $('.burger-button').on('click', function(){ //добавляем событие при клике по burger-button и тогда NAV добавляем класс active
// $('nav').toggleClass('active')
// //также обычно добавляют класс active и самому нажатию (this)
// $(this).toggleClass('active')
// });


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
  slidesToScroll: 1
});