window.onscroll = function() {
  var st = $(this).scrollTop();
  var min = $(this).innerHeight()-$('#my-navbar').height();
  if(st >= min) {
    $('#my-navbar').addClass('onScroll-navbar');
  } else {
    $('#my-navbar').removeClass('onScroll-navbar');
  }
}
