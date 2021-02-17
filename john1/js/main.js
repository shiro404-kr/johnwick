// main.js

$(function(){

  // gnb 열기
  $('.btn-toggle').on('click', function(){
    $('#gnb').addClass('show');
    console.log('click');
  });

  // gnb 닫기
  $('.btn-close').on('click', function(){
    $('#gnb').removeClass('show');
  });
  
  // url paramiter equal check (synop = 1 ?)
  var val = location.href.substr(
    location.href.lastIndexOf('=') + 1
  );
  if(val == 1) {
    $('#synop-popup').addClass('show');
    $('#gnb ul li').removeClass('active');
    $('#gnb ul li').eq(2).addClass('active');
    $('.header_box').css('display', 'none');
    $('title').text('시놉시스 < 극장판 귀멸의 칼날: 무한열차편');
  } else {
    $('#synop-popup').removeClass('show');
  }
  
  // gallery next and prev buttons
  $('#main > .thumb > li').on('click', function(){

    let getUrl = $(this).find('img').attr('src');
    console.log(getUrl)

    $('#main > figure > img').attr('src', getUrl);
  })






});