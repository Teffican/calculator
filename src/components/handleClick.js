import clear from './buttonActions/clear';
import decimal from './buttonActions/decimal';
import del from './buttonActions/del';
import equal from './buttonActions/equal';
import negative from './buttonActions/negative';
import getPrettyNum from './getPrettyNum';

const expressionDisplay = document.querySelector('.calculator__expression');
const answerDisplay = document.querySelector('.calculator__answer');

let expression = { leftOperand: '', sign: '', rightOperand: '' };
const changeExpression = (newExpression) => {
  expression = newExpression;
};

const handleClick = (e) => {
  const btn = e.target.innerText;

  if (Number.isInteger(+btn)) {
    // not accepted 0+0
    if (answerDisplay.innerText === '0' && !+btn) return;

    if (expression.sign) { // set right operand
      expression.rightOperand += btn;
      answerDisplay.innerText = getPrettyNum(expression.rightOperand);
    } else { // set left operand
      expression.leftOperand += btn;
      answerDisplay.innerText = getPrettyNum(expression.leftOperand);
    }
  } else {
    switch (btn) {
      case '=':
        equal(changeExpression, expression);
        break;
      case 'C':
        clear(changeExpression, expression);
        break;
      case '⌫':
        del(changeExpression, expression);
        break;
      case '.':
        decimal(changeExpression, expression);
        break;
      case '+/-':
        negative(changeExpression, expression);
        break;
      default:
        if (expression.leftOperand) {
          expression.sign = btn;
          expressionDisplay.innerText = expression.leftOperand + expression.sign;
        }
        break;
    }
  }
};

export default handleClick;
