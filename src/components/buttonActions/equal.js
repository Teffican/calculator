import calculate from "../calculate";
import getPrettyNum from "../getPrettyNum";
import { answerDisplay, expressionDisplay } from "../../index";
import { changeExpression, expression } from "../handleClick";

const equal = () => {
    // not accepted if right operand missing
    if(!expression.rightOperand) return;

    answerDisplay.innerText = getPrettyNum(calculate(expression))
    expressionDisplay.innerText += expression.rightOperand + '='
    changeExpression({
        leftOperand: calculate(expression).toString(), 
        sign: '', 
        rightOperand: ''
    })
}

export default equal