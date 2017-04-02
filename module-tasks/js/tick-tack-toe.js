var tickTackToeModule = (function () {

    var $applicationContainer = $('.tick-tack-toe-module'),
        $startGameTemplate = $('.start-game-template'),
        $initializePlayerTemplate = $('.initialize-player-template');


    var startGame = function () {
        var $startGameButton = $('.start-game-button');

        $startGameButton.click(function () {
            $startGameTemplate.removeClass('app-template_active');
            $initializePlayerTemplate.addClass('app-template_active');
        });
    };

    var controller = function () {
        startGame();
    };

    return {
      initTickTackToe: controller
    };

})();

tickTackToeModule.initTickTackToe();