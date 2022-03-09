import handleClick from "./handleClick";

const buttonList = () => {
    const buttonListHtml = document.querySelector('.calculator__button-list');
    const buttons = [
        'C', '+/-', '%', '÷',
        '7', '8', '9', 'x',
        '4', '5', '6', '–',
        '1', '2', '3', '+',
        '.', '0', '⌫', '=',
    ]

    buttons.forEach((button, index) => {
        const newButton = document.createElement("button")
        newButton.innerText = button
        newButton.classList.add('calculator__button-item')
        if(index < 3) newButton.classList.add('calculator__button-item_secondary');
        if((index + 1) % 4 === 0) newButton.classList.add('calculator__button-item_primary');
        
        newButton.addEventListener('click', handleClick)

        buttonListHtml.appendChild(newButton)
    })
}

export default buttonList