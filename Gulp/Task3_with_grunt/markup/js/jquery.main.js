$('.header__burger, .header__item').on('click', function(){
	$('.header__menu, .header__burger').toggleClass('active');
	$('body').toggleClass('locked');
});

$('.carousel').slick({
dots: true,
infinite: true,
slidesToShow: 2,
slidesToScroll: 1,
arrows: false,
autoplay: true,
autoSpeed: 2000,
responsive: [
{
	breakpoint: 1024,
	settings: {
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false
	}
}
]
});