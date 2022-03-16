import calculate from '../calculate';
import getPrettyNum from '../getPrettyNum';

const expressionDisplay = document.querySelector('.calculator__expression');
const answerDisplay = document.querySelector('.calculator__answer');

const equal = (changeExpression, expression) => {
  // not accepted if right operand missing
  if (!expression.rightOperand) return;

  answerDisplay.innerText = getPrettyNum(calculate(expression));
  expressionDisplay.innerText += `${expression.rightOperand}=`;

  changeExpression({
    leftOperand: calculate(expression).toString(),
    sign: '',
    rightOperand: '',
  });
};

export default equal;
