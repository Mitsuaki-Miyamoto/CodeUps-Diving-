
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  // ハンバーガーメニュー
  $(".js-hamburger,.js-drawer").click(function () {
    $(".js-hamburger").toggleClass("is-active");
    $(".js-drawer").fadeToggle();
  });

  //resizeイベント
  $(window).resize(function () {
    if (window.matchMedia("(min-width: 768px)").matches) {
      closeDrawer();
    }
  });

  function openDrawer() {
    $(".js-drawer").fadeIn();
    $(".js-hamburger").addClass("is-open");
    $(".js-hamburger").addClass("is-active");
  }

  function closeDrawer() {
    $(".js-drawer").fadeOut();
    $(".js-hamburger").removeClass("is-open");
    $(".js-hamburger").removeClass("is-active");
  }

  //MVスライダー
  let mv__slider = new Swiper(".swiper", {
    loop: true,
    effect: "fade",
    speed: 3000,
    allowTouchMove: false,
    autoplay: {
      delay: 3000,
    },
  });

  //Campaignスライダー
  let campaign__body = new Swiper('.swiper-container', {
    slidesPerView: 1.2,
    breakpoints: {
      // スライドの表示枚数：768px以上の場合
      768: {
        slidesPerView: 3.5,
      }
    },
    // spaceBetween: 30,
    loop: true,
    speed: 800,
    // centeredSlides : true,
    autoplay: {
    // 自動再生
    delay: 3000, // 1秒後に次のスライド
    disableOnInteraction: true, // 矢印をクリックして自動再生を止める
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  //to-top
  const pageTop = $(".js-page-top");
  pageTop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      pageTop.fadeIn();
    } else {
      pageTop.fadeOut();
    }
  });
  pageTop.click(function () {
    $("body, html").animate(
      {
        scrollTop: 0,
      },
      300
    );
    return false;
  });
});


//要素の取得とスピードの設定
var box = $('.js-colorbox'),
    speed = 700;  
 
//.colorboxの付いた全ての要素に対して下記の処理を行う
box.each(function(){
    $(this).append('<div class="js-color"></div>')
    var color = $(this).find($('.js-color')),
    image = $(this).find('img');
    var counter = 0;
 
    image.css('opacity','0');
    color.css('width','0%');
    
    //inviewを使って背景色が画面に現れたら処理をする
    color.on('inview', function(){
        if(counter == 0){
          $(this).delay(200).animate({'width':'100%'},speed,function(){
                   image.css('opacity','1');
                   $(this).css({'left':'0' , 'right':'auto'});
                   $(this).animate({'width':'0%'},speed);
                })
            counter = 1;
          }
     });
});




