// $('.carousel').slick();  - это по умолчанию - обычная карусель

//Некоторые методы(события):
$('.carousel').on('afterChange', function(event, slick, currentSlide){
  $('h3').text('Current slide is ' + currentSlide)
})

//НАйстройки:
$('.carousel').slick({
  // autoplay: true, // автоматически через время меняются тексты Div ов
  // autoplaySpeed: 1000 //указывается в ms, как быстро переключается
  arrows: true,
  dots: true,  // отображение точек по слайдам
  prevArrow: '.prev-button',
  nextArrow: '.next-button',
  slidesToShow: 3,
  slidesToScroll: 2,

  //теперь для адаптивности 
  responsive: [{
    breakpoint: 600, //здесь это max-width, но px не указываются!, т.е. при уменьшении ширины до 600px, происходят следующие настройки
      settings:{
        slidesToShow: 1,
        slidesToScroll: 1
    }
  }
  ]
});