$(document).ready(function(){
  $('#change_btn').click(function(){  /*JS��$()�v�f�ɑ΂���.�Z�Z(�~�~)�ł�����č\��*/
    $('#box').css({'color':'#0094d7'})
  });
});

/*$(document).ready(function(){  �̏ȗ��` */
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
  });
});

$(function(){
  $(".list_slideToggle > li > div").click(function(){
    $(this).next("ul").slideToggle("fast");    /* �N���b�N���ꂽ�v�f�̎��ɂ���div��\��������B*/
  });
});