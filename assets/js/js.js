$(document).ready(function () {
    console.log("ready :)");

    //on reload to scroll back to top
    history.scrollRestoration = "manual";
    $(window).on("beforeunload", function () {
        $(window).scrollTop(0);
    });

    var btn = $('#button');
    var menu = $('#menu');
    var open = $('#open');
    var close = $('#close');

    //button for back to top
    $(window).scroll(function () {
        if ($(window).scrollTop() > 150) {
            btn.addClass('show');
            menu.css('height', '55px');
        } else {
            btn.removeClass('show');
            menu.css('height', '65px');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '200');
    });
    //end button for back to top

    //responsive phone menu start
    open.click(function () {
        close.css('display', 'inline-block');
        $(".phone-menu").slideDown(
            {
                complete: function () {
                    $(".phone-social").css('display', 'block');
                    let s = 0;
                    for (let i = 1; i <= 4; i++) {
                        let delay = s + "s";
                        console.log(".phone-menu .menu ul li:nth-child(" + i + ")");
                        $(".phone-menu .menu ul li:nth-child(" + i + ")").css({
                            "animation": "animate 2.5s " + delay + " ease-in-out"
                        });
                        s += 0.2;
                    }
                }
            });
        $(".phone-menu").addClass("show");
    });

    function clickEvent() {
        close.css('display', 'none');
        $(".phone-social").css('display', 'none');
        $(".phone-menu").removeClass("show");
        $(".phone-menu").slideUp("slow");
    }

    $(".phone-menu li").click(
        clickEvent);

    close.click(
        clickEvent
    );

    //resposive phone menu end
});

