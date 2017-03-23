(function initBounceTask() {

    var bounceCircle = $('.bounce-circle'),
        mousePositionTextWrapper = $(".mouse-position-text-wrapper");

    $(window).mousemove(function(e) {
        mousePositionTextWrapper.html('X coordinate = ' + e.pageX + '<br/>' + 'Y coordinate = ' + e.pageY);
    });

    bounceCircle.css({
        position: 'absolute',
        top: '50px',
        left: '20px',
        height: '25px',
        width: '25px',
        borderRadius: '50%',
        border: '2px solid black'
    });

    bounceCircle.mouseover(function() {
        bounceCircle.css({
            animationName: 'first-hover',
            animationDuration: '2s',
            animationFillMode: 'forwards'
        });
    });

})();