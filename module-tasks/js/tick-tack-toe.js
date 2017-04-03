var tickTackToeModule = (function () {

    // save module and basic templates
    var $applicationContainer = $('.tick-tack-toe-module'),
        $startGameTemplate = $('.start-game-template'),
        $initializePlayerTemplate = $('.initialize-player-template'),
        $playGameTemplate = $('.play-game-template');

    // control the start-game template
    var startGame = function () {
        var $startGameButton = $('.start-game-button');
        $startGameButton.click(function () {
            $startGameTemplate.removeClass('app-template_active');
            $initializePlayerTemplate.addClass('app-template_active');
        });
    };

    // control the initialize players template
    var initializeThePlayer = function () {
        var $firstPlayerInput = $('.first-player__name-input'),
            $secondPlayerInput = $('.second-player__name-input'),
            $firstPlayerImage = $('.first-player__image'),
            $secondPlayerImage = $('.second-player__image'),
            $firstPlayerName = $('.first-player__name'),
            $secondPlayerName = $('.second-player__name'),
            $letsStartButton = $('.lets-game-button');

        var isFirstPlayerInit = false,
            isSecondPlayerInit = false;

        $firstPlayerInput.change(function () {
            $firstPlayerName.text( $(this).val() );
            $firstPlayerImage.attr('src', 'https://robohash.org/' + $(this).val());
            isFirstPlayerInit = true;
            if (isFirstPlayerInit && isSecondPlayerInit) {
                $letsStartButton.css('display', 'block');
            }
        });

        $secondPlayerInput.change(function () {
            $secondPlayerName.text( $(this).val() );
            $secondPlayerImage.attr('src', 'https://robohash.org/' + $(this).val());
            isSecondPlayerInit = true;
            if (isFirstPlayerInit && isSecondPlayerInit) {
                $letsStartButton.css('display', 'block');
            }
        });

        $letsStartButton.click(function () {
            $initializePlayerTemplate.removeClass('app-template_active');
            $initializePlayerTemplate.addClass('app-template_active');
        });
    };

    var playGame = function () {
        var $firstPlayerImage = $('.first-player__image-wrapper'),
            $secondPlayerImage = $('.second-player__image-wrapper'),
            $playAreaCells = $('.play-area__cell'),
            activePlayer = 'first',
            possibleWinCombinations = ['048', '246'];

        // add remaining win combinations to array
        for (var i = 0; i < 3; i++) {
            var availableRowCombination = '' + i * 3 + (i * 3 + 1) + (i * 3 + 2),
                availableColumnCombination = '' + i + (i + 3) + (i + 6);
            possibleWinCombinations.push(availableColumnCombination, availableRowCombination);
        }

        var gameXCombination = '',
            gameYCombination = '';

        $playAreaCells.one('click', function () {
        debugger
            if (activePlayer === 'first') {
                $(this).html('&#215;');
                activePlayer = 'second';

                gameXCombination += this.dataset.cellCoordinate;
                var a = possibleWinCombinations.indexOf(gameXCombination);
                verifyTheWinCombination(gameXCombination)
            } else {
                $(this).html('&#9898;');
                activePlayer = 'first';

                rowCoordinate = this.dataset.row;
                columnCoordinate = this.dataset.cell;

                gameYCombination += this.dataset.cellCoordinate;


                verifyTheWinCombination(gameYCombination)
            }
        });
    };

    var verifyTheWinCombination = function (combination) {
        if (possibleWinCombinations.indexOf(combination) !== -1) {
            alert('win');
        }
    };

    // control all application
    var controller = function () {
        startGame();
        initializeThePlayer();
        playGame();
    };

    return {
      initTickTackToe: controller
    };

})();

tickTackToeModule.initTickTackToe();