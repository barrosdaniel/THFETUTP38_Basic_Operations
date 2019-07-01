alert('Let\'s do some Math!');

var number1 = prompt('What is the first number?');
number1 = parseFloat(number1);

var number2 = prompt('What is the second number?');
number2 = parseFloat(number2);

var message = '<h1>Math with the numbers ' + number1 + ' and ' + number2 + '</h1>';
message += '<p>' + number1 + ' + ' + number2 + ' = ' + (number1 + number2) + '</p>';
message += '<p>' + number1 + ' * ' + number2 + ' = ' + (number1 * number2) + '</p>';
message += '<p>' + number1 + ' / ' + number2 + ' = ' + (number1 / number2) + '</p>';
message += '<p>' + number1 + ' - ' + number2 + ' = ' + (number1 - number2) + '</p>';

document.write(message);