$(document).ready(function(){
  $('#change_btn').click(function(){  /*JS‚Í$()—v‘f‚É‘Î‚µ‚Ä.ZZ(~~)‚Å‚·‚æ‚Á‚Ä\•¶*/
    $('#box').css({'color':'#0094d7'})
  });
});

/*$(document).ready(function(){  ‚ÌÈ—ªŒ` */
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
  $('.list_slideToggle > li > div').click(function(){
    $(this).next('ul').slideToggle('fast');    /* ƒNƒŠƒbƒN‚³‚ê‚½—v‘f‚ÌŽŸ‚É‚ ‚édiv‚ð•\Ž¦‚³‚¹‚éB*/
  });
});

$(function(){
  $(window).scroll(function(){
    if($(this).scrollTop() > 200){
      $('.Top_btn').fadeIn();
    }else{
      $('.Top_btn').fadeOut();
    }
  });
  $('.Top_btn').click(function(){
    $('body, html').animate({scrollTop:0},50);
  });
});

$(function(){
   $('.tooltip').hide();
   $('.tooltip').hover(
     function(){
          $(this).children('.tooltip').fadeIn('fast');
     },
     function(){
          $(this).children('.tooltip').fadeOut('fast');
     }
   );
});