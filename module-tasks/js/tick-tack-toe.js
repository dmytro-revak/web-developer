var tickTackToeModule = (function () {

    // save module and basic templates
    var $applicationContainer = $('.tick-tack-toe-module'),
        $startGameTemplate = $('.start-game-template'),
        $initializePlayerTemplate = $('.initialize-player-template');

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
            $secondPlayerName = $('.second-player__name');

        $firstPlayerInput.change(function () {
            $firstPlayerName.text( $(this).val() );
            $firstPlayerImage.attr('src', 'https://robohash.org/' + $(this).val())
        });

        $secondPlayerInput.change(function () {
            $secondPlayerName.text( $(this).val() );
            $secondPlayerImage.attr('src', 'https://robohash.org/' + $(this).val())
        });
    };

    // control all application
    var controller = function () {
        startGame();
        initializeThePlayer();
    };

    return {
      initTickTackToe: controller
    };

})();

tickTackToeModule.initTickTackToe();