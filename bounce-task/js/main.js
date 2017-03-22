(function initBounceTask() {

    var bounceCircle = $('.bounce-circle'),
        mousePositionTextWrapper = $(".mouse-position-text-wrapper");

    $(window).mousemove(function(e) {
        mousePositionTextWrapper.html('X coordinate = ' + e.pageX + '<br/>' + 'Y coordinate = ' + e.pageY);
    });

})();