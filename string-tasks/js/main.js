(function initStringTasks() {

    // Save working area and page buttons to variables. And define a variable for the textarea value. 
    var userText,
        workingTextArea = document.getElementById('working-text-area'),
        spacesAmountButton = document.getElementById('spaces-amount-button'),
        emailValidatioinButton = document.getElementById('email-validatioin'),
        htmlWordsAmountButton = document.getElementById('html-words-amount');

        // Put user's text to the variable after it has been changed.
        workingTextArea.onchange = function() {
            userText  = workingTextArea.value;
        };

        // Count amount of spaces 
        spacesAmountButton.onclick = function() {
            var spacesConter = 0;
            for (var i = 0; i < userText.length; i++) {
                if (userText[i] === ' ') {
                    spacesConter++;
                }
            }
            alert('You have entered ' + spacesConter + ' spaces');

            // or
             
            alert(userText.split(' ').length-1);
        };



        // Validate the user's email
        emailValidatioinButton.onclick = function() {
            var atSignIndex  = userText.indexOf('@');
            if (atSignIndex === -1 || atSignIndex === 0 || atSignIndex === userText.length - 1) {
                alert('You have entered incorrect email');
            } else {
                alert('Your email is valid');
            }
        };

        // Count the "html" words
        htmlWordsAmountButton. onclick = function() {
            var htmlWordsCounter = 0;
            while (userText.indexOf('html') !== -1) {
                userText = userText.replace('html', '');
                htmlWordsCounter++;
            }
            alert('You have entered "html" ' + htmlWordsCounter + ' times');
        };            
})();
