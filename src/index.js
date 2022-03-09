import './styles/index.scss';
import './styles/calculator.scss';
import buttonList from './components/buttonList';

export const expressionDisplay = document.querySelector('.calculator__expression')
export const answerDisplay = document.querySelector('.calculator__answer')

buttonList();




