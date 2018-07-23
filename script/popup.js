$('.popup, .popup__close').click(function() {
    $(this).css({
        'opacity': '0',
        'visibility': 'hidden'
    })
});

$('#play, #play1, #play2, #play3, #play4, #play5, #play6, #play7').click(function() {
    $('.popup, .popup__close').css({
        'opacity': '1',
        'visibility': 'visible'
    })
});