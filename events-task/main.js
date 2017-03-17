// color task------------------------------------------------------------------------------------------------------------

// var div = document.getElementById('container');
// div.style.height = '300px';
// div.style.width = '300px';
// div.style.margin = 'auto';
// div.style.background = 'violet';

// var nextColor = 'red';
// div.addEventListener('mouseover', changeColor);
// div.addEventListener('mouseout', setDefaultColor);

// function changeColor() {
//   if (nextColor === 'red') {
//     div.style.background = 'red';
//     nextColor = 'yellow';
//   } else if (nextColor === 'yellow') {
//     div.style.background = 'yellow';
//     nextColor = 'green';
//   } else {
//     div.style.background = 'green';
//     nextColor = 'red';
//   } 
// }

// function setDefaultColor() {
//     div.style.background = 'violet';
// }


// secret task---------------------------------------------------------------------------------------------------------

// var div = document.getElementById('container');
// div.style.height = '300px';
// div.style.width = '300px';
// div.style.margin = 'auto';
// div.style.background = 'violet';
// div.style.border = '10px groove orange';
// div.style.textAlign = 'center';
// div.style.fontSize = '30px';
// div.style.color = 'black';
// div.innerHTML = 'У мене є секрет !';

// wasCliclBefore = false;
// div.addEventListener('mouseover', askTheQuestion);
// div.addEventListener('mouseout', returenDefaultStyles);
// div.addEventListener('mousedown', showTheSecret);
// div.addEventListener('mouseup', askTheQuestion);

// function askTheQuestion() {
//   div.style.color = 'blue';
//   div.style.background = 'yellow';
//   div.style.border = '10px groove green';
//   div.innerHTML = 'Хочеш знати який ?';
// }

// function returenDefaultStyles() {
//   if (wasCliclBefore) {
//     div.style.color = 'blue';
//   } else {
//     div.style.color = 'black';
//   }
//   div.style.background = 'violet';
//   div.style.border = '10px groove orange';
//   div.innerHTML = 'У мене є секрет !';  
// }

// function showTheSecret() {
//   div.style.background = 'black';
//   div.style.border = '10px groove yellow';
//   div.style.color = 'white';
//   div.innerHTML = 'А я тобі не скажу !';
//   wasCliclBefore = true; 
// }


// Завдання 2:На сторінці знаходиться список ul з сімома кольорами, написаними англійською мовою. Потрібно щоб в циклі alert по черзі виводив внутрішнє вмістиме кожного пункту li, і відразу після цього цей поточний пункт замалювався тим кольором, який в ньому записаний.

// window.addEventListener('click', showColor);

// function showColor() {
//   var items = document.getElementsByTagName('li');
//   for (var i = 0; i < items.length; i++) {
//     alert(items[i].innerHTML);
//     items[i].style.color = items[i].innerHTML;
//   }
// }

// Завдання 1: На сторінці знаходяться три пустих блоки div. Користувач по черзі вводить три адреси зображень (в циклі), які мають застосовуватись як фон до блоків.

// var blocksTobackground = document.querySelectorAll('.withoutBackground');
// for (var i = 0; i < blocksTobackground.length; i++) {
//   var sourse = prompt('Enter image sourse');
//   blocksTobackground[i].style.height = '200px';
//   blocksTobackground[i].style.backgroundImage = 'url("' + sourse +'")';
//   blocksTobackground[i].style.backgroundRepeat = 'no-repeat';
// }