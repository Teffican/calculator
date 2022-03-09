import { answerDisplay, expressionDisplay } from "../.."
import { changeExpression } from "../handleClick"

const clear = () => {
    changeExpression({leftOperand: '', sign: '', rightOperand: ''})
    expressionDisplay.innerText = ''
    answerDisplay.innerText = '0'
}

export default clear