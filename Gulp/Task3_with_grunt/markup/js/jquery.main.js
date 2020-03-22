$('.header__burger, .header__item').on('click', function(){
	$('.header__menu, .header__burger').toggleClass('active');
	$('body').toggleClass('locked');
});