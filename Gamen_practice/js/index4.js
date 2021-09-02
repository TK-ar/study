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
  $(".list_slideToggle > li > div").click(function(){
    $(this).next("ul").slideToggle("fast");    /* クリックされた要素の次にあるdivを表示させる。*/
  });
});