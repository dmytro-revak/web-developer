(function initTheChess() {

    // save all figures and board cells
    var $allChessFigures = $('.chess-board__figure'),
        $boardCells = $('.chess-board__cell');

    // save all possible coordinates to array
    var allPossibleCoordinates = [];
    $boardCells.each(function () {
        allPossibleCoordinates.push(this.dataset.cell);
    });

    // show the user course available cells
    $allChessFigures.mousedown(function () {
        $boardCells.each(function () {
            if(allPossibleCoordinates.indexOf(this.dataset.cell) !== -1) {
                $(this).addClass('chess-board__cell_style_available');
            }
        });
    });

    // hide available cells when user doesn't press the mouse button
    $allChessFigures.mouseup(function () {
        $boardCells.each(function () {
            $(this).removeClass('chess-board__cell_style_available');
        })
    });

    getAvailableCells( $('.chess-board__figure').get(0), rookCourse);

    // get available course cells for the certain figure
    function getAvailableCells(figure, callback) {
        debugger
        var currentCoordinates = $(figure).parent().get(0).dataset.cell,
            currentXCoordinate = currentCoordinates.charAt(0);
            currentYCoordinate = currentCoordinates.charAt(1);

        return callback(currentXCoordinate, currentYCoordinate);
    }

    // describe available cells for coursing for the rook figure
    function rookCourse(Xcoordinate, Ycoordinate) {
        var rookAvailableCoordinates = [];

        for (var i = 0; i < 8; i++) {
            var xStaticCoordinatesPair = Xcoordinate + i,
                yStaticCoordinatesPair = i + Ycoordinate;

            rookAvailableCoordinates.push(xStaticCoordinatesPair, yStaticCoordinatesPair);
        }
        return rookAvailableCoordinates;
    }



    // allow draggable for all figures
    $allChessFigures.draggable();

    // allow droppable for all board cells
    $boardCells.droppable({

        // change the DOM when user moving a certain figure to certain cell
        drop: function(event, ui) {
            var currentFigure = ui.draggable.get(0),
                currentNewParent = this;

            // move figure from one element into other
            switchFigurePosition(currentFigure , currentNewParent);
        }
    });


    function switchFigurePosition(figure, newParent) {

        // change the parent DOM element for the figure
        newParent.append(figure);

        // Set it to the center of new parent
        $(figure).css({
               top: 0,
               left: 0
        });
    }

})();
