$(document).ready(function() {
    $('.nav-toggle').click(function() {
      $('.nav-menu').slideToggle();
    });
    $(window).resize(function() {
      if ($(window).width() > 768) {
        $('.nav-menu').show();
      } else {
        $('.nav-menu').hide();
      }
    });
  });
  