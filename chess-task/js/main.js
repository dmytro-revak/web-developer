(function initTheChess() {

    // save all figures and border cells
    var $allChessdFigures = $('.chess-board__figure'),
        $borderCells = $('.chess-board__cell');


    var allPossibleCoordinates = [];

    $borderCells.each(function () {
        allPossibleCoordinates.push(this.dataset.cell);
    });
    //
    // $allChessdFigures.hover(function () {
    //     $borderCells.each(function () {
    //         if(allPossibleCoordinates.indexOf(this.dataset.cell) !== -1) {
    //             $(this).addClass('chess-board__cell_style_available');
    //         }
    //     });
    // }, function () {
    //     $borderCells.each(function () {
    //         $(this).removeClass('chess-board__cell_style_available');
    //     })
    // });

    showAvailableCells($(''), call);

    function showAvailableCells(figure, call) {
        var currentCoordinates = figure.dataset.cell,
            currentXCoordinate = currentCoordinates.charAt(0);
            currentYCoordinate = currentCoordinates.charAt(1);
        call();
    }



    // allow draggable for all figures
    $allChessdFigures.draggable();

    // allow droppable for all board cells
    $borderCells.droppable({

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
