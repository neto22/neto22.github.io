$(document).ready(function(){
    $('a[href^="#"]').click(function(e) {
        e.preventDefault();
        var target = this.hash, $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 400, 'swing', function() {
            window.location.hash = target;
        });
    });
});

$(window).scroll(function(){
    if ($(this).scrollTop() > 850) {
        $('#arrow-nav').fadeIn('fast');
    } else {
        $('#arrow-nav').fadeOut('fast');
    }
});

$(document).ready(function(){
    $('.icon').click(function(){
        $('#navbar div').css('display', 'block');
        $('.cross').removeClass('none');
        //$('.logo-query').css('display', 'none');
        $('.icon').css('display', 'none');
        $('#navbar').css('background-image', " url('assets/texture.png')");
    });
    $('.cross').click(function(){
        $('#navbar div').css('display', 'none');
        $('.cross').addClass('none');
       // $('.logo-query').css('display', 'block');
        $('.icon').css('display', 'block');
        $('#navbar').css('background-image', "");
    });
    if (window.innerWidth < 860) {
        $('.menu a').click(function(){
            $('#navbar div').css('display', 'none');
            $('.icon').css('display', 'block');
            $('.cross').addClass('none');
            $('#navbar').css('background-image', "");
        })
    }
});