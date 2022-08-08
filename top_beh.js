function FixedAnime() {
  var topHeight = $('.page-header').outerHeight(true) -350;
  var scroll = $(window).scrollTop();
  if (scroll >= topHeight) {//headerの高さ以上になったら
    $('#gloval-nav').addClass('fixed');//fixedというクラス名を付与
  } else {//それ以外は
    $('#gloval-nav').removeClass('fixed');//fixedというクラス名を除去
  }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  FixedAnime();/* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
});

$(window).on('load', function () {
  FixedAnime();/* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
});