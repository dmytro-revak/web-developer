(function initTheChess() {

    // save all figures and border cells
    var $allChessdFigures = $('.chess-board__figure'),
        $borderCells = $('.chess-board__cell');

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
