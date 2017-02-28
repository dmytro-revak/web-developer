(function initMamMoving() {
    var man = document.getElementsByTagName('div')[0],
        buttons = document.getElementsByTagName('button'),
        topPosition = 175,
        leftPosition = 600;

    man.style.top = topPosition + 'px';
    man.style.left = leftPosition + 'px';

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function() {
            var buttonDirection = this.className;
            moveTheMan(buttonDirection);            
        }
    }

    function moveTheMan(direction) {
        if (direction === 'up') {
            man.style.transform = 'rotate(0deg)';
            topPosition -= 10;
            man.style.top = topPosition + 'px';
        } else if (direction === 'down') {
            man.style.transform = 'rotate(180deg)';
            topPosition += 10;
            man.style.top = topPosition + 'px';
        } else if (direction === 'left') {
            man.style.transform = 'rotate(270deg)';
            leftPosition -= 10;
            man.style.left = leftPosition + 'px';
        } else if (direction === 'right') {
            man.style.transform = 'rotate(90deg)';
            leftPosition += 10;
            man.style.left = leftPosition + 'px';
        } else if (direction === 'up-left') {
            moveTheMan('up');
            moveTheMan('left');
            man.style.transform = 'rotate(315deg)';
        } else if (direction === 'up-right') {
            moveTheMan('up');
            moveTheMan('right');
            man.style.transform = 'rotate(45deg)';
        } else if (direction === 'down-left') {
            moveTheMan('down');
            moveTheMan('left');
            man.style.transform = 'rotate(225deg)';
        } else {
            moveTheMan('down');
            moveTheMan('right');
            man.style.transform = 'rotate(135deg)';
        }
    }

})();
