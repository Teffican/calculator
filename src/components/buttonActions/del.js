const answerDisplay = document.querySelector('.calculator__answer');

const del = (changeExpression, expression) => {
  // not accepted if sign is selected
  if (expression.sign && !expression.rightOperand) return;

  if (expression.rightOperand) {
    changeExpression({ ...expression, rightOperand: expression.rightOperand.slice(0, -1) });
  } else {
    changeExpression({ ...expression, leftOperand: expression.leftOperand.slice(0, -1) });
  }

  answerDisplay.innerText = answerDisplay.innerText.length > 1
    ? answerDisplay.innerText.slice(0, -1)
    : 0;
};

export default del;
