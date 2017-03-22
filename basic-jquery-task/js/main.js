(function initJqueryTask() {

    var elementsSelectors = ['#s1', 'b.s2', '#second i', '[title="hello"]', '[target="_blank"]', '#second span.extra'];

    var finalPhrase = '';

    elementsSelectors.forEach(function (elementSelector) {
        finalPhrase += $(elementSelector).text() + ' ';
    });

    alert(finalPhrase);

})();
