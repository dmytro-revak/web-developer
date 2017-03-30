(function initTheChess() {

    // save all figures and board cells
    var $allChessFigures = $('.chess-board__figure'),
        $boardCells = $('.chess-board__cell');


    var allPossibleCoordinates = [];

    // save all possible coordinates to array
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

    $allChessFigures.mouseup(function () {
        $boardCells.each(function () {
            $(this).removeClass('chess-board__cell_style_available');
        })
    });

    // showAvailableCells($(''), call);

    function showAvailableCells(figure, call) {
        var currentCoordinates = figure.dataset.cell,
            currentXCoordinate = currentCoordinates.charAt(0);
            currentYCoordinate = currentCoordinates.charAt(1);
        call();
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
