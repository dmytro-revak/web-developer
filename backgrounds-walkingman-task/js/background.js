(function initChangingBackground() {

    var backgroundWrapper = document.getElementById('backgrounds-wrapper'),
        colorButton = document.getElementById('color'),
        imageButton = document.getElementById('image'),
        backgroundItems = document.querySelectorAll('.background-wrapper__item');

    colorButton.onclick = function() {
        addClassToWrapper('color-wrapper');
    }

    imageButton.onclick = function() {
        addClassToWrapper('picture-wrapper');
    }

    for (var i = 0; i < backgroundItems.length; i++) {
        backgroundItems[i].onclick = function() {
            setBodyBackground(this);
        }
    }

    function addClassToWrapper(className) {
        if (backgroundWrapper.className === className) {
            backgroundWrapper.className = '';
        } else {
            backgroundWrapper.className = className;
        }
    }

    function setBodyBackground(element) {
        var elementStyles = getComputedStyle(element);
        if (elementStyles.backgroundImage === 'none') {
            document.body.style.backgroundColor = elementStyles.backgroundColor;
        } else {
            document.body.style.backgroundImage = elementStyles.backgroundImage;
        }
    }
})();