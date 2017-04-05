'use strict';

// create all questions
var questions  = [
    {
        question: 'Яка столиця Туреччини ?',
        variantA: 'Стамбул',
        variantB: 'Стамбул',
        variantC: 'Стамбул',
        answer: 'Анкара'
    }, {
        question: 'Хто автор "Теорії Відносності ?',
        variantA: 'Енштейн',
        variantB: 'Бор',
        variantC: 'Хокінг',
        answer: 'Енштейн'
    }, {
        question: 'Скільки існує материків ?',
        variantA: '5',
        variantB: '6',
        variantC: '7',
        answer: '6'
    }, {
        question: 'Коли було відкрито Америку ?',
        variantA: '1592р',
        variantB: '1113р',
        variantC: '1667р',
        answer: '1592р'
    }, {
        question: 'Який з монархів Великої Британії правив найдовше ?',
        variantA: 'Генріх VII',
        variantB: 'Елизавета І',
        variantC: 'Елизавета ІІ',
        answer: 'Елизавета ІІ'
    }
];

    var jsonQuestions = JSON.stringify(questions);
    localStorage.setItem('questions', jsonQuestions);

var testModule = (function () {
    var createHeading = function () {
        var $heading = ('<h1> Тест по програмуванню </h1>');
        $('body').append($heading);
    };

    var crateQuestionsList = function () {
        var $questionsList = ('<ol>');
    };




    return {

    };

})();