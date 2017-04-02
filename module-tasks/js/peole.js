var people = (function () {

    // make variables to save the names and some page elements
    var names = [],
        $nameList,
        $addButton,
        $nameInput;

    // get needed elements and save them to the variables
    var cacheDom = function () {
        $nameList = $('.people-module__name-list').eq(0);
        $addButton = $('.people-module__add-button').eq(0);
        $nameInput= $('.people-module__name-input').eq(0);
    };

    // add event listener to the add button
    var bindEvent = function () {
        $addButton.click(function () {
            var enteredName = $nameInput.val();
            addPersonName(enteredName);
        });
    };

    // add new name to the names array
    var addPersonName = function (name) {
        names.push(name);
        renderPage();
    };

    // remove certain name from the names array
    var delPersonName = function (nameIndex) {
        names.splice(nameIndex, 1);
        renderPage();
    };

    // update the page when names array has been changed and show actual names for user
    var renderPage = function () {
        $('.people-module__name-item').remove();
        names.forEach(function (element, index) {
            var currentName = element,
                $nameListItem = $('<li class="people-module__name-item">'),
                $delItemBtn = $('<span> X</span>');

            $delItemBtn.attr('data-name-index', index);
            $delItemBtn.click(function () {
                delPersonName(this.dataset.nameIndex);
            });

            $nameListItem.html('<span>' + currentName + '</span>');
            $nameListItem.append($delItemBtn);
            $nameList.append($nameListItem);
        });
    };

    // inti main html control functions
    var initPeople = function () {
        cacheDom();
        bindEvent();
    };

    return {
        initPeople: initPeople
    }

})();

people.initPeople();