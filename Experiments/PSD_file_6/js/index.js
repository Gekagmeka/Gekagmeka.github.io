$('.main__content__carousel').slick({
  arrows: true,
  dots: false,
  prevArrow: '.main__btns__prev',
  nextArrow: '.main__btns__next',
  slidesToShow: 4,
  slideToScroll: 1,
  responsive:[
    {
      breakpoint: 1024,
      settings:{
        slidesToShow: 2,
        slideToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings:{
        slidesToShow: 1,
        slideToScroll: 1,
      }
    },
    {
      breakpoint: 425,
      settings:{
        slidesToShow: 1,
        slideToScroll: 1,
      }
    }
  ]
});

$('.burger-button').on('click', function(){
$('.header__content__nav').toggleClass('active');
$(this).toggleClass('active');
});