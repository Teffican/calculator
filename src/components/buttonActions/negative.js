import { answerDisplay } from "../..";
import { changeExpression, expression } from "../handleClick";

const negative = () => {
    // not accepted if sign is selected
    if(expression.sign && !expression.rightOperand) return;
    //not accepted if current number equal 0
    if(!+answerDisplay.innerText) return;

    //  add/remove '-'
    const changedNum = answerDisplay.innerText.split('').includes('-')
        ? answerDisplay.innerText.slice(1)
        : '-' + answerDisplay.innerText

    expression.rightOperand
        // ? expression.rightOperand = changedNum
        // : expression.leftOperand = changedNum
        ? changeExpression({...expression, rightOperand: changedNum})
        : changeExpression({...expression, leftOperand: changedNum})

    answerDisplay.innerText = changedNum
}

export default negative