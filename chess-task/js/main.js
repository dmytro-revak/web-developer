var chessModule = (function() {

    // save all figures and board cells
    var $allChessFigures = $('.chess-board__figure'),
        $boardCells = $('.chess-board__cell');

    // show the user course available cells
    function showAvailableCells(availableCellsCoordinates) {
        $(availableCellsCoordinates).each(function () {
            $('[data-cell="' + this + '"]').addClass('chess-board__cell_style_available');
        }
    )}

    // hide the user course available cells
    function hideAvailableCells(previousAvailableCellsCoordinates) {
        $(previousAvailableCellsCoordinates).each(function () {
            $('[data-cell="' + this + '"]').removeClass('chess-board__cell_style_available');
        });
    }

    function dragCertainFigureToCertainCell(coordinates) {

        // save all available for current figure cells
        var allAvailableCells = [];

        $(coordinates).each(function () {
            allAvailableCells.push($('[data-cell="' + this + '"]').get(0));
        });

        // make that all that cell droppable for figure
        $(allAvailableCells).droppable({

            // change the DOM when user moving a certain figure to certain cell
            drop: function (event, ui) {
                var currentFigure = ui.draggable.get(0),
                    currentNewParent = this;

                // move figure from one element into other
                switchFigurePosition(currentFigure, currentNewParent);
                $(allAvailableCells).droppable('disable');
            }
        });

        // make only current course cells droppable independent the previous user's courses
        $(allAvailableCells).droppable('enable');
    }

    // get available course cells coordinates for the certain figure
    function getAvailableCells(figure, callback) {
        var currentCoordinates = $(figure).parent().get(0).dataset.cell,
            currentXCoordinate = currentCoordinates.charAt(0);
            currentYCoordinate = currentCoordinates.charAt(1);

        return callback(currentXCoordinate, currentYCoordinate);
    }

    // describe rook figure available cells coursing for
    function rookCourse(Xcoordinate, Ycoordinate) {
        var rookAvailableCoordinates = [];

        for (var i = 0; i < 8; i++) {
            var xStaticCoordinatesPair = Xcoordinate + i,
                yStaticCoordinatesPair = i + Ycoordinate;

            if (xStaticCoordinatesPair !== yStaticCoordinatesPair) {
                rookAvailableCoordinates.push(xStaticCoordinatesPair, yStaticCoordinatesPair);
            }
        }
        return rookAvailableCoordinates;
    }

    // move the certain figure to that cell where user drop the one
    function switchFigurePosition(figure, newParent) {

        // change the parent DOM element for the figure
        newParent.append(figure);

        // Set it to the center of new parent
        $(figure).css({
               top: 0,
               left: 0
        });
    }

     return {
         $allChessFigures : $allChessFigures,
         $boardCells: $boardCells,
         getAvailableCells: getAvailableCells,
         showAvailableCells: showAvailableCells,
         hideAvailableCells: hideAvailableCells,
         dragCertainFigureToCertainCell: dragCertainFigureToCertainCell,
         switchFigurePosition: switchFigurePosition,
         rookCourse :rookCourse
     }

})();

var previousAvailableCellsCoordinates;

chessModule.$allChessFigures.mousedown(function (){
    debugger
    var availableCellsCoordinates = chessModule.getAvailableCells($(this), chessModule[this.dataset.figureCourse]);
    chessModule.showAvailableCells(availableCellsCoordinates);
    chessModule.dragCertainFigureToCertainCell(availableCellsCoordinates);
    previousAvailableCellsCoordinates = availableCellsCoordinates;
});

// hide available cells when user doesn't press the mouse button
chessModule.$allChessFigures.mouseup(function () {
    // debugger
    // var availableCellsCoordinates = getAvailableCells( $('.chess-board__figure').get(0), rookCourse);
    chessModule.hideAvailableCells(previousAvailableCellsCoordinates);
    // toggleAvailableCells(availableCellsCoordinates);
});

chessModule.$allChessFigures.draggable({
    revert: true
});
