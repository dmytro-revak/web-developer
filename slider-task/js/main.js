(function initSlider() {

    // Get needed element
    function getEl(selector) {
        return document.querySelectorAll(selector);
    }

    // change activeElement index depending on user button click
    function switchSliderElement(direction, sliderElements) {
        if (direction === 'left') {
            activeElementIndex = activeElementIndex > 0 ? activeElementIndex-- : sliderElements.length - 1;
        } else {
            activeElementIndex = activeElementIndex === sliderElements.length ? 0 : activeElementIndex++;
        }
    }

    // Save all page elements to appropriate variables
    var sliderItems = getEl('slider__item'),
        switchPictureButtons = getEl('slider__switch-button ');

    // Save default active element index
    var activeElementIndex = 0;

    switchPictureButtons.forEach(function (button) {
        button.onclick = function () {

        }
    });



})();