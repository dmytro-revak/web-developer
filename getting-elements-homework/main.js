var userStyleChoise = prompt('Enter the page background color');
document.body.style.backgroundColor = userStyleChoise;

userStyleChoise = prompt('Enter a font style for the page');
document.body.style.fontStyle = userStyleChoise;

userStyleChoise = prompt('Enter a header text align');
document.getElementsByTagName('h1')[0].style.textAlign = userStyleChoise;

userStyleChoise = prompt('Enter background color for the link paragraph');
document.getElementById('link-paragraph').style.backgroundColor = userStyleChoise;

userStyleChoise = prompt('Enter text color for the link paragraph');
document.getElementById('link-paragraph').style.color = userStyleChoise;

userStyleChoise = prompt('Enter color for links');
var links = document.querySelectorAll('p a');
for (var i = 0; i < links.length; i ++) {
  links[i].style.color = userStyleChoise;
}

userStyleChoise = prompt('Enter color for the text within container');
document.querySelector('div').style.color = userStyleChoise;

userStyleChoise = prompt('Enter size for the text within container');
document.querySelector('.container').style.fontSize = userStyleChoise + 'px';

userStyleChoise = prompt('Enter weight for the text within container');
document.querySelectorAll('.container')[0].style.fontWeight = userStyleChoise;

userStyleChoise = prompt('Enter type for the page list');
document.getElementsByClassName('list')[0].style.listStyleType = userStyleChoise;

for (var i = 0; i < links.length; i ++) {
  userStyleChoise = prompt('Enter adress the ' + (i + 1) + ' of your favourite sites' );
  links[i].href = userStyleChoise;
  links[i].innerHTML = userStyleChoise;
}
