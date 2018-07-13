/*ДЛя internationalization
$('select').select2();*/


/*ДЛя подключения scroll */
$('scroll-container').on("load",function(){
    $(".content").mCustomScrollbar();
    scrollInertia: 0;
});