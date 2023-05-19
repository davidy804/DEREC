$(document).ready(function () {
    $(".flex-slide").each(function () {
        $(this).hover(function () {
            $(this).find('.flex-title').css({
                transform: 'rotate(0deg)',
                top: '10%'
            });
            $(this).find('.flex-about').css({
                opacity: '1'
            });
        }, function () {
            $(this).find('.flex-title').css({
                transform: 'rotate(-90deg)',
                top: '15%'
            });
            $(this).find('.flex-about').css({
                opacity: '0'
            });
        })
    });

    $('.contactButton').click(function () {
        $(this).toggleClass('is-active');
        $('.contact').toggleClass('is-active');
    });

    $('.shounen').click(function () {
        $('.sidebar').prop('style', 'width: 40vw');
        $('.recContent, .sideTitle').prop('style', 'filter: blur(3px)');
        $('.backdrop, .shounenRec').show();
    });
    $('.shoujo').click(function () {
        $('.sidebar').prop('style', 'width: 40vw');
        $('.recContent, .sideTitle').prop('style', 'filter: blur(3px)');
        $('.backdrop, .shoujoRec').show();
    });
    $('.comedy').click(function () {
        $('.sidebar').prop('style', 'width: 40vw');
        $('.recContent, .sideTitle').prop('style', 'filter: blur(3px)');
        $('.backdrop, .comedyRec').show();
    });
    $('.drama').click(function () {
        $('.sidebar').prop('style', 'width: 40vw');
        $('.recContent, .sideTitle').prop('style', 'filter: blur(3px)');
        $('.backdrop, .dramaRec').show();
    });
    $('.episodic').click(function () {
        $('.sidebar').prop('style', 'width: 40vw');
        $('.recContent, .sideTitle').prop('style', 'filter: blur(3px)');
        $('.backdrop, .episodicRec').show();
    });
    $('.romance').click(function () {
        $('.sidebar').prop('style', 'width: 40vw');
        $('.recContent, .sideTitle').prop('style', 'filter: blur(3px)');
        $('.backdrop, .romanceRec').show();
    });
    $('.thriller').click(function () {
        $('.sidebar').prop('style', 'width: 40vw');
        $('.recContent, .sideTitle').prop('style', 'filter: blur(3px)');
        $('.backdrop, .thrillerRec').show();
    });
    $('.fantasy').click(function () {
        $('.sidebar').prop('style', 'width: 40vw');
        $('.recContent, .sideTitle').prop('style', 'filter: blur(3px)');
        $('.backdrop, .fantasyRec').show();
    });
    $('.scifi').click(function () {
        $('.sidebar').prop('style', 'width: 40vw');
        $('.recContent, .sideTitle').prop('style', 'filter: blur(3px)');
        $('.backdrop, .scifiRec').show();
    });
    $('.sports').click(function () {
        $('.sidebar').prop('style', 'width: 40vw');
        $('.recContent, .sideTitle').prop('style', 'filter: blur(3px)');
        $('.backdrop, .sportsRec').show();
    });
    $('.healing').click(function () {
        $('.sidebar').prop('style', 'width: 40vw');
        $('.recContent, .sideTitle').prop('style', 'filter: blur(3px)');
        $('.backdrop, .healingRec').show();
    });

    $('.closebtn').click(function () {
        $('.sidebar').prop('style', 'width: 0');
        $('.recContent, .sideTitle').prop('style', 'filter: none');
        $('.backdrop, .shounenRec, .shoujoRec, .comedyRec, .dramaRec, .episodicRec, .romanceRec, .thrillerRec, .fantasyRec, .scifiRec, .sportsRec, .healingRec').hide();
    });

    $(document).mouseup(function (e) {
        if ($(e.target).closest(".sidebar").length === 0) {
            $('.sidebar').prop('style', 'width: 0');
            $('.recContent, .sideTitle').prop('style', 'filter: none');
            $('.backdrop, .shounenRec, .shoujoRec, .comedyRec, .dramaRec, .episodicRec, .romanceRec, .thrillerRec, .fantasyRec, .scifiRec, .sportsRec, .healingRec').hide();
        }
    });

});