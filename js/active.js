$(function(){

  function fnactive() {
    $(`.about-section , .contact-section, .work-section`).each(function () {
      var offset = $(this).offset().top// 객체와 윈도우탑의 거리
      var innerH = $(this).innerHeight()
      if (
        (scrY >= offset - winH * 0.6 + innerH) -
        (scrY >= offset - winH * 0.4)
        ) {
        $(`section`).removeClass('active')
        $(this).addClass('active')
      } else {
        $(this).removeClass('active')
      }
    })//each
  }//fn1
  
  fnactive()
  $(window).resize(function () {
    fnactive()
  }).scroll(function () {
    fnactive()
  })

  $(`.link button`).click(function(e){
    var n = $(this).attr('data-n')
    $(`.work-section${n} .planning`).addClass('active')
    $(`body`).addClass('not-scroll')
    $(`body`).css({'overflow':'hidden'})
  })
  $(`.planning .wrap button`).click(function(e){
    $('.planning').removeClass('active')
    $(`body`).css({'overflow':'auto'})
    $('body').removeClass('not-scroll')
    $(`body`).css({'overflow':'auto'})
  })

  var clipboard = new ClipboardJS('.btn');
  clipboard.on('success', function(e) {
      alert('클립보드에 복사되었습니다.')
  });
})//ready