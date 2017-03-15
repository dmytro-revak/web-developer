(function initbouncingBlocktask() {

    // Save needed elements to the variables
    var bouncingBlock = document.querySelector('.bouncing-block'),
        creatingButton = document.querySelector('.creating-button'),
        widthInput = document.querySelector('.width-input'),
        heightInput = document.querySelector('.height-input'),
        chooseStyleButtons = document.querySelectorAll('.choose-style-button'),
        coordinatesButton = document.querySelector('.coordinates-button');

    // Make bouncing-block visible
    creatingButton.onclick = function() {
        bouncingBlock.style.display = 'block';
    }
    
})();