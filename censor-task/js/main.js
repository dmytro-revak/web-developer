(function initCensor() {

    // Make function for save the elements
    function getEl(id) {
        return document.getElementById(id);
    }

    // All unavailable words
    var unavailableWords = [];

    // When user add new unavailable word add it to the array and show on the page
    getEl('unavailable-words-button').onclick = function () {
        var userWord = getEl('unavailable-words-input').value;
        if (unavailableWords.indexOf(userWord) === -1) {
            unavailableWords.push(userWord);
            getEl('unavailable-word-container').innerHTML = unavailableWords.join(' ');
        }
    }
})();