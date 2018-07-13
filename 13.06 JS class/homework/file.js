/*var isSoccerFan = true;

if (isSoccerFan === true){
  console.log('Goal!');
}else{
  console.log('No goal!');
}*/



/*Задание 2
var number = 10;
var number2;
if(number >= 20){
  number2 = number + 100;
  console.log(number2);
}else{
  number2 = number - 100;
  console.log(number2);
}
*/



/*Задание 3 
var number_1 = 10;
if(number_1 < 10){
  console.log('too young');
}
else if(number_1 > 30){
  console.log('too old');
}
else{
  console.log('it is right age');
}
*/


/*Задание 4 
var number = 10;
var number_2 = 20;
if(number >= 1 && number_2 < 20){
  console.log('The first part');
}
else if( number > 10 && number_2 > 20){
  console.log('The second part');
} 
else{
  console.log('All is wrong');
}
*/



/*Задание 5 
var name = 'banana';
switch (name){
  case 'tomato':
  console.log('Tomato is 2 $');
  break;
  case 'banana':
  console.log('Banana is 1 $');
  break;
  case 'chus':
  console.log('Chuk is 3$');
  break;
  default:
  console.log('There are no vegetables');
  break;
}
*/



/* !!!--- Functions ---!!!
Задание 1

function name (a,b,c){
  var d = b*b - 4*a*c;
  if(d > 0){
    var x1 = (-1*b + Math.sqrt(d)) / (2*a);
    var x2 = (-1*b - Math.sqrt(d)) / (2*a); 
    res = {x1:x1, x2:x2}
  }
  else if(d = 0){
    var x1 = (-1*b) / (2 * a);
    var x2 = x1;
    res = {x1:x1, x2:x2}
  }
  else{
    res = null;
  }
  return res;
}
console.log(name(3,-12,0));
*/



/*Задание 2  
var number_1 = (inputNumber) =>{
  console.log(inputNumber * 13);
};
number_1(9);
*/



/*Задание 3 
var numbers = (one, two)=>{
  var average = (one + two)/2;
  console.log(`sum of veriable is equal to ${average}`);
};
numbers(10, 11);
*/



/* Задание 4
function name(a,b,c){
  var d = b*b - 4*a*c;
  res = {d:d}
  console.log(res);
}
name(4,5,0);*/



/*Задание 5 
var getAverage = (number1, number2)=>{
  var Average = (number1 + number2) / 2;
  return Average;
}
console.log(getAverage(1,2));
*/



/*Задание 6 - кол-во вызовов функции
var count =0;
var Order = (top, bot) =>{
  count++; // при вызове функции каждый раз Order увеличивается на 1
  console.log('Order: + ');
};
var Total =(itemCount)=>{
  return itemCount * 7.5; //каждый заказ стоит по 7.5
};
Order(1,2); //первый вызов функции
Order(3,2); //второй вызов функции, то есть 2 раза вызывается
console.log(Total(count));
*/


/*Задание 7  Кнопка меню - пропадает и появляется при нажатии на кнопку
var menu = document.getElementById('menu');
var button = document.getElementById('toggle');
var isOpen = false; //по умолчанию меню скрытое, поэтому ставим просто false
function close(){
  menu.style.display = 'none';
}
function open(){
  menu.style.display = 'block';
}
button.addEventListener('click', function(){ // при нажатии на кнопку button с id='toggle' будет выполнена следующая функция
  if(isOpen){
    close();
    isOpen = false;
  }
  else{
    open();
    isOpen = true;
  }
})
*/



/*7+ задание  

html:
<button id="buttonclick">Click me!</button>
<nav id="menuclick"><a href="#">Home</a> / <a href="#">About</a></nav>
  <script src="file.js"></script>

var button = document.getElementById('buttonclick');
var menu = document.getElementById('menuclick');
var open_menu = false;
//напишем функции button_close и button_open , которые будут выполняться в IF
function button_open(){
  menuclick.style.display = 'block';
}
function button_close(){
  menuclick.style.display = 'none';
}
//Добавим событие
buttonclick.addEventListener('click', function(){
  if (open_menu){
    button_close();
    open_menu = false;
  }
  else{
    button_open();
    open_menu = true;
  }
})

*/



