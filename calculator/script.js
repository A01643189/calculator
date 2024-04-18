let fullOperation = '';
let result = '';

function pressButton(number) {
  console.log('hello world' + number);
  fullOperation = fullOperation + number;
  showNumber();
}

function pressOperation(op) {
  console.log(op);
  let [operando1, operador, operando2] = fullOperation.toString().split(/(\+|-|\x|\^|\/)/);
  if (operador) return;
  fullOperation = fullOperation + op;
  showNumber();
}

function showPreviousNumber() {
    document.getElementById('previousNumberDisplay').innerHTML = result;
}

function calculateResult() {
  const values = fullOperation.split(/(\+|-|\x|\^|\/)/);

  console.log(values);
  let [number1, operador, number2] = fullOperation.split(/(\+|-|\x|\^|\/)/);

  console.log(number1);
  console.log(number2);
  console.log(operador);

  number1 = parseFloat(number1);
  number2 = parseFloat(number2);

  switch (operador) {
    case 'x':
      fullOperation = multiplication(number1, number2);
      break;
    case '-':
      fullOperation = number1 - number2;
      break;
    case '+':
        fullOperation = number1 + number2;
        break;
    case '^':
        fullOperation = Math.pow(number1, number2);
        break;
    case '/':
        fullOperation = number1 / number2;
        break;
    default:
      break;
  }
  showNumber();
  result = result + "\n"+ fullOperation;
  showPreviousNumber();
}

function multiplication(number1, number2) {
  return number1 * number2;
}

function showNumber() {
  document.getElementById('operand1Display').innerHTML = fullOperation;
}

function clearScreen() {
    fullOperation = '';
    showNumber();
}

showNumber();