$('.burger-button, .menu__item').on('click',function(){
	$('.menu__navigation').toggleClass('active');
	$('.burger-button__first-serif, .burger-button__second-serif, .burger-button__third-serif').toggleClass('active');
	$('body').toggleClass('lock');
	$(this).toggleClass('active');
});

function appearing(){
	var x = $(window).scrollTop();
	console.log(x);
	if(x > 204){
		$('.column__info').addClass('appear');
	}
}
appearing();
$(window).on('scroll', appearing);

// $(window).on('scroll', function(){
// 	$('.column__info').addClass('appear');
// });

function UpArrow(){
	var scrollTop = $(window).scrollTop();
	console.log(scrollTop);
	if(scrollTop > 900){
		$('.up').addClass('visible');
	}
	else{
		$('.up').removeClass('visible');
	}
};
UpArrow();
$(window).on('scroll', UpArrow);

$('.up').on('click', function(){
	$('html').animate({
		scrollTop: 0
	});
});