  function math(num1, num2){
  var Number1 = num1;
  var Number2 = num2;
  
  var result = Number1 * Number2;
  return result;
  };
  
  $(function(){
    $("#button").click(function(){
    var num1 = parseInt($('.num_input1').val());
    
    var num2 = parseInt($('.num_input2').val());
    
    var result = math(num1, num2);
    
    console.log(result);
    
    $('.result').text(result);
    });
  });
