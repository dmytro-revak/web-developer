// Завдання 1: Потрібно написати функцію, яка повертає максимальний переданий їй числовий параметр. Кількість параметрів складає 3 або 4.
// Приклад роботи:
// f(5,-2,10) – має повернути 10;
// f(5,-2,30,6) – має повернути 30;


// function returnMax() {
//   var max = arguments[0];
//   for (var i = 0; i < arguments.length; i++) {
//     if (arguments[i] > max) {
//       max = arguments[i];
//     }
//   }
//   return max;
// }

// console.log( returnMax(1, 5, 2, 3, 47) );



//---------------------------------------------------------------------------------------------------------

// Завдання 2: Потрібно написати функцію, яка обраховує суму чисел геометричної прогресії, в якій першим числом є 1. 

// function getProgressionNumbersAmount(progressionLength, progressionDenominator) {
//   var progressionNumbersAmount = 1,
//       progressionNumber = 1;
//   for (var i = 1; i < progressionLength; i++) {
//     progressionNumbersAmount += progressionNumber *= progressionDenominator;
//   }
//   return progressionNumbersAmount;
// }
// console.log( getProgressionNumbersAmount(3, 2) );

//--------------------------

// function getProgressionNumbersAmount(progressionLength, progressionDenominator) {
//   return progressionNumbersAmount = ( 1 - getNumberDegree(progressionDenominator, progressionLength) ) / (1 - progressionDenominator) * 1;
// }
// console.log( getProgressionNumbersAmount(4, 3) );

function getNumberDegree(startNumber, degree) {
  var numberDegree = 1;
  for (var i = 0; i < degree; i++) {
    numberDegree *= startNumber;
  }
  return numberDegree;
}

//----------------------------

function getProgressionNumbersAmount(progressionLength, progressionDenominator) {
  var currentNumber = 1 * getNumberDegree(progressionDenominator, progressionLength - 1);
  if (currentNumber !== 1 ) {
    return currentNumber + getProgressionNumbersAmount(progressionLength - 1, progressionDenominator);
  } else {
    return currentNumber;
  }
}
console.log( getProgressionNumbersAmount(5, 2) );


//-----------------------------------------------------------------------------------------------------------------------

// Завдання 3: Потрібно написати функцію, в яку передається 2 параметри, які користувач вводить через вікно prompt(). Потрібно щоб функція виводила діапазон тільки простих чисел вікном alert(), між тими які ввів користувач.

// function showRangeOfNumber(startNumber, lastNumber) {
//   var rangeOfNumber = '';
//   for (var i = startNumber; i <= lastNumber; i++) {
//     var currentNumber = i,
//         dividersAmount = 0;
//     for (var d = 1; d <= 10; d++) {
//       if (currentNumber % d === 0) {
//         dividersAmount ++;
//       }
//     }
//     if (dividersAmount <= 2) {
//       rangeOfNumber += ' ' + currentNumber;
//     }
//   }
//   return rangeOfNumber;
// }
// alert( showRangeOfNumber(2, 29) );


