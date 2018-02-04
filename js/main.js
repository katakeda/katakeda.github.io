window.onload = function() {
  $('#intro-title').textillate({
    initialDelay: 1000,
    in: {
      effect: 'fadeIn',
      delay: 200,
      shuffle: true
    }
  });
  $('#intro-text').textillate({
    initialDelay: 300,
    in: {
      effect: 'fadeIn',
      delay: 10,
      shuffle: true
    }
  });
  if($(this).scrollTop()) {
    $('.nav-text').textillate({
      in: {
        effect: 'fadeIn',
        sync: true
      }
    });
  } else {
    $('.nav-text').textillate({
      initialDelay: 2800,
      in: {
        effect: 'fadeIn',
        sync: true
      }
    });
  }
}

window.onscroll = function() {
  var st = $(this).scrollTop();
  var min = $(this).innerHeight()-$('#my-navbar').height();
  if(st >= min) {
    $('#my-navbar').addClass('onScroll-navbar');
  } else {
    $('#my-navbar').removeClass('onScroll-navbar');
  }
}

function goToAbout() {
  $('html,body').animate({
    scrollTop: $("#first-container").offset().top
  }, 'slow');
}

function goToProjects() {
  $('html,body').animate({
    scrollTop: $("#second-container").offset().top
  }, 'slow');
}

function goToContacts() {
  $('html,body').animate({
    scrollTop: $("#footer").offset().top
  }, 'slow');
}

function goToGithub() {
  location.href = 'https://github.com/katakeda';
}

function goToResume() {
  location.href = '/assets/resume.pdf';
}

function goToPaper() {
  location.href = '/assets/rsa.pdf';
}
