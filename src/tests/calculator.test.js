import calculate from '../components/calculate'

test('calculator actions', () => { 
    expect(calculate({leftOperand: '3', sign: '+', rightOperand: '4'})).toEqual(7)
    expect(calculate({leftOperand: '11', sign: '–', rightOperand: '8'})).toEqual(3)
    expect(calculate({leftOperand: '15', sign: 'x', rightOperand: '3'})).toEqual(45)
    expect(calculate({leftOperand: '105', sign: '÷', rightOperand: '5'})).toEqual(21)
    expect(calculate({leftOperand: '31', sign: '%', rightOperand: '5'})).toEqual(1)

    expect(calculate({leftOperand: '-100', sign: '+', rightOperand: '40'})).toEqual(-60)
    expect(calculate({leftOperand: '-100', sign: '+', rightOperand: '-40'})).toEqual(-140)    
    expect(calculate({leftOperand: '-30', sign: '–', rightOperand: '-40'})).toEqual(10)    
    expect(calculate({leftOperand: '30', sign: '–', rightOperand: '-21'})).toEqual(51)

    expect(calculate({leftOperand: '1.5', sign: '+', rightOperand: '1.7'})).toEqual(3.2)
    expect(calculate({leftOperand: '-22.2', sign: '+', rightOperand: '5.1'})).toEqual(-17.1)
})