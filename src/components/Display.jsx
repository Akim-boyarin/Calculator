import React from "react";

export default function Display(props) {
    const { expression, setExpression, calculationResult, calculateResult, dropState} = props;

    let changeHandler = (event) => {
        const validSymbols = '.0123456789+-*/()';
        
        let value = event.target.value;
        let currentSymbol = value.substr(-1);

        if (validSymbols.includes(currentSymbol)) setExpression(event.target.value);
    };

    let pressHandler = (event) => {
        let key = event.key;

        if (key === 'Escape') {
            dropState();
        } else if (key === 'Enter') {
            calculateResult();
        }
    };

    return (
        <div>
            <input type="text" value={expression} onChange={changeHandler} onKeyDown={pressHandler} tabIndex="1" autoFocus/>
            <p>{calculationResult}</p>
        </div>
    );
}
