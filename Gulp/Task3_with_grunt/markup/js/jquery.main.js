// navigation
$('.header__burger, .header__item').on('click', function(){
	$('.header__menu, .header__burger').toggleClass('active');
	$('body').toggleClass('locked');
});

// arrow-up function
function Visibility(){
	var scrollTop = $(window).scrollTop()
	console.log(scrollTop)
	if(scrollTop > 900){
		$('.arrow-up').addClass('shifted')
	}
	else{
		$('.arrow-up').removeClass('shifted')
	}
}
Visibility();
$(window).on('scroll', Visibility);

//scroll to top
$('.arrow-up').on('click', function(){
	$('html').stop().animate({
		scrollTop:0
	});
});

$('.carousel').slick({
dots: true,
dotsClass: 'my-dots',
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