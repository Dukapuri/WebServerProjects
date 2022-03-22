$(document).ready(function () {
  $('.itembanner a').click(function() {
    $(this).toggleClass('clicked');
    $(this).children('span').toggleClass('clicked');
    $(this).children('img').toggle();
  });
  $('.tabs li').click(function() {
    var tab_id = $(this).attr('data-tab');
    $('.tabs li').removeClass('current');
    $('.iconsbox').removeClass('current');
    $('.iconsbox').hide();
    $('#' + tab_id).show();
    

    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
});
});


