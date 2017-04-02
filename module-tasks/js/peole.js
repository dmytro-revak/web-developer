var people = (function () {

    var names = [],
        $nameList,
        $addButton,
        $nameInput;

    var cacheDom = function () {
        $nameList = $('.people-module__name-list').eq(0);
        $addButton = $('.people-module__add-button').eq(0);
        $nameInput= $('.people-module__name-input').eq(0);
    };

    var bindEvent = function () {
        $addButton.click(function () {
            var currentName = $nameInput.val();
            addPersonName(currentName);
        });
    };

    var addPersonName = function (name) {
        names.push(name);
        renderPage();
    };

    var delPersonName = function (nameIndex) {
        names.splice(nameIndex, 1);
        renderPage();
    };

    var renderPage = function () {
        $('.people-module__name-item').remove();
        $(names).each(function () {
            var currentName = this.toString(),
                $nameListItem = $('<li class="people-module__name-item">'),
                $delItemBtn = $('<span> X</span>');

        debugger
            $delItemBtn.data('name-index') === (names.length - 1);
            $delItemBtn.click(function () {
                debugger
                delPersonName($(this).eq(0).data('name-index'));
            });

            $nameListItem.html('<span>' + currentName + '</span>');
            $nameListItem.append($delItemBtn);
            $nameList.append($nameListItem);
        });
    };

    var initPeople = function () {
        cacheDom();
        bindEvent();
    };

    return {
        initPeople: initPeople
    }

})();

people.initPeople();