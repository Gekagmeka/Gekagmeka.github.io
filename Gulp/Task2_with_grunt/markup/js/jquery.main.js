$('.burger-button').on('click',function(){
	$('.menu__navigation').toggleClass('active');
	$('body').toggleClass('lock');
	$(this).toggleClass('active');
});