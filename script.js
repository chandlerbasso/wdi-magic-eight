$('document').ready(function(){
console.log('ha gayyyyyy')
  $('button').click(function(){
    $('img').removeClass().addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $(this).removeClass();
    })
  })








})
