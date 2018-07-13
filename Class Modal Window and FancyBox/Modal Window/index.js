// $('#open-modal').on('click', function(){     open-modal на открывающем button 
//   $('#my-modal').toggleClass('open')
// }); но окна теперь не закроется



$('[data-toggle="open-modal"]').on('click', function(){
  $('#my-modal').addClass('open')
})
$('[data-toggle="close-modal"]').on('click', function(){
  $('#my-modal').removeClass('open')
}) //так только при нажатии на кнопку будет закрыто окно



$('.modal-content').on('click', function(event){
  event.stopPropagation()
}) // а так по кнопке и вне модального окна - окно закроется