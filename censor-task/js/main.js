(function initCensor() {

    // Make function for save the elements
    function getEl(id) {
        return document.getElementById(id);
    }

    // Censor all text unavailable words
    function censorUnavailableWords(text, word, censoredWord) {

        // Replace first occurrences of the unavailable word
        text = text.replace(word, censoredWord);

        // When there is more than one occurrences of the unavailable word do it again
        if (text.indexOf(word) !== -1) {
            text = censorUnavailableWords(text, word, censoredWord);
        }

        // Return censor text
        return text;

    }

    // All unavailable words
    var unavailableWords = [];

    // When user add new unavailable word add it to the array and show on the page
    getEl('unavailable-words-button').onclick = function () {
        var userWord = getEl('unavailable-words-input').value;
        if (unavailableWords.indexOf(userWord) === -1) {
            unavailableWords.push(userWord);
            getEl('unavailable-word-container').innerHTML = unavailableWords.join(' ');
            getEl('unavailable-words-input').value = '';
        }
    };

    // Censor all unavailable words when user click the censor button
    getEl('user-text-button').onclick = function () {
        debugger
        // Get user text
        var userText = getEl('user-text-area').value;

        // Verify each unavailable word
        for (var i = 0; i < unavailableWords.length; i++) {

            // Make censor symbols pattern for unavailable word
            var censorWord = unavailableWords[i].replace(/\S/g, '*');

            // Censor certain unavailable word
            if (userText.indexOf(unavailableWords[i]) !== -1) {
                userText = censorUnavailableWords(userText, unavailableWords[i], censorWord);
            }
        }

        // Change the text area
        getEl('user-text-area').value = userText;
    }

})();