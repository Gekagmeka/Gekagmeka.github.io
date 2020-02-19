$('.burger-button, .menu__item').on('click',function(){
	$('.menu__navigation').toggleClass('active');
	$('.burger-button__first-serif, .burger-button__second-serif, .burger-button__third-serif').toggleClass('active');
	$('body').toggleClass('lock');
	$(this).toggleClass('active');
});