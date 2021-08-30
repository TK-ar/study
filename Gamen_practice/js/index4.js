$(document).ready(function(){
  $('#change_btn').click(function(){  /*JSÇÕ$()óvëfÇ…ëŒÇµÇƒ.ÅZÅZ(Å~Å~)Ç≈Ç∑ÇÊÇ¡Çƒç\ï∂*/
    $('#box').css({'color':'#0094d7'})
  });
});

/*$(document).ready(function(){ÇÃè»ó™å` */
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
