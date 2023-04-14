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

  $(`.contact-section .mail`).click(function(){
    navigator.clipboard.writeText("thwls9930@gmail.com")
    alert("이메일이 클립보드에 복사되었습니다.")
  })
  $(`.contact-section .tel`).click(function(){
    navigator.clipboard.writeText("010-6313-9930")
    alert("전화번호가 클립보드에 복사되었습니다.")
  })
  $(`.contact-section .github`).click(function(){
    
  })
})//ready