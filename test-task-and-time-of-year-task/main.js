// var month = parseInt( prompt('Enter the month number') );

// if (month > 12 || month <= 0) {
//   alert('Sorry, you have entered incorrect number');
// } else {
//   if (month === 1 || month === 2 || month === 12) {
//     alert('It is winter');
//   } else if (month === 3 || month === 4 || month === 5) {
//     alert('It is spring');
//   } else if (month === 6 || month === 7 || month === 8) {
//     alert('It is summer');
//   } else {
//     alert('It is fall');
//   }
// }

// ------------------------------------------------------------------------------------------------------------------------

var userScore = 0;

var answer = prompt('Яка столиця Туреччини ?\nа) Стамбул  б) Анталія в) Анкара');
if (answer === 'в') {
  userScore++;
}

answer = prompt('Хто автор "Теорії Відносності" ?\nа) Енштейн  б) Бор в) Хокінг');
if (answer === 'а') {
  userScore++;
}

answer = prompt('Скільки існує материків ?\nа) 5  б) 6 в) 7');
if (answer === 'б') {
  userScore++;
}

answer = prompt('Коли було відкрито Америку ?\nа) 1592р  б) 1113р в) 1667р');
if (answer === 'а') {
  userScore++;
}

answer = prompt('Який з монархів Великої Британії правив найдовше ?\nа) Генріх VII  б) Елизаветта І в) Елизаветта ІІ');
if (answer === 'в') {
  userScore++;
}

answer = prompt('Яка найменша одиниця живого ?\nа) Молекула ДНК  б) Організм в) Клітина');
if (answer === 'в') {
  userScore++;
}

answer = prompt('Яке місто було першою столицею України ?\nа) Київ  б) Харків в) Львів');
if (answer === 'а') {
  userScore++;
}

answer = prompt('Вкажіть формулу оксиду гідрогену\nа) H2O2  б) H2O в) HO');
if (answer === 'б') {
  userScore++;
}

answer = prompt('В якому часовому поясі розміщена Україна ?\nа) 1  б) 2 в) 3');
if (answer === 'б') {
  userScore++;
}

answer = prompt('Коли була ухвалена Конституція України ?\nа) 1995  б) 1991 в) 1996');
if (answer === 'в') {
  userScore++;
}

var userKnowlageLevel;

if (userScore <= 5) {
  userKnowlageLevel = 'Хорохий результат, та можна краще';
} else if (userScore > 5 && userScore <= 8 ) {
  userKnowlageLevel = 'Дуже добре. Практично відмінний результат';
} else {
  userKnowlageLevel = 'Ви напевно автор "Теорії Відносності" =)';
}

alert('Ви відповіли правильно на ' + userScore + ' з 10 питань\n' + userKnowlageLevel);
