const expressionDisplay = document.querySelector('.calculator__expression');
const answerDisplay = document.querySelector('.calculator__answer');

const clear = (changeExpression) => {
  changeExpression({ leftOperand: '', sign: '', rightOperand: '' });
  expressionDisplay.innerText = '';
  answerDisplay.innerText = '0';
};

export default clear;
