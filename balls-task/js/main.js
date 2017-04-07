var mainBall = $('div').eq(0);

setInterval(function() {
    mainBall.animate({
        top: Math.round(Math.random() * 600) + 'px',
        left: Math.round(Math.random() * 1000) + 'px'
    }, 2000);
}, 2000);

mainBall.click(function () {
    createMovingDiv();
});

function createMovingDiv() {
    var backgroundColors = ['blue', 'green', 'yellow'];
    for (var i = 0; i < 3; i++) {
        var newDiv = $('<div>');

        newDiv.css({
            position: 'absolute',
            top: '10px',
            left: '10px',
            backgroundColor: backgroundColors[i]
        });

        newDiv.animate({
            top: Math.round(Math.random() * 600) + 'px',
            left: Math.round(Math.random() * 1000) + 'px'
        }, {
            duration: 2000,
            start: function () {
                var currentDiv = this;
                setInterval(function () {
                    $(currentDiv).animate({
                        top: Math.round(Math.random() * 600) + 'px',
                        left: Math.round(Math.random() * 1000) + 'px'
                    }, 2000);
                }, 2000)
            }
        });

        $('body').append(newDiv);
    }
}










// function MovingDiv(father) {
//     var newDiv = document.createElement('div');
//     newDiv.__proto__ = father;
//     newDiv.style.backgroundColor = 'green';
//     newDiv.offsetTop = '500px';
//     newDiv.offsetLeft = '200px';
//     $('body').append(newDiv);
// }
//
//
// function MovingDiv(father) {
//     var newDiv = Object.create(HTMLDivElement.prototype);
//     newDiv.style.backgroundColor = 'green';
//     newDiv.offsetTop = '500px';
//     newDiv.offsetLeft = '200px';
//     $('body').append(newDiv);
// }
