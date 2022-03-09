import { answerDisplay, expressionDisplay } from ".."
import clear from "./buttonActions/clear"
import decimal from "./buttonActions/decimal"
import del from "./buttonActions/del"
import equal from "./buttonActions/equal"
import negative from "./buttonActions/negative"
import getPrettyNum from "./getPrettyNum"

export let expression = {leftOperand: '', sign: '', rightOperand: ''}
export const changeExpression = (newExpression) => {
    expression = newExpression
}

const handleClick = (e) => {
    let btn = e.target.innerText

    if(Number.isInteger(+btn)){
        // not accepted 0+0
        if(answerDisplay.innerText === '0' && !+btn) return;

        if(expression.sign){ // set right operand
            expression.rightOperand += btn
            answerDisplay.innerText = getPrettyNum(expression.rightOperand)
        } else { // set left operand
            expression.leftOperand += btn 
            answerDisplay.innerText = getPrettyNum(expression.leftOperand)
        }
        
    } else {
        switch (btn) {
            case '=':
                equal()
                break;
            case 'C':
                clear()
                break;
            case '⌫':
                del()
                break;
            case '.':
                decimal()
                break;
            case '+/-':
                negative()
                break;
            default:
                if(expression.leftOperand){
                    expression.sign = btn
                    expressionDisplay.innerText = expression.leftOperand + expression.sign
                }
                break;
        }
    }

}

export default handleClick