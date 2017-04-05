'use strict';

// create all questions
var questions  = [
    {
        question: 'Яка столиця Туреччини ?',
        variants: ['Стамбул', 'Анкара', 'Анталія'],
        answer: 'Анкара'
    }, {
        question: 'Хто автор "Теорії Відносності ?',
        variants: ['Енштейн', 'Бор', 'Хокінг'],
        answer: 'Енштейн'
    }, {
        question: 'Скільки існує материків ?',
        variants: ['5', '6', '7'],
        answer: '6'
    }, {
        question: 'Коли було відкрито Америку ?',
        variants: ['1592р', '1113р', '1667р'],
        answer: '1592р'
    }, {
        question: 'Який з монархів Великої Британії правив найдовше ?',
        variants: ['Генріх VII', 'Елизавета І', 'Елизавета ІІ'],
        answer: 'Елизавета ІІ'
    }
];

// put all that question to the local storage
var jsonQuestions = JSON.stringify(questions);
localStorage.setItem('questions', jsonQuestions);

// write test module
var testModule = (function () {

    // create page heading
    var createHeading = function () {
        var heading = ('<h1>Тест по загальних знаннях</h1>');
        $('body').append(heading);
    };

    // create an array for the right answers
    var rightAnswers = [];

    // create questions section
    var crateQuestionsList = function () {
        // get all the questions from local storage
        var jsonQuestions = localStorage.getItem('questions');
        var questions = JSON.parse(jsonQuestions);

        // create list of questions
        var $listOfQuestions = $('<ol>');

        // form each different question
        questions.forEach(function (questionObj, index) {

            // parent for the each question
            var $questionItem = $('<li>');

            // certain question heading
            var $questionHeading = $('<h4>' + questionObj.question + '</h4>');

            // certain question variants of answer
            var $questionsAnswersList = $('<ul>');
            $questionsAnswersList.css('list-style', 'none');

            for (var i = 0; i < questionObj.variants.length; i++) {
                var $variantLabel = $('<label>'),
                    variantText = questionObj.variants[i],
                    $variantInput = $('<input type="radio" name="question' + index + '" value="' + variantText + '">');
                $variantLabel.append($variantInput, variantText);
                $questionsAnswersList.append('<li>' + $variantLabel.get(0).outerHTML + '</li>');
            }

            // put together question heading and question answers
            $questionItem.append($questionHeading, $questionsAnswersList);

            // put complete question item to the list of questions
            $listOfQuestions.append($questionItem);

            // add certain right answer to the array
            rightAnswers.push(questionObj.answer);
            
        });

        $('body').append($listOfQuestions);
    };

    // create verify button
    var createResultButton = function () {
        var $resultButton = $('<input type="button" value="Check the test">');
        $resultButton.css({
            fontSize: '24px',
            display: 'block',
            margin: '0 auto 200px',
            padding: '10px'
        });
        $resultButton.click(function () {
            verifyAnswer();
        });
        $('body').append($resultButton);
    };

    // function which verify the user answers
    var verifyAnswer = function () {
        var userScore = 0,
            userAnswers = [];

        // get all users answers
        $(':checked').each(function () {
            userAnswers.push( $(this).val() );
        });

        rightAnswers.forEach(function (rightAnswer, index) {
            if (rightAnswer === userAnswers[index]) {
                userScore++;
            }
        });
        return userScore;
    };




    return {
        createHeading: createHeading,
        crateQuestionsList: crateQuestionsList,
        createResultButton: createResultButton
    };

})();

testModule.createHeading();
testModule.crateQuestionsList();
testModule.createResultButton ();