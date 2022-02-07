$(document).ready(function () {
    var btn = $('#button');
    var menu = $('#menu');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 150) {
            btn.addClass('show');
            menu.css('height','55px');
        } else {
            btn.removeClass('show');
            menu.css('height','65px');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });
});

// Collection
$('.buy').click(function(){
    $('.bottom').addClass("clicked");
  });
  
  $('.remove').click(function(){
    $('.bottom').removeClass("clicked");
  });