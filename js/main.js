$(function(){
 
    $('#gnb .depth1 > li').hover(
      
      function(){
        $(this)
          .children('.depth2')
          .addClass('on');
      },
      
      function(){
        $(this)
        .children('.depth2')
        .removeClass('on');
      }

    );
})