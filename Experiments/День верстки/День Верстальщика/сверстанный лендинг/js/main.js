
/*По клику на кнопку переходим по href="#second" к встречающемся в коде этом id, то есть нас перекинет к разделу, где есть id = second */
//Перенаправление по клику на кнопку
$("a.scrollto").click(function () {
        var elementClick = '#'+$(this).attr("href").split("#")[1]
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });
