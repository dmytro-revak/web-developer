(function initSlider() {

    // Function descriptions //////////////////////////////////////////////////////////////////////////////////////////

    // Get needed element
    function getEl(selector) {
        return document.querySelectorAll(selector);
    }

    // Change activeElement index depending on user button click
    function changeActiveElementIndex(direction, sliderElements) {
        if (direction === 'left') {
            activeElementIndex = activeElementIndex > 0 ? activeElementIndex - 1 : sliderElements.length - 1;
        } else {
            activeElementIndex = activeElementIndex === sliderElements.length -1 ? 0 : activeElementIndex + 1;
        }
    }

    // Remove active class from all elements and set it for only choosing one
    function setActiveClass(indexOfActiveElement, sliderElements) {
        sliderElements.forEach(function (currentElement) {
            if ( currentElement.className.indexOf('slider__item_active') !== -1) {
                currentElement.className = currentElement.className.replace(' slider__item_active', '');
            }
        });
        sliderElements[indexOfActiveElement].className += ' slider__item_active';
    }

    // Application logic ////////////////////////////////////////////////////////////////////////////////////////

    // Save all page elements to appropriate variables
    var sliderItems = getEl('.slider__item'),
        switchPictureButtons = getEl('.slider__switch-button'),
        playButton = getEl('.slider__play-button');

    // Save default active element index
    var activeElementIndex = 0;

    // Change activeElementIndex when user click the switch image button
    switchPictureButtons.forEach(function (button) {
        button.onclick = function () {
            changeActiveElementIndex(this.dataset.direction, sliderItems);
            setActiveClass(activeElementIndex, sliderItems);
        };
    });

    // Set default state of slider
    var isPlaying = false;

    // Toggle slider state after each user clicking the play button. Also toggle the state variable and change play button inner html
    var sliderPlay;
    playButton[0].onclick = function () {
        if (!isPlaying) {
            sliderPlay = setInterval(function () {
                changeActiveElementIndex('left', sliderItems);
                setActiveClass(activeElementIndex, sliderItems);
            }, 3000);
            this.innerHTML = 'Pause';
            isPlaying = true;
        } else {
            clearInterval(sliderPlay);
            this.innerHTML = 'Play';
            isPlaying = false;
        }
    };

})();