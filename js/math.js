var number1;
var number2;
var message;

alert('Let\'s do some Math!');

number1 = parseFloat(prompt('What is the first number?'));
number2 = parseFloat(prompt('What is the second number?'));

if (number2 === 0) {
  alert("The second number is 0. You can't divide by zero. Reload and try again.");
} else if (isNaN(number1) || isNaN(number2)) {
  alert("At least one of the values you typed is not a number. Reload and try again.");
} else {
  message = '<h1>Math with the numbers ' + number1 + ' and ' + number2 + '</h1>';
  message += '<p>' + number1 + ' + ' + number2 + ' = ' + (number1 + number2) + '</p>';
  message += '<p>' + number1 + ' * ' + number2 + ' = ' + (number1 * number2) + '</p>';
  message += '<p>' + number1 + ' / ' + number2 + ' = ' + (number1 / number2) + '</p>';
  message += '<p>' + number1 + ' - ' + number2 + ' = ' + (number1 - number2) + '</p>';

  document.write(message);
}