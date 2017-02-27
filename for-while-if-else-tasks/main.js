// Завдання 1: Користувач вводитьпо черзі  5 чисел через prompt. Знайти кількість від’ємних чиселі вивести результат через alert.

// var negativeNumbersAmount = 0;
// for (var i = 0; i < 5; i++) {
//   var userNumber = parseInt( prompt('Enter number') );
//   if (userNumber < 0) {
//     negativeNumbersAmount++;
//   }
// }
// alert('You have entered ' + negativeNumbersAmount + ' negative numbers');

// -----------------------------------------------------------------------------------------------------------------

// Завдання 2: Зробити запит у користувача , скільки зірочок він хоче побачити на сторінці і в якому розташуванні він їх хоче побачити : горизонтальному або вертикальному . Необхідно створити нову змінну і запросити у користувача ще одні дані: нехай 1 - це горизонтальна лінія з зірочок , а 2 - це вертикальна . 

// var starsAmonut = parseInt( prompt('How many stars you want to see at the page ?') ),
//     starsDirection = parseInt( prompt('Enter 1 if you want to choose horizontal direction for the stars\nEnter 2 if you want to choose vertical direction for the stars') );
//
// for (var i = 0; i < starsAmonut; i++) {
//   if (starsDirection === 1) {
//     document.write('*');
//   } else if (starsDirection === 2) {
//     document.write('*<br>');
//   }
// }

//---------------------------------------------------------------------------------------------------------------------

// Завдання 3: Необхідно виводити зірочки , поки користувач не зупинить цей процес. Відповідно, після виведення кожної зірочки питати у користувача чи хоче він ще 

// var userChoise = confirm('Do you want to write the star ?');
// while (userChoise) {
//   alert('*');
//   userChoise = confirm('Do you want to write the star again ?');
// }

// ---------------------------------------------------------------------------------------------------------------------

// Завдання 4: Користувач вводить числа по черзі до тих пір, поки не буде введене від’ємне число. Потрібно обрахувати кількість чисел, які були введені до моменту зупинки циклу.

// var userEnteredNumbers = 0;
// var userNumber = parseInt( prompt('Enter the number') );
// while (userNumber >= 0) {
//   userNumber = parseInt( prompt('Enter the number') );
//   userEnteredNumbers++;
// }
// alert('You have entered ' + userEnteredNumbers + ' numbers before');

// ---------------------------------------------------------------------------------------------------------------------

// Завдання 5: Пароль і 4 спроби.
// 1). Запросити у користувача пароль!
// 2). Якщо пароль не вірнийповідомитищозалишилось 4 спроби!
// - якщо далі невірні паролі спроби зменшуються.
// - коли спробвже нема вивестиповідомлення: "Будь ласка спробуйтепізніше!".
// 3). Якщо користувач одразу чи після кількох спроб ввів вірний пароль, вивести повідомлення "Запрошуємо на сайт!".
//
//for (var i = 3; i >= 0; i--) {
//    var userPassword = prompt('Enter your password');
//    if (userPassword === '123') {
//        alert('Welcome to site');
//        break;
//    }
//    if (i > 0) {
//        alert('You have only ' + i + ' attempts');
//    } else {
//        alert('Please, try later');
//    }
//}

//-----------------------------------------------------------------------------------------------------------------------

// 1. Створіть програму, що виводить на екран всі чотиризначні числа послідовності 1000 1003 1006 1009 1012 1015.

//var startNumber = 1000;
//for (var i = 0; i < 6; i++) {
//    document.write(' ' + startNumber);
//    startNumber += 3
//}

//-----------------------------------------------------------------------------------------------------------------------

// 2.     Створіть програму, що виводить на екран перші 55 елементів послідовності 1 3 5 7 9 11 13 15 17 ....

// var startNumber = 1;
// for (var i = 0; i < 55; i++) {
//   document.write(startNumber + ' ');
//   startNumber += 2;
// }

//------------------------------------------------------------------------------------------------------------------------

// 3.     Створіть програму, що виводить на екран всі невід'ємні елементи послідовності 90 85 80 75 70 65 60 ....

// startNumber = 90;
// while (startNumber >= 0) {
//   document.write(startNumber + ' ');
//   startNumber -= 5;
// }

// ------------------------------------------------------------------------------------------------------------------------

