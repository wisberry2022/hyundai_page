$(function () {
  /////////////////////////////////////
  $('.top_close_btn').on('click', function () {
    $('.TopBanner').addClass('on');
    $('.Section01').addClass('on');
  });

  $('.main_slider').slick({
    arrows: false,
  });

  $('.left_slider').slick({
    arrows: false,
    asNavFor: '.right_slider',
    fade: true,
  });

  $('.right_slider').slick({
    arrows: false,
    asNavFor: '.left_slider',
    slidesToShow: 5,
  });

  $('.center_slide').on('init reInit afterChange', function (e, s, c) {
    $('.num').html('0' + (c ? c + 1 : 1) + '<span> / 0' + s.slideCount + '</span>');
    var current = $('.center_slide .slick-current');
    current.addClass('on').siblings().removeClass('on');
    $('.content_box>div').eq(c).addClass('on').siblings().removeClass('on');
  })

  $('.center_slide').slick({
    arrows: false,
    centerMode: true,
    centerPadding: '300px',
  });



  $('.slide_handler i:first-child').on('click', function () {
    $('.left_slider').slick('slickPrev');
  });

  $('.slide_handler i:last-child').on('click', function () {
    $('.left_slider').slick('slickNext');
  });

  $(window).on('scroll', function () {
    var sct = $(window).scrollTop();
    sct > 0
      ? $('.Header').addClass('on')
      : $('.Header').removeClass('on')
  })


  /////////////////////////////////////
})