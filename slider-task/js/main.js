(function initSlider() {

    // Get needed element
    function getEl(selector) {
        return document.querySelectorAll(selector);
    }

    // Change activeElement index depending on user button click
    function changeActiveElementIndex(direction, sliderElements) {
        if (direction === 'left') {
            activeElementIndex = activeElementIndex > 0 ? activeElementIndex - 1 : sliderElements.length - 1;
        } else {
            activeElementIndex = activeElementIndex === sliderElements.length ? 0 : activeElementIndex + 1;
        }
    }

    // Save all page elements to appropriate variables
    var sliderItems = getEl('.slider__item'),
        switchPictureButtons = getEl('.slider__switch-button');
    // Save default active element index
    var activeElementIndex = 0;

    // Change activeElementIndex when user click the switch image button
    switchPictureButtons.forEach(function (button) {
        button.onclick = function () {
            changeActiveElementIndex(this.dataset.direction, sliderItems);
        }
    });



})();