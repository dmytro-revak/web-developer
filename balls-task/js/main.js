// save red div to the variable
var mainBall = $('div').eq(0);

// make red div animated
setInterval(function() {
    mainBall.animate({
        top: Math.round(Math.random() * 600) + 'px',
        left: Math.round(Math.random() * 1000) + 'px'
    }, 2000);
}, 2000);

// create three divs when user press on the red div
mainBall.click(function () {
    createMovingDiv();
});

// create three div, add them to the body and make them animated
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

        newDiv.click(function () {
            createMovingDiv();
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
