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
    function setActiveClass(indexOfActiveElement, sliderElements, activeClassName) {
        sliderElements.forEach(function (currentElement) {
            if (currentElement.className.indexOf(activeClassName) !== -1) {
                currentElement.className = currentElement.className.replace(' ' + activeClassName, '');
            }
        });
        sliderElements[indexOfActiveElement].className += ' ' + activeClassName;
    }

    // Application logic ////////////////////////////////////////////////////////////////////////////////////////

    // Save all page elements to appropriate variables
    var sliderItems = getEl('.slider__item'),
        switchPictureButtons = getEl('.slider__switch-button'),
        playButton = getEl('.slider__play-button'),
        sliderDots = getEl('.slider__navigation-dot'),
        sliderImagePreview = getEl('.slider__image-preview ');

    // Save default active element index
    var activeElementIndex = 0;

    // Change activeElementIndex when user click the switch image button
    switchPictureButtons.forEach(function (button) {
        button.onclick = function () {
            changeActiveElementIndex(this.dataset.direction, sliderItems);
            setActiveClass(activeElementIndex, sliderItems, 'slider__item_active');
            setActiveClass(activeElementIndex, sliderDots, 'slider__navigation-dot_active');
        };
    });

    // Set default state of slider
    var isPlaying = false;

    // Toggle slider state after each user clicking the play button. Also toggle the state variable and change play button inner html
    var sliderPlay;
    playButton[0].onclick = function () {
        if (!isPlaying) {
            sliderPlay = setInterval(function () {
                changeActiveElementIndex('right', sliderItems);
                setActiveClass(activeElementIndex, sliderItems, 'slider__item_active');
                setActiveClass(activeElementIndex, sliderDots, 'slider__navigation-dot_active');
            }, 3000);
            this.innerHTML = 'Pause';
            isPlaying = true;
        } else {
            clearInterval(sliderPlay);
            this.innerHTML = 'Play';
            isPlaying = false;
        }
    };

    // Change active image and active dot when user click to the certain dot
    sliderDots.forEach(function (sliderDot) {
        sliderDot.onclick = function () {
            activeElementIndex = parseInt(this.dataset.activeIndex);
            setActiveClass(activeElementIndex, sliderItems, 'slider__item_active');
            setActiveClass(activeElementIndex, sliderDots, 'slider__navigation-dot_active');
        };
    });

    // Show the images preview block when user hover the slider dot
    sliderDots.forEach(function (sliderDot) {
        sliderDot.onmouseover = function () {

            // Save needed background image path to a variable
            var dotActiveIndex = parseInt(this.dataset.activeIndex);
            var imagePath = sliderItems[dotActiveIndex].children[0].src;

            // Change preview block's background and position
            if (this.className.indexOf('slider__navigation-dot_active') === -1) {
                sliderImagePreview[0].style.left = parseInt(this.offsetLeft) - 44 + 'px';
                sliderImagePreview[0].style.display = 'block';
                sliderImagePreview[0].style.backgroundImage = 'url("' + imagePath + '")';
            }
        };
    });

    // Hide the images preview block when user goes out the slider dot
    sliderDots.forEach(function (sliderDot) {
        sliderDot.onmouseout = function () {
            sliderImagePreview[0].style.display = 'none';
        };
    });

})();