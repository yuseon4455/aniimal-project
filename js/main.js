// main-header nav

$(function () {
  $("ul.gnb>li").hover(function () {
    $("ul.sub, .nav-bg").stop().slideDown();
  }, function () {
    $("ul.sub, .nav-bg").stop().slideUp();
  });
});

// mobile menu

$(function () {
  $('#toggle-btn').click(function () {
    // $('#gnb').css('display','block');
    $('#menu').slideDown();
  });
  $('.gnb-close').click(function () {
    // $('#gnb').css('display','none');
    $('#menu').slideUp();
  });

  $('.m-gnb > li').click(function () {
    $(this).find('.m-sub').toggle(function () {
      $(this).find('.m-sub').fadeIn();
      $(this).find('.m-sub').fadeOut();
    });
  });
});




// main-visual slide

$(function () {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    speed: 1000,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },

  });
});

   
// counter

$(function(){
      // 설정 옵션: el - 요소명, offset - 카운트 시작 위치 조절
      playCount({
        el: '.number',
        offset: 300
      })
});



// tab btn

$(function () {
  $('#news').addClass('on');
  $('.notice-btn').addClass('on');

  $('.news-btn').click(function () {
    $('#news').addClass('on');
    $('#notice').removeClass('on');
    $(this).css({
      'background': '#155299',
      'color': '#fff'
    });
    $('.notice-btn').css({
      'background': '#6ba2e6',
      'color': '#fff'
    });
  });


  $('.notice-btn').click(function () {
    $('#notice').addClass('on');
    $('#news').removeClass('on');
    $(this).css({
      'background': '#155299',
      'color': '#fff'
    });
    $('.news-btn').css({
      'background': '#6ba2e6',
      'color': '#fff'
    });
  });
});