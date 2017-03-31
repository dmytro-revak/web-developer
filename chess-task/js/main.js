(function initTheChess() {

    // save all figures and board cells
    var $allChessFigures = $('.chess-board__figure'),
        $boardCells = $('.chess-board__cell');

    // show or hide the user course available cells
    function toggleAvailableCells(availableCellsCoordinates) {
        $(availableCellsCoordinates).each(function () {
            $('[data-cell="' + this + '"]').toggleClass('chess-board__cell_style_available');
        }
    )}

    function asdf(fig) {
        $('[data-cell="' + this + '"]').droppable({
            accept: this,
            //     // change the DOM when user moving a certain figure to certain cell
            drop: function (event, ui) {
                var currentFigure = ui.draggable.get(0),
                    currentNewParent = this;
                //
                //         // move figure from one element into other
                switchFigurePosition(currentFigure, currentNewParent);
            }
    })
        ;
    }

    // get available course cells coordinates for the certain figure
    function getAvailableCells(figure, callback) {
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

    $allChessFigures.mousedown(function (){
        var availableCellsCoordinates = getAvailableCells( $('.chess-board__figure').get(0), rookCourse);
        toggleAvailableCells(availableCellsCoordinates);
        debugger
        asdf(this);
    });

    // hide available cells when user doesn't press the mouse button
    $allChessFigures.mouseup(function () {
        var availableCellsCoordinates = getAvailableCells( $('.chess-board__figure').get(0), rookCourse);
        toggleAvailableCells(availableCellsCoordinates);
    });

    // allow draggable for all figures
    $allChessFigures.draggable();

    // allow droppable for all board cells
    // $boardCells.droppable({
    //     // change the DOM when user moving a certain figure to certain cell
    //     drop: function(event, ui) {
    //         var currentFigure = ui.draggable.get(0),
    //             currentNewParent = this;
    //
    //         // move figure from one element into other
    //         switchFigurePosition(currentFigure , currentNewParent);
    //     }
    // });



})();
