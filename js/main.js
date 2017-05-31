window.onscroll = function() {
  var st = $(this).scrollTop();
  var min = $(this).innerHeight()-$('#my-navbar').height();
  if(st >= min) {
    $('#my-navbar').addClass('onScroll-navbar');
  } else {
    $('#my-navbar').removeClass('onScroll-navbar');
  }
}

function goToGithub() {
  location.href = 'https://github.com/katakeda';
}

function goToResume() {
  location.href = 'http://kaitake.com/assets/resume.pdf';
}

function goToPaper() {
  location.href = 'http://kaitake.com/assets/rsa.pdf'
}
