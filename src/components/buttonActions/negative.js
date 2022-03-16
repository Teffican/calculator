const answerDisplay = document.querySelector('.calculator__answer');

const negative = (changeExpression, expression) => {
  // not accepted if sign is selected
  if (expression.sign && !expression.rightOperand) return;
  // not accepted if current number equal 0
  if (!+answerDisplay.innerText) return;

  //  add/remove '-'
  const changedNum = answerDisplay.innerText.split('').includes('-')
    ? answerDisplay.innerText.slice(1)
    : `-${answerDisplay.innerText}`;

  if (expression.rightOperand) {
    changeExpression({ ...expression, rightOperand: changedNum });
  } else {
    changeExpression({ ...expression, leftOperand: changedNum });
  }

  answerDisplay.innerText = changedNum;
};

export default negative;
