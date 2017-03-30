(function initTheChess() {

    var $allBoardFigures = $('.chess-board__figure'),
        $borderCells = $('.chess-board__cell');

    var availableCoordinates = [
        ['a', 'b', 'c', 'd', 'e', 'f', 'h', 'i']
    ];

    $allBoardFigures.draggable({
    });

    $borderCells.droppable({
        drop: function(event, ui) {

            console.log(ui);
            console.log(this);
        }
    });

})();
