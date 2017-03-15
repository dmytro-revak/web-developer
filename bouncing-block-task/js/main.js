(function initbouncingBlocktask() {

    // Save needed elements to the variables
    var bouncingBlock = document.querySelector('.bouncing-block'),
        controlMenu = document.querySelector('.control-menu'),
        creatingButton = document.querySelector('.creating-button'),
        sizeInputes = document.querySelectorAll('.size-input'),
        chooseStyleButtons = document.querySelectorAll('.choose-style-button'),
        coordinatesButton = document.querySelector('.coordinates-button');

    // Make bouncing-block visible
    creatingButton.onclick = function() {
        bouncingBlock.style.display = 'block';
    }

    // Change width and height of bouncing-block when user change one of the size inputes  
    sizeInputes.forEach(function(input) {
        input.onchange = function() {
            bouncingBlock.style[this.name] = this.value + 'px';       
        }
    });

    // Change style of created element with cliking on one of the choose-style-buttons
    chooseStyleButtons.forEach(function(chooseButton) {
        chooseButton.onclick = function() {
            bouncingBlock.style.border = getComputedStyle(this).border;   
            bouncingBlock.style.background = getComputedStyle(this).background;
        }
    });

    // Create tow arrays for X and Y coordinates
    var xCoordinates = [];
    var yCoordinates = [];

    // Count the using pairs of coordinates
    var counter;

    // Ask user coordinates pairs amount and each coordinate 
    coordinatesButton.onclick = function() {
        controlMenu.style.display = 'none';
        getCoordinatesPairs( parseInt( prompt('Enter coordinates pairs amount') ) );
        counter = 0;
    }

    // Change the bouncing-block position accordint the coordinater when user hover it
    bouncingBlock.onmouseenter = function() {
        this.style.top = yCoordinates[counter] + '%';
        this.style.left = xCoordinates[counter] + '%';
        counter++;
    }

    // Ask user to enter each X and Y coordinates and put them to certin arrays  
    function getCoordinatesPairs(coordinatesPairsAmount) {
        for (var i = 0; i < coordinatesPairsAmount; i++) {
            if (xCoordinates[coordinatesPairsAmount - 1]) {
                yCoordinates[i] = parseInt( prompt('Enter ' + (i + 1) + ' Y coordinate at %') );
            } else {
                xCoordinates[i] = parseInt( prompt('Enter ' + (i + 1) + ' X coordinate at %') );
                if (i === coordinatesPairsAmount - 1) {
                    i = -1;
                }
            }
        }
    }

})();
