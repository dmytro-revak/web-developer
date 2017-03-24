$('.square').click(function () {
    squareBreathing();
    setInterval(squareBreathing, 4000);
});

function squareBreathing() {

    setTimeout(function () {
        $('.square').css({
            background: 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')'
        });
    }, 2000);

    $('.square').animate({
        height: '300px',
        width: '300px',
        opacity: '0.1'
    }, 2000).animate({
        height: '200px',
        width: '200px',
        opacity: '1'
    }, 2000);
}