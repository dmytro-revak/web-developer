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

    var animationNumber  = 1;

    bounceCircle.mouseover(function() {
        debugger

        if (animationNumber === 1) {
            bounceCircle.css({
                animationName: 'first-hover',
                animationDuration: '2s',
                animationFillMode: 'forwards'
            });
            animationNumber = 2;
        } else if (animationNumber === 3) {
            bounceCircle.css({
                animationName: 'second-hover',
                animationDuration: '2s',
                animationFillMode: 'forwards'
            });
            animationNumber = 4;
        }
    });

    bounceCircle.click(function() {
        debugger
        if (animationNumber === 2) {
            bounceCircle.css({
                animationName: 'first-click',
                animationDuration: '2s',
                animationFillMode: 'forwards'
            });
            animationNumber = 3;
        } else if (animationNumber === 4) {
            bounceCircle.css({
                animationName: 'second-click',
                animationDuration: '2s',
                animationFillMode: 'forwards'
            });
        }

    });

})();