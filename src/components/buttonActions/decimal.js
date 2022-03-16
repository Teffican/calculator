const answerDisplay = document.querySelector('.calculator__answer');

const decimal = (changeExpression, expression) => {
  // not accepted if sign is selected
  if (expression.sign && !expression.rightOperand) return;
  // not accepted if '.' already in the number
  if (answerDisplay.innerText.split('').includes('.')) return;

  if (expression.rightOperand) {
    changeExpression({ ...expression, rightOperand: `${expression.rightOperand}.` });
  } else {
    changeExpression({
      ...expression,
      leftOperand: expression.leftOperand + (expression.leftOperand ? '.' : '0.'),
    });
  }

  answerDisplay.innerText += '.';
};

export default decimal;
