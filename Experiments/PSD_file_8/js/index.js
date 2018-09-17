$('.header__content__carousel').slick({
  arrows: true,
  dots: true,
  prevArrow: '.prev-button',
  nextArrow: '.next-button',
  slidesToShow: 1,
  slideToScroll: 1,
  dotsClass: 'my-dots',
});

$('.burger-button').on('click', function(){
$('.header__content__nav').toggleClass('active');
$(this).toggleClass('active');
});