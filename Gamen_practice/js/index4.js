$(document).ready(function(){
  $('#change_btn').click(function(){  /*JS��$()�v�f�ɑ΂���.�Z�Z(�~�~)�ł�����č\��*/
    $('#box').css({'color':'#0094d7'})
  });
});

/*$(document).ready(function(){�̏ȗ��` */
$(function(){
  $('#text').mouseover(function(){
    $(this).removeClass('hover_off');
    $(this).addClass('hover_on');
  });
});

$(function(){
  $('#text').mouseout(function(){
    $(this).removeClass('hover_on');
    $(this).addClass('hover_off');
    
  })
})
