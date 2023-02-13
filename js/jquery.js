$(document).ready(function(){
  $('#btn1').click(function(){
    $('p').append('This is a sentence');
  });
  $('h3').click(function() {
    $(this).hide();
  });

  $('#blue').dblclick(function(){
    $(this).css('color', '#ff0000')
  })

});
