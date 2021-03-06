$(document).ready(function(){
  $('#change_btn').click(function(){  /*JSは$()要素に対して.〇〇(××)ですよって構文*/
    $('#box').css({'color':'#0094d7'})
  });
});

/*$(document).ready(function(){  の省略形 */
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
    $(this).next('ul').slideToggle('fast');    /* クリックされた要素の次にあるdivを表示させる。*/
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
   $('#Tip li').hover(
     function(){
          $(this).children('.tooltip').fadeIn('fast');
     },
     function(){
          $(this).children('.tooltip').fadeOut('fast');
     }
   );
});