/*Задание 8 
//вывод при клике даты, числа и времени
<button id="button-time" type="button" onclick="document.getElementById('demo').innerHTML = Date()">Click me</button>
<p id="demo"></p>
*/
 

/*9 задание */
/*function myFunction1(){
  document.getElementById('myImage').src='images/on.gif';
}
function myFunction2(){
  document.getElementById('myImage').src='images/off.gif';
}*/


// var button_one = document.getElementById('button1');
// var button_two = document.getElementById('button2');
// button_one.addEventListener('click', function(){
//   document.getElementById('myImage').src='images/on.gif';
// });
// button_two.addEventListener('click', function(){
//   document.getElementById('myImage').src='images/off.gif';
// });




/*var button_one = document.getElementById('button1');
var button_two = document.getElementById('button2');
var image = document.getElementById('myImage')
var light = false;
function l(){
  image.src="images/on.gif";
}
function nl(){
  image.src="images/off.gif";
}
button_one.addEventListener('click', function(){
  if (!light){
    l();
  } else {
    nl();
  }
  light = !light
});*/


/*
var button_first = document.getElementById('button1');
var image = document.getElementById('myImage');
var light = false;
function l(){
  image.src="images/on.gif";
}
function nl(){
  image.src="images/off.gif";
}
button_first.addEventListener('click', function(){
  if(!light){
    l();
  }
  else{
    nl();
  }
  light = !light;
});

*/

/*Задание 10 
document.getElementById("demo").innerHTML = "My first NAME";
*/




/*Задание 11
function myFunction(){
  document.getElementById('demo').innerHTML = 'Header';


var button_one = document.getElementById('button1');
button_one.addEventListener('click', function(){
  document.getElementById('demo').innerHTML = 'Header1';
});}*/




/*$('#toggler').on('click', function(){$('#toggler').html('off')})*/





//Выпадание менюшки при нажатии на кнопку
/*$('button').on('click', function(){ // при нажатии на эту кнопку выполняется функция
  $('nav').toggleClass('closed'); //если нет класса closed, то он добавится, если есть, то убирется. А в css у нас этот класс по умолчанию display: none - то есть скрыт
});*/



/*Задача 13 - при нажатии на кнопку - изменяется ее bgc:
$('#toggler').on('click', function(){
  var text = $('#toggler').html();
  //console.log(text); // кол-во нажатия на кнопку

  if(text === 'off'){ //если переменная text='off', то меняем на 'on' и bgc, иначе, если 'on', то меняем на 'off' и bgc
    $('#toggler').html('on')
    $('#toggler').css('background-color', 'red')
  }
  else{
    $('#toggler').html('off')
    $('#toggler').css('background-color', 'green')
  }
});
*/





//Задание для this (проблема в том, что при нажатии на любую кнопку из 5 счетчик будет считать , что мы нажимаем на одну и ту же кнопку - поэтому используем this - контекст вызова - именно текущий элемент)
 /* $('.toggler').on('click', function(){
    var text = $(this).html();
    //console.log(text); // кол-во нажатия на кнопку
  
    if(text === 'off'){ //если переменная text='off', то меняем на 'on' и bgc, иначе, если 'on', то меняем на 'off' и bgc
      $(this).html('on')
      $(this).css('background-color', 'red')
    }
    else{
      $(this).html('off')
      $(this).css('background-color', 'green')
    }
  });
  */


/* Задание 14
  var button_one = document.getElementById('button1');
  button_one.addEventListener('click', function(){
    document.getElementById('but').innerHTML = 'Paragraph';
  });  
  */



  /*Задание 15 */
  //document.getElementById('demo').innerHTML = 5 + 6; //будет выведено число 11

  //document.write(5+11); // просто выведет посчитанный результат, если поставить 5 как строку, то все равно будет 16, поскольку строку можно привести к числу

  /*
  var x,y,z;
  x = 5;
  y = 6;
  z = 3*x + 2*y;
  document.getElementById('demo').innerHTML = 'value z is ' + z + '.';
  */



  //Задание 16
  $('p').on('click', function(){
    //$('p').hide() //при нажатии на любую строку - все строки пропадают
    $(this).hide() // ПРи нажатии на какой-то из текста - только эта строка пропадает (используем this)
    //$(".we").hide() // при нажатии на любую строку - пропадает только строки с классом class = "we" (также с id - шниками работает)
  });