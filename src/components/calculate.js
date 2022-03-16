const calculate = (expression) => {
  let answer;

  switch (expression.sign) {
    case '+':
      answer = +expression.leftOperand + +expression.rightOperand;
      break;
    case '–':
      answer = +expression.leftOperand - +expression.rightOperand;
      break;
    case 'x':
      answer = +expression.leftOperand * +expression.rightOperand;
      break;
    case '÷':
      answer = +expression.leftOperand / +expression.rightOperand;
      break;
    case '%':
      answer = +expression.leftOperand % +expression.rightOperand;
      break;
    default:
  }

  return parseFloat(answer.toFixed(3));
};

export default calculate;
