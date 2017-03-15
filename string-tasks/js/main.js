(function initStringTasks() {

    // Save working area and page buttons to variables
    var workingTextArea = document.getElementById('working-text-area'),
        spacesAmountButton = document.getElementById('spaces-amount-button');

        // Count amount of spaces 
        spacesAmountButton.onclick = function() {

            var userText  = workingTextArea.value,
                spacesConter = 0;

            for (var i = 0; i < userText.length; i++) {
                if (userText[i] === ' ') {
                    spacesConter++
                }
            }

            alert('User have entered ' + spacesConter + ' spaces');
        };
})();