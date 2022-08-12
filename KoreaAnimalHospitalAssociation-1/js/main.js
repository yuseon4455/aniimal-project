// main-header nav

$(function(){
    $("ul.gnb>li").hover(function(){
        $("ul.sub, .nav-bg").stop().slideDown();
    }, function(){
        $("ul.sub, .nav-bg").stop().slideUp();
    });
});

// mobile menu

$(function(){
  $('#toggle-btn').click(function(){
      // $('#gnb').css('display','block');
      $('#menu').slideDown();
  });
  $('.gnb-close').click(function(){
      // $('#gnb').css('display','none');
      $('#menu').slideUp();
  });

  $('.m-gnb > li').click(function(){
    $(this).find('.m-sub').toggle(function(){
      $(this).find('.m-sub').fadeIn();
      $(this).find('.m-sub').fadeOut();
    });
  });

});

// main-visual slide

$(function(){
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        autoplay: true,
        speed : 1000,
        
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
        },
        
        autoplay: {
          delay:2000,
          disableOnInteraction: false
        },
      
      });
});

// count

$(function() {
    var cnt0 = 0;
  
    counterFn();
  
    function counterFn() {
  
      id0 = setInterval(count0Fn, 500);
  
      function count0Fn() {
        cnt0++;
        if (cnt0 > 11 ) {
          clearInterval(id0);
        } else {
          $(".number1").text(cnt0);
        }
      }
    }
  });
  
  $(function() {
    var cnt0 = 0;
  
    counterFn();
  
    function counterFn() {
  
      id0 = setInterval(count0Fn, 60);
  
      function count0Fn() {
        cnt0++;
        if (cnt0 > 91 ) {
          clearInterval(id0);
        } else {
          $(".number2").text(cnt0);
        }
      }
    }
  });
  
  $(function() {
    var cnt0 = 0;
  
    counterFn();
  
    function counterFn() {
  
      id0 = setInterval(count0Fn, 1);
  
      function count0Fn() {
        cnt0++;
        if (cnt0 > 1200 ) {
          clearInterval(id0);
        } else {
          $(".number3").text(cnt0);
        }
      }
    }
  });
  
  // tab btn
  
  $(function(){
    $('#news').addClass('on');
  
    $('.news-btn').click(function(){
      $('#news').addClass('on');
      $('#notice').removeClass('on');
      $(this).css({'background':'#155299','color':'#fff'});
      $('.notice-btn').css({'background':'#fff', 'color':'#000'});
    });
  
    
    $('.notice-btn').click(function(){
      $('#notice').addClass('on');
      $('#news').removeClass('on');
      $(this).css({'background':'#155299','color':'#fff'});
      $('.news-btn').css({'background':'#fff', 'color':'#000'});
    });
  });