// 4.     Створіть програму, що виводить на екран перші 20 елементів послідовності 2 4 8 16 32 64 128 ....

// var startNumber = 2;
// for (var i = 0; i < 20; i++) {
//   document.write(startNumber + ' ');
//   startNumber *= 2;
// }

//-----------------------------------------------------------------------------------------------------------------------

// 5.     Виведіть на екран всі числа в послідовності 2a-1, де a1 = 2, які менше 10000.

// var startNumber = 2;
// var result = 1;
// while (result < 10000) {
//   document.write(result + ' ');
//   result = 2 * startNumber - 1;
//   startNumber ++;
// }

// var result = 1;
// for (var i = 2; i > 0; i++) {
//   document.write(result + ' ');
//   result = 2 * i - 1;
//   if (result > 10000) {
//     break;
//   }
// }


// http://javazadachi.blogspot.com/2013/10/2an-11-a12-10000.html

//----------------------------------------------------------------------------------------------------------------------

// 6.     Виведіть на екран всі двозначні члени послідовності 2a+200, де a1 = -166.

// var startNumber = -166;
// var result = 0;
// while (result < 100) {
//   result = 2 * startNumber + 200;
//   startNumber ++;
//   if ( (result > -100 && result < -9) || (result > 9 && result < 100) ) {
//     document.write(result + ' ');
//   }
// }

// var result = 0;
// for (var i = -166; i < 99; i ++) {
//   result = 2 * i + 200;
//   if ( (result > -100 && result < -9) || (result > 9 && result < 100) ) {
//     document.write(result + ' ');
//   }
// }

// http://javazadachi.blogspot.com/2013/10/2an-1200-a1-166.html

//-----------------------------------------------------------------------------------------------------------------------

// 7.     Створіть програму, яка обчислює факторіал натурального числа n, яке користувач введе з клавіатури.

// var userNumber =  parseInt( prompt('Enter the number') );
// var factorial = 1;
// for (var i = userNumber; i > 0; i--) {
//   factorial *= i;
// }
// document.write(factorial);

//-----------------------------------------------------------------------------------------------------------------------

//8.     Виведіть на екран всі позитивні подільники натурального числа, введеного користувачем з клавіатури.

// var userNumber =  parseInt( prompt('Enter the number') );
// for (var i = 1; i <= userNumber; i ++) {
//   if (userNumber % i === 0) {
//     document.write(i + ' ');
//   }
// }

//-----------------------------------------------------------------------------------------------------------------------

//9. Перевірте, чи є введене користувачем з клавіатури натуральне число - простим. 

// var userNumber =  parseInt( prompt('Enter the number') );
// var dividersAmount = 0;
// for (var i = 1; i <= userNumber; i ++) {
//   if (userNumber % i === 0) {
//     dividersAmount ++;
//   }
// }
// if (dividersAmount === 2) {
//   document.write('Yes. Your eneter number is prime number');
// } else {
//   document.write('No. Your eneter number isn\'t prime number'); 
// }

//---------------------------------------------------------------------------------------------------------------------

// 10. Виведіть на екран перші 11 членів послідовності Фібоначчі. Нагадуємо, що перший і другий члени послідовності рівні одиницям, а кожен наступний - сумою двох попередніх. 

// var firstNumber = 1;
// var secondNumber = 1;
// for (var i = 0; i < 11; i ++) {
//     var result = firstNumber + secondNumber;
//     firstNumber = secondNumber;
//     secondNumber = result;
//     document.write(result + ' ');
// }


//-----------------------------------------------------------------------------------------------------------------------

// 11. Для введеного користувачем з клавіатури натурального числа порахуйте суму всіх його цифр (заздалегідь не відомо скільки цифр буде в числі).

// var userNumber = parseInt( prompt('Enter the number') ); 
// var suma = 0;
// while (userNumber > 0) {
//   if (userNumber % 10) {
//     suma += userNumber % 10;
//     userNumber -= userNumber % 10;
//   } else {
//     userNumber /= 10;
//   }
// } 
// document.write(suma);

//рахує тільки коли колристувач вводить число менше 16-ти символів, тому що в js на типу даних int стоъться обмеження в 16-ть цифр. бо кожен тип даних зберыгаэться в памяті, тому розмір кожного числа обмежений кількістю бітів пам"яті, які для нього  відведені
