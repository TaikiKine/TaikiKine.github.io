$(function() {
  var winWidth = $('body').outerWidth(true);
  var footer = $('#footer');
  var slide = $('#slide');
  //画面下位置を取得
  var bottomPos = $(document).height() - $(window).height() -300;
  var showFlug = false;

  // ウィンドウより小さかったら開く
  panelOpen();
  //slideを画面右外へ配置
  $('#slide').css('margin-left', winWidth+'px');
  $(window).scroll(function () {
    panelOpen();
  });
  //閉じるボタン
  $('#close').click(function(){
    footer.hide();
  });
  //ウィンドウリサイズしたらwidth変更
  $(window).resize(function(){
    winWidth = $('body').outerWidth(true);
    bottomPos = $(document).height() - $(window).height() - 500;
  });

  function panelOpen() {
    if ($(this).scrollTop() >= bottomPos) {
      if (showFlug == false) {
        showFlug = true;
        slide.stop().animate({'marginLeft' : '0px'}, 300);
      }
    } else {
      if (showFlug) {
        showFlug = false;
        slide.stop().animate({'marginLeft' : winWidth+'px'}, 200);
      }
    }
  }
});

$(function() {
  var nav = $('.nav');
  //navの位置
  var navTop = nav.offset().top;
  //スクロールするたびに実行
  $('.nav').hide();
  $(window).scroll(function () {
    var winTop = $(this).scrollTop();
    //スクロール位置がnavの位置より下だったらクラスfixedを追加
    if (winTop >= navTop) {
      $('.nav').fadeIn("fast");
      nav.addClass('fixed')
    } else if (winTop <= navTop) {
      $('.nav').hide();
      nav.removeClass('fixed')
    }
  });
